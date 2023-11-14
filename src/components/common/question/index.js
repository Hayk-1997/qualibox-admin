import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Modal, Form, Input } from 'antd';
const { Item: FormItem } = Form;
import { POPUP_SIZE } from 'constants/common.constants';

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

	const { t } = useTranslation();
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
						required: true, whitespace: true, message: t('validation.field_required')
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
				<Input.TextArea rows={3} maxLength={maxLength} placeholder={`${t('common.enter')} ${promptLabel}`} />
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
			cancelText={t('common.no')}
			okText={t('common.yes')}
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

/** Question propTypes
	 * PropTypes
*/
Question.propTypes = {
	/** Confirm or Prompt, confirm by default */
	type: PropTypes.oneOf(["prompt", "confirm"]),
	/** is Modal visible */
	isVisible: PropTypes.bool,
	/** Modal message */
	message: PropTypes.string,
	/** Modal title */
	title: PropTypes.string,
	/** Modal OK button click handler */
	onOk: PropTypes.func,
	/** Modal Cancel button click handler */
	onCancel: PropTypes.func,
	/** Prompt input field label */
	promptLabel: PropTypes.string,
	/** Should Prompt input field be required */
	isPromptRequired: PropTypes.bool,
	/** Modal additional JSX content */
	popupContent: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	/** If true, loader will be show on ok button */
	isLoading: PropTypes.bool,
	/** Should Prompt additional validation */
	promptValidationRules : PropTypes.arrayOf(PropTypes.object),
	/** Prompt text area text length */
	maxLength : PropTypes.number
}

export default Question;