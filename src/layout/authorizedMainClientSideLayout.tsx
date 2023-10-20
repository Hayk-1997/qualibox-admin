import { useState } from "react";
import { Layout, Menu } from "antd";
import Sidebar from "@components/sidebar";

type Props = {
	children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const AuthorizedMainClientSideLayout = ({ children }: Props): JSX.Element => {

	return (
		<Layout className="bg-transparent min-height-full">
			<Sidebar />
			<main className="flex-grow">
				<Layout.Header></Layout.Header>
				<section>
					{children}
				</section>
			</main>
		</Layout>
	);
};

export default AuthorizedMainClientSideLayout;
