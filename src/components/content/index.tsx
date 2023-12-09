import React from "react"
import { Layout } from "antd"
import Breadcrumb from "@components/breadcrumb"
import classNames from "classnames"
import style from "./style.module.scss"


type Props = {
	children: React.ReactElement
}

const Content = ({ children }: Props): JSX.Element => {	
	return (
		<Layout.Content className="flex flex-col">
			<Breadcrumb className={classNames(style["menu-breadcrumb"], "m-[8px] p-[16px]")} />
			<section className={classNames(style["menu-content"], "flex flex-col mx-[8px] mb-[8px]")}>
				{children}
			</section>
		</Layout.Content>
	)
}
export default Content