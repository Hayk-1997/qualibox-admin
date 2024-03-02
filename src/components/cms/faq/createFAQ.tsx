import React from "react"
import { Form, Input, InputNumber, Modal } from "antd"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { createFAQ } from "@store/slices/faqsSlice"
import { useRouter } from "next/navigation"
import { PATHS } from "@constants/navigations.constants"
import { API_URL_ID_REGEX } from "@constants/common.constants"
import { IFAQ } from "@types/FAQ"

type Props = {
	show: boolean,
	closeFn: () => void
}

const CreateFAQ: React.FC = ({ show, closeFn }: Props): JSX.Element => {
	const dispatch = useAppDispatch();
	const [formInstance] = Form.useForm();
	const router = useRouter()
	const handleCreate = async () => {
		try {
			const values = await formInstance.validateFields()
			formInstance.resetFields()
			dispatch(
				createFAQ(
					values as IFAQ,
					(faq: IFAQ) => {
						router.push(PATHS.CMS_FAQ_DEEP_VEW.replace(API_URL_ID_REGEX, faq.id))
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
			title="Create F.A.Q. Header"
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
					label="Header"
					name="header"
					required
				>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	)
}
export default CreateFAQ