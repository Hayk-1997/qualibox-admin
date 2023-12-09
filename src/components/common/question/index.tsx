import React from 'react';
import { Modal, Form, Input } from 'antd';
const { Item: FormItem } = Form;
import { POPUP_SIZE } from '@constants/common.constants';

/** Question Component, the comfirmation modal, which appears before important action */
const Question = ({
	isVisible,
	onCancel,
	onOk,
	message,
	title,
	type,
	promptLabel,
	isPromptRequired,
	popupContent,
	promptValidationRules = [],
	maxLength = 100,
	isLoading,
	...rest
}) => {

	const [formInstance] = Form.useForm();
	const { validateFields, resetFields } = formInstance;

	/** Fires when form submitted
		* @function
		* @memberOf Question
  */
	const handleOk = () => {
		if (type === "confirm") {
			return onOk()
		}
		validateFields()
			.then(data => popupContent ? data : data.prompt)
			.then(data => onOk(data))
			.catch(Function.prototype)
	}

	/** Fires on Cancel
		* @function
		* @memberOf Question
  */
	const handleCancel = () => {
		if (type === "prompt") {
			resetFields();
		}
		onCancel();
	}

	const renderInnerChildren = () => {
		if (popupContent) {
			return popupContent;
		}
		const rules = (
			isPromptRequired
				? [
					{
						required: true, whitespace: true
					}
				]
				: []
		).concat(promptValidationRules)
		return (
			<FormItem
				className="inline-form-item-control"
				name="prompt"
				rules={rules}
			>
				<Input.TextArea rows={3} maxLength={maxLength} placeholder={`Enter ${promptLabel}`} />
			</FormItem>
		)
	}
	const renderChildren = () => {
		if (type !== "prompt") {
			return popupContent;
		}
		return (
			<Form
				form={formInstance}
				layout="vertical"
				style={{ marginTop: "30px" }}
				requiredMark={false}
			>
				{renderInnerChildren()}
			</Form>
		)
	}

	return (
		<Modal
			open={isVisible}
			centered
			closable={false}
			cancelText={"No"}
			okText={"Yes"}
			wrapClassName="table-confirmation-modal"
			maskClosable={true}
			onCancel={handleCancel}
			onOk={handleOk}
			okButtonProps={{ disabled: isLoading, loading: isLoading }}
			width={POPUP_SIZE.SMALL}
			zIndex="1001"
			{...rest}
		>
			{
				title ? <h2>{title}</h2> : null
			}
			<span>{message}</span>
			{renderChildren()}
		</Modal>
	)
}

export default Question;