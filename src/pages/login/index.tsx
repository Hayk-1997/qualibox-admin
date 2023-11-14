import PublicServerSideLayout from '@layout/publicServerSideLayout';
import LoginForm from '@components/forms/loginForm';
import { Col, Row } from 'antd';
import AuthPageClientSideLayout from '@layout/authPageClientSideLayout';

const Login = (): JSX.Element => {
	return (
		<AuthPageClientSideLayout>
			<Row className='w-full'>
				<Col xs={22} sm={20} md={12} lg={8} xl={8} xxl={6} className='mx-auto'>
					<LoginForm />
				</Col>
			</Row>
		</AuthPageClientSideLayout>
	);
};

Login.getLayout = PublicServerSideLayout;

export default Login;