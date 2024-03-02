import { useState, useEffect } from "react";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { Col, Row, Form, Spin, Input, InputNumber, Button, Table } from "antd";
import { getIsSaving, getFAQ, saveFAQHeader } from "@store/slices/faqsSlice";
import { isFormChanged } from "@utils/form.utils";
import { IFAQ } from "@types/FAQ";

const GeneralInfoHeader = () => {

	const dispatch = useAppDispatch()
	const faq = useAppSelector(getFAQ)
	const isSaving = useAppSelector(getIsSaving)
	const [isFormTouched, setIsFormTouched] = useState(false);

	const [formInstance] = Form.useForm();

	const onValuesChange = (_, formValues) => {
		setIsFormTouched(isFormChanged({ ...formValues }, { ...faq }));
	};

	const onFinish = (formValues: IFAQ) => {
		dispatch(
			saveFAQHeader(
				{ ...faq, ...formValues }
			)
		);
		setIsFormTouched(false)
	};

	useEffect(() => {
		if (faq === null) { return }
		formInstance.setFieldsValue({ header: faq.header })
	}, [faq])


	return (
		<Form
			colon={false}
			form={formInstance}
			requiredMark={false}
			layout="vertical"
			// validateTrigger="onSubmit"
			initialValues={{ header: undefined }}
			onValuesChange={onValuesChange}
			onFinish={onFinish}
		>
			<Row gutter={[16, 0]}>
				<Col xs={24} sm={12} lg={6} xl={4}>
					<Form.Item
						name="header"
						label="Header"
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
	)
}
export default GeneralInfoHeader