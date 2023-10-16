interface Props {
	children: React.ReactElement;
}

const AuthPageLayout = ({ children }: Props): JSX.Element => {
	return (
		<>
			<main>
				<section className="content">
					<div className="container-fluid">{children}</div>
				</section>
			</main>
		</>
	);
}

export default AuthPageLayout;