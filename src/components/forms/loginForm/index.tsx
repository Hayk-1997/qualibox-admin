"use client"
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TLoginForm } from '@types/auth';
import { getIsLoading, getUser, login } from '@store/slices/authSlice';
import { useRouter } from 'next/router';
import PublicServerSideLayout from '@layout/publicServerSideLayout';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Row, Button, Form, Input, InputNumber, Space, Spin, Checkbox } from 'antd';
import styles from "./style.module.scss"
import { useAppSelector } from '@hooks/useAppSelector';

const LoginForm = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const isLoading = useAppSelector(getIsLoading);
	const user = useAppSelector(getUser);
	

	const onFinish = (formValues: TLoginForm) => {
		dispatch(login(formValues));
	};

	useEffect(() => {
		if (!user) { return; }
		router.push('/dashboard');
	}, [user, router]);

	return (
		<div className={styles.loginFormContainer}>
			<Spin spinning={isLoading}>
				<Form
					name="normal_login"
					onFinish={onFinish}
				>
					<Form.Item
						name='email'
						rules={[
							{ required: true, message: 'Please input your email!' },
							{ type: 'email', message: 'Invalid email!' }
						]}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your Password!' }]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="width-full">
							Log in
						</Button>
					</Form.Item>
					<Form.Item noStyle>
						<a href="">
							Forgot password
						</a>
					</Form.Item>
				</Form>
			</Spin>
		</div>
	)
}
export default LoginForm