type Props = {
	children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}
const AuthPageClientSideLayout = ({ children }: Props): JSX.Element => {
	return (
		<main className='h-full flex flex-col justify-center align-center'>
			{children}
		</main>
	);
}
export default AuthPageClientSideLayout