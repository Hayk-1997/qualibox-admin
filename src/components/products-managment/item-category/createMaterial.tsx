import React from "react"
import { Form, Input, InputNumber, Modal } from "antd"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { createItemCategory } from "@store/slices/itemCategoriesSlice"
import { useRouter } from "next/navigation"
import { PATHS } from "@constants/navigations.constants"
import { API_URL_ID_REGEX } from "@constants/common.constants"
import { IItemCategory } from "@types/itemCategories"

type Props = {
	show: boolean,
	closeFn: () => void
}

const CreateItemCategory: React.FC = ({ show, closeFn }: Props): JSX.Element => {
	const dispatch = useAppDispatch();
	const [formInstance] = Form.useForm();
	const router = useRouter()
	const handleCreate = async () => {
		try {
			const values = await formInstance.validateFields()
			formInstance.resetFields()
			dispatch(
				createItemCategory(
					values as IItemCategory,
					(material: IItemCategory) => {
						router.push(PATHS.PRODUCTS_MANAGMENT_ITEM_CATEGORY_DEEP_VIEW.replace(API_URL_ID_REGEX, material.id))
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
			</Form>
		</Modal>
	)
}
export default CreateItemCategory