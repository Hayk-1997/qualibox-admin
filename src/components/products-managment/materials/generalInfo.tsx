import { useEffect, useState } from "react";
import { Col, Row, Form, Spin, Input, InputNumber, Button, Modal, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useAppSelector } from "@hooks/useAppSelector";
import { getIsSaving, getMaterial, removeMaterialImage, saveMaterial, uploadMaterialImage } from "@store/slices/materialsSlice";
import { isFormChanged } from "@utils/form.utils";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { IMaterial } from "@types/material";
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { API_URLS, BASE_URL } from "@constants/api.constants";
import { API_URL_ID_REGEX, API_URL_ID_STRING } from "@constants/common.constants";
import ApiInstance from "@services/axios";
import Methods from "@enums/api.enums";

interface Props {
	onTabChange?: () => void
}

const getBase64 = (file: RcFile): Promise<string> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});

const GeneralInfo = ({ onTabChange }: Props) => {
	const dispatch = useAppDispatch()
	const material = useAppSelector(getMaterial)
	const isSaving = useAppSelector(getIsSaving)
	const [formInstance] = Form.useForm();
	const { validateFields, setFieldsValue, getFieldValue } = formInstance;
	const [isFormTouched, setIsFormTouched] = useState(false);
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState<UploadFile[]>([])

	useEffect(() => {
		if (material === null) { return }
		setFieldsValue({ ...material })
		setFileList(material.uploads || [])
	}, [material])

	useEffect(() => {
		if (typeof onTabChange === "function") {
			onTabChange(isFormTouched);
		}
	}, [isFormTouched])

	const onValuesChange = (_, formValues) => {
		setIsFormTouched(isFormChanged({ ...formValues }, { ...material }));
	};

	const onFinish = (formValues: IMaterial) => {
		dispatch(
			saveMaterial(
				{ ...material, ...formValues }
			)
		);
		setIsFormTouched(false)
	};

	const handleCancel = () => setPreviewOpen(false);

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as RcFile);
		}

		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
		setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
	};

	const handleChange: UploadProps['onChange'] = ({ file, fileList }) => {
		if (file.status === "removed") {
			dispatch(removeMaterialImage(file.uid))
			
		}
		setFileList(fileList)
	};

	const beforeUpload = async (file) => {
		dispatch(uploadMaterialImage(file))
	}

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
								initialValues={material}
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
									<Col xs={24} sm={12} lg={6} xl={4}>
										<Form.Item
											name="cost"
											label="Cost"
										>
											<InputNumber type="number" controls={false} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={12} lg={6} xl={4}>
										<Form.Item
											name="price"
											label="Price"
										>
											<InputNumber type="number" controls={false} />
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
						{
							material
								? (
									<Upload
										listType="picture-card"
										fileList={fileList}
										onPreview={handlePreview}
										onChange={handleChange}
										beforeUpload={beforeUpload}
									>
										<div>
											<PlusOutlined />
											<div style={{ marginTop: 8 }}>Upload</div>
										</div>
									</Upload>
								)
								: null
						}
						<Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
							<img alt="example" style={{ width: '100%' }} src={previewImage} />
						</Modal>
					</div>
				</div>
			</Col>
		</Row>
	)
}
export default GeneralInfo