import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Modal = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Modal</div>
		</AuthorizedMainClientSideLayout>
	);
};

Modal.getLayout = ProtectedServerSideLayout;

export default Modal;