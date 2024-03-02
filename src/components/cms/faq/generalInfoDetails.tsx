import { useState, useEffect } from "react";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { Table, Input, Button, Modal, Form, Row, Col } from "antd";
import { PlusOutlined, SaveOutlined, CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import { getIsSaving, getFAQ, saveFAQHeader, createFAQContent, updateFAQContents, deleteFAQContent } from "@store/slices/faqsSlice";
import { isFormChanged } from "@utils/form.utils";
import { IFAQ, IFAQContent, IFAQContent } from "@types/FAQ";
import GeneralInfoAdd from "./generalInfoAdd";
import useEvent from "@hooks/useEvent";

const GeneralInfoDetails = () => {

	const dispatch = useAppDispatch()
	const faq = useAppSelector(getFAQ)
	const isSaving = useAppSelector(getIsSaving)

	// const [isFormTouched, setIsFormTouched] = useState(false);
	// const [formInstance] = Form.useForm();

	// const onValuesChange = (_, formValues) => {
	// 	setIsFormTouched(isFormChanged({ ...formValues }, { ...faq }));
	// };

	// const onFinish = (formValues: IFAQ) => {
	// 	dispatch(
	// 		saveFAQHeader(
	// 			{ ...faq, ...formValues }
	// 		)
	// 	);
	// 	setIsFormTouched(false)
	// };

	// useEffect(() => {
	// 	if (faq === null) { return }
	// 	formInstance.setFieldsValue({ header: faq.header })
	// }, [faq])

	const [dataSource, setDataSource] = useState([]);
	const [initialDataSource, setInitialDataSource] = useState([]);
	const [count, setCount] = useState(0);
	const [isEdited, setIsEdited] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [newFaqContent, setNewFaqContent] = useState(null)
	const [formInstance] = Form.useForm()

	useEffect(() => {
		setDataSource(faq.contents)
	}, [faq]);

	useEffect(() => {
		setIsEdited(!compareDataSources(dataSource, faq.contents));
	}, [dataSource]);

	const compareDataSources = useEvent((dataSource1, dataSource2) => {
		if (dataSource1.length !== dataSource2.length) return false;
		for (let i = 0; i < dataSource1.length; i++) {
			if (dataSource1[i]?.title !== dataSource2[i]?.title || dataSource1[i]?.content !== dataSource2[i]?.content) {
				return false;
			}
		}
		return true;
	});

	const handleAddRow = () => {
		setModalVisible(true);
	};

	const handleSaveRow = async ({ title, content }) => {
		setModalVisible(false);
		const newData:IFAQContent = {
			title: title,
			content: content,
		};
		const newDataForStore:IFAQContent = { ...newData, faq_id: faq.id }
		dispatch(createFAQContent(newDataForStore))
	};

	const handleCancelAddRow = () => {
		setModalVisible(false);
	};
	const onValuesChange = () => {
		setIsEdited(true);
	};

	const handleSaveChanges = () => {
		// Logic to save changes
		const newDataList = dataSource.reduce((acc, elem, i) => {
			const old = faq.contents[i];
			if (elem.title !== old.title || elem.content !== old.content) {
				acc.push({ ...elem })
			}

			return acc;

		}, [])
		console.log(newDataList);
		
		dispatch(updateFAQContents(newDataList))
		setIsEdited(false);
	};

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			render: (text, record) => (
				<Row gutter={[16, 0]} >
					<Col flex={"auto"}>
						<Input value={text} onChange={(e) => handleChange(record.id, 'title', e.target.value)} disabled={isSaving} />
					</Col>
					<Col>
						<Button
							onClick={() => {
								dispatch(deleteFAQContent(record.id))
							}}
						>
							<DeleteOutlined />
						</Button>
					</Col>
				</Row>
			),
		}
	];

	const expandedRowRender = (record) => {
		return (
			<Row wrap={false} style={{ width: "100%", paddingTop: 16, paddingBottom: 16 }} gutter={[24, 16]}>
				<Col style={{ padding: 36 }}></Col>
				<Col flex={"1 0 auto"} >
					<Input.TextArea
						value={record.content}
						onChange={(e) => handleChange(record.id, 'content', e.target.value)}
						autoSize={{ minRows: 3, maxRows: 6 }}
						disabled={isSaving}
					/>
				</Col>
			</Row>
		);
	};

	const handleChange = (id, field, value) => {
		const newData = dataSource.map(item => {
			if (item.id === id) {
				return { ...item, [field]: value };
			}
			return item;
		});
		setDataSource(newData);
		setIsEdited(true);
	};
	

	return (
		<div>
			<Form
				form={formInstance}
				initialValues={
					dataSource.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
				}
				onValuesChange={onValuesChange}
			>
				<Button
					disabled={isSaving || isEdited}
					onClick={handleAddRow}
					type="primary"
					style={{ marginBottom: 16 }}
				>
					<PlusOutlined /> Add Row
				</Button>
				{
					isEdited
						? (
							<Button
								disabled={isSaving}
								onClick={handleSaveChanges}
								type="primary"
								style={{ marginBottom: 16, marginLeft: 16 }}
							>
								Save Changes
							</Button>
						)
						: null
				}
				<GeneralInfoAdd
					modalVisible={modalVisible}
					handleCancelAddRow={handleCancelAddRow}
					handleSaveRow={handleSaveRow}
				/>
				<Table
					rowKey="id"
					showHeader={false}
					dataSource={dataSource}
					columns={columns}
					expandable={{ expandedRowRender }}
					pagination={false}
				/>
			</Form>
		</div>
	)
}
export default GeneralInfoDetails