import { useEffect, useState } from "react";
import { Col, Row, Form, Spin, Input, InputNumber, Button, Modal, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useAppSelector } from "@hooks/useAppSelector";
import { getIsSaving, getItemCategory, saveItemCategory } from "@store/slices/itemCategoriesSlice";
import { isFormChanged } from "@utils/form.utils";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { API_URLS, BASE_URL } from "@constants/api.constants";
import { API_URL_ID_REGEX, API_URL_ID_STRING } from "@constants/common.constants";
import ApiInstance from "@services/axios";
import Methods from "@enums/api.enums";
import { IItemCategory } from "@types/itemCategories";

interface Props {
	onTabChange?: () => void
}

const GeneralInfo = ({ onTabChange }: Props) => {
	const dispatch = useAppDispatch()
	const itemCategory = useAppSelector(getItemCategory)
	const isSaving = useAppSelector(getIsSaving)
	const [formInstance] = Form.useForm();
	const { validateFields, setFieldsValue, getFieldValue } = formInstance;
	const [isFormTouched, setIsFormTouched] = useState(false);
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState<UploadFile[]>([])

	useEffect(() => {
		if (itemCategory === null) { return }
		setFieldsValue({ ...itemCategory })
	}, [itemCategory])

	useEffect(() => {
		if (typeof onTabChange === "function") {
			onTabChange(isFormTouched);
		}
	}, [isFormTouched])

	const onValuesChange = (_, formValues) => {
		setIsFormTouched(isFormChanged({ ...formValues }, { ...itemCategory }));
	};

	const onFinish = (formValues: IItemCategory) => {
		dispatch(
			saveItemCategory(
				{ ...itemCategory, ...formValues }
			)
		);
		setIsFormTouched(false)
	};

	return (
		<Row gutter={16}>
			<Col span={24}>
				<div className="section-wrapper">
					<div className="section-content">
						<Spin spinning={false} wrapperClassName="form-spin">
							<Form
								colon={false}
								form={formInstance}
								requiredMark={false}
								layout="vertical"
								// validateTrigger="onSubmit"
								initialValues={itemCategory}
								onValuesChange={onValuesChange}
								onFinish={onFinish}
							>
								<Row gutter={[16, 0]}>
									<Col xs={24} sm={12} lg={6} xl={4}>
										<Form.Item
											name="name"
											label="Name"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} lg={6} xl={4} className="flex justify-start items-center">
										<Button
											type="primary"
											className="mt-1"
											htmlType="submit"
											loading={isSaving}
											disabled={!isFormTouched}
										>
											Save
										</Button>
									</Col>
								</Row>
							</Form>
						</Spin>
					
					</div>
				</div>
			</Col>
		</Row>
	)
}
export default GeneralInfo