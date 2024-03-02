import { Table, Input, Button, Modal, Form } from "antd";
import { PlusOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const GeneralInfoAdd = ({ modalVisible, handleCancelAddRow, handleSaveRow, newRowTitle, }) => {

	const [title, setTitle] = useState();
	const [content, setContent] = useState();

	const clear = () => {
		setTitle("")
		setContent("")
	}

	const onCancel = () => {
		handleCancelAddRow()
		clear()
	}



	return (
		<Modal
			open={modalVisible}
			title="Add New Row"
			onCancel={onCancel}
			footer={[
				<Button key="cancel" onClick={onCancel}>
					<CloseOutlined /> Cancel
				</Button>,
				<Button
					key="save"
					type="primary"
					onClick={() => {
						handleSaveRow({ title, content })
						clear()
					}}
				>
					<SaveOutlined /> Save
				</Button>,
			]}
		>
			<Form>
				<Form.Item>
					<Input
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Form.Item>
				<Form.Item>
					<Input.TextArea
						placeholder="Content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</Form.Item>
			</Form>
		</Modal>
	)
}
export default GeneralInfoAdd