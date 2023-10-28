import React from "react"
import { Layout } from "antd"
import Breadcrumb from "@components/breadcrumb"


type Props = {
	children: React.ReactElement
}

const Content = ({ children }: Props): JSX.Element => {
	return (
		<Layout.Content>
			<div>
				<Breadcrumb />
				<div>
					{children}
				</div>
			</div>
		</Layout.Content>
	)
}
export default Content