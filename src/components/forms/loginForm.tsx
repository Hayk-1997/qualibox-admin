"use client"
import { Fragment, useCallback, useEffect } from 'react';
// import Input from '@formElements/input';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { TLoginForm } from '@types/auth';
import { getIsLoading, getUser, login } from '@store/slices/authSlice';
import { useRouter } from 'next/router';
import { Col, Button, Form, Input, InputNumber } from 'antd';

const onFinish = (values: any) => {
	console.log(values);
};


const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};



type FormValues = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const isLoading = useSelector(getIsLoading);
	const user = useSelector(getUser);
	const onFinish = (formValues: TLoginForm) => {
		dispatch(login(formValues));
	};
	return (
		<Col>
			<Form
				{...layout}
				name="nest-messages"
				onFinish={onFinish}
				style={{ maxWidth: 600 }}
			>
				<Form.Item
					name="email"
					label="Email"
					rules={[
						{ required: true, message: 'Please input your email!' },
						{ type: 'email', message: 'Invalid email!' }
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="password"
					label="Password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Col>
	)
}
export default LoginForm