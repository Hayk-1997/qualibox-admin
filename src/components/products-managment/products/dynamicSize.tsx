
import { Row, Col, Form, Input } from "antd"
import { Fragment } from "react"

const DynamicSize = () => {
	return (
		<Fragment>
			<Row gutter={30}>
				<Col>
					<Form.Item
						label="Min Height"
						name="minHeight"
						required
					>
						<Input />
					</Form.Item>
				</Col>
				<Col>
					<Form.Item
						label="Min Width"
						name="minWidth"
						required
					>
						<Input />
					</Form.Item>
				</Col>
				<Col>
					<Form.Item
						label="Min Length"
						name="minLength"
						required
					>
						<Input />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={30}>
				<Col>
					<Form.Item
						label="Max Height"
						name="maxHeight"
						required
					>
						<Input />
					</Form.Item>
				</Col>
				<Col>
					<Form.Item
						label="Max Width"
						name="maxWidth"
						required
					>
						<Input />
					</Form.Item>
				</Col>
				<Col>
					<Form.Item
						label="Max Length"
						name="maxLength"
						required
					>
						<Input />
					</Form.Item>
				</Col>
			</Row>
		</Fragment>
	)
}
export default DynamicSize