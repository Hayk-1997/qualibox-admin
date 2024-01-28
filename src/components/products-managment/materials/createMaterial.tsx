import React from "react"
import { Form, Input, InputNumber, Modal } from "antd"
import { TMaterial } from "@types/material"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { createMaterial, reciveMaterials } from "@store/slices/materialsSlice"
import { useRouter } from "next/navigation"
import { PATHS } from "@constants/navigations.constants"
import { API_URL_ID_REGEX } from "@constants/common.constants"

type Props = {
	show: boolean,
	closeFn: () => void
}

const CreateMaterial: React.FC = ({ show, closeFn }: Props): JSX.Element => {
	const dispatch = useAppDispatch();
	const [formInstance] = Form.useForm();
	const router = useRouter()
	const handleCreate = async () => {
		try {
			const values = await formInstance.validateFields()
			formInstance.resetFields()
			dispatch(
				createMaterial(
					values as TMaterial,
					(material: TMaterial) => {
						router.push(PATHS.PRODUCTS_MANAGMENT_MATERIALS_DEEP_VIEW.replace(API_URL_ID_REGEX, material.id))
					}
				)
			)
			closeFn()
		} catch (error) {
			console.log("Validate Failed:", error);
		}
	};
	return (
		<Modal
			title="Create Material"
			open={show}
			onCancel={closeFn}
			onOk={handleCreate}
			okText="Submit"
		>
			<Form
				form={formInstance}
				layout="vertical"
			>
				<Form.Item
					label="Name"
					name="name"
					rules={[
						{ required: true }
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Cost"
					name="cost"
					rules={[
						{ required: true }
					]}
				>
					<InputNumber type="number" controls={false} />
				</Form.Item>
				<Form.Item
					label="Price"
					name="price"
					rules={[
						{ required: true }
					]}
				>
					<InputNumber type="number" controls={false} />
				</Form.Item>
			</Form>
		</Modal>
	)
}
export default CreateMaterial