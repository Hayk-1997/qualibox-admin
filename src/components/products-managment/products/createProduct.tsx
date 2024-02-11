import React from "react";
import { Col, Row, Form, Input, InputNumber, Modal, Select, Checkbox } from "antd";
import type { SelectProps } from "antd";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { createProduct } from "@store/slices/productsSlice";
import { useRouter } from "next/navigation";
import { PATHS } from "@constants/navigations.constants";
import { API_URL_ID_REGEX, POPUP_SIZE } from "@constants/common.constants";
import { IProduct } from "@types/product";
import DynamicSize from "./dynamicSize";
import StaticSize from "./staticSize";

type Props = {
	show: boolean,
	closeFn: () => void
}

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
	options.push({
		label: i.toString(36) + i,
		value: i.toString(36) + i,
	});
}

const CreateProduct: React.FC = ({ show, closeFn }: Props): JSX.Element => {
	const dispatch = useAppDispatch();
	const [formInstance] = Form.useForm();
	const router = useRouter();
	const handleCreate = async () => {
		try {
			const values = await formInstance.validateFields();
			formInstance.resetFields();
			dispatch(
				createProduct(
					values as IProduct,
					(product: IProduct) => {
						router.push(PATHS.PRODUCTS_MANAGMENT_PRODUCTS_DEEP_VIEW.replace(API_URL_ID_REGEX, product.id))
					}
				)
			);
			closeFn();
		} catch (error) {
			console.log("Validate Failed:", error);
		}
	};
	return (
		<Modal
			title="Create Products"
			open={show}
			onCancel={closeFn}
			onOk={handleCreate}
			okText="Submit"
			width={POPUP_SIZE.BIG}
		>
			<Form
				form={formInstance}
				layout="vertical"
			>
				<Row gutter={32}>
					<Col>
						<Form.Item
							label="Name"
							name="name"
							rules={[
								{ required: true }
							]}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col>
						<Form.Item
							label="Price"
							name="price"
							rules={[
								{ required: true }
							]}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col>
						<Form.Item
							label="Cost"
							name="cost"
							rules={[
								{ required: true }
							]}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={30}>
					<Col flex={"0 0 50%"}>
						<Form.Item
							label="Materials"
							name="materialIds"
							rules={[
								{ required: true, message: "Materials is required, select at least one." }
							]}
						>
							<Select
								mode="multiple"
								allowClear
								placeholder="Please select"
								defaultValue={['a10', 'c12']}
								options={options}
								onChange={(value: string[]) => {
									console.log(`selected ${value}`);
								}}
							/>
						</Form.Item>
					</Col>
					<Col flex={"0 0 50%"}>
						<Form.Item
							label="Category"
							name="category"
							rules={[
								{ required: true, message: "Materials is required, select at least one." }
							]}
						>
							<Select
								placeholder="Please select"
								defaultValue={'a10'}
								options={options}
								onChange={(value: string[]) => {
									console.log(`selected ${value}`);
								}}
							/>
						</Form.Item>
					</Col>
				</Row>
				{/* <Row gutter={30}>
					<Col flex={"1 1 50%"}>
						<Form.Item name="description">
							<Input.TextArea rows={4} placeholder="Description" maxLength={200} />
						</Form.Item>
					</Col>
				</Row> */}
				<Row gutter={30}>
					<Col>
						<Form.Item name="isDynamicSize" valuePropName="checked">
							<Checkbox>Is Dynamic Size</Checkbox>
						</Form.Item>
					</Col>
				</Row>
				<Form.Item noStyle dependencies={["isDynamicSize"]}>
					{
						({ getFieldValue }) => {
							return (
								getFieldValue("isDynamicSize")
									? <DynamicSize />
									: <StaticSize formInstance={formInstance} />
							)
						}
					}
				</Form.Item>
			</Form>
		</Modal>
	)
}
export default CreateProduct