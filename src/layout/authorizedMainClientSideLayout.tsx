import { useState } from "react";
import { Layout, Menu } from "antd";
import Sidebar from "@components/sidebar";
import Header from "@components/header";
import Content from "@components/content";
import { useAppSelector } from "@hooks/useAppSelector";
import { getUser } from "@store/slices/authSlice";
import useUpdateEffect from "@hooks/useUpdateEffect";
import { useRouter } from "next/router";
import { PATHS } from "@constants/navigations.constants";

type Props = {
	children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const AuthorizedMainClientSideLayout = ({ children }: Props): JSX.Element => {
	const user = useAppSelector(getUser);
	const router = useRouter()
	useUpdateEffect(() => {
		if (user) { return; }
		router.replace(PATHS.LOGIN)
	}, [user])
	return (
		<Layout hasSider={true} className="bg-transparent min-height-full">
			<Sidebar />
			<div className="flex-grow">
				<Header />
				<Content>
					{children}
				</Content>
			</div>
		</Layout>
	);
};

export default AuthorizedMainClientSideLayout;
