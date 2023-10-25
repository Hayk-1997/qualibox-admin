import PublicServerSideLayout from '@layout/publicServerSideLayout';
import LoginForm from '@components/forms/loginForm';
import { Col, Row } from 'antd';
import AuthPageClientSideLayout from '@layout/authPageClientSideLayout';

const ForgotPassword = (): JSX.Element => {
	return (
		<AuthPageClientSideLayout>
			<div>ForgotPassword</div>
		</AuthPageClientSideLayout>
	);
};

ForgotPassword.getLayout = PublicServerSideLayout;

export default ForgotPassword;