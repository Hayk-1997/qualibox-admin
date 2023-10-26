import { Layout, Menu } from "antd"
import { useLayoutEffect, useState } from "react"
import { PROTECTED_NAVIGATION_MENU_ITEMS } from "@constants/navigations.constants";
import type { MenuItem } from "@constants/navigations.constants";
import { usePathname, useRouter } from 'next/navigation'
import useUpdateEffect from "@hooks/useUpdateEffect";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
// 	label: React.ReactNode,
// 	key: React.Key,
// 	icon?: React.ReactNode,
// 	children?: MenuItem[],
// 	type?: 'group',
// ): MenuItem {
// 	return {
// 		key,
// 		icon,
// 		children,
// 		label,
// 		type,
// 	} as MenuItem;
// }

// const items: MenuItem[] = [
// 	getItem('Navigation One', 'sub1', <MailOutlined />, [
// 		getItem('Option 1', '1'),
// 		getItem('Option 2', '2'),
// 		getItem('Option 3', '3'),
// 		getItem('Option 4', '4'),
// 	]),
// 	getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
// 		getItem('Option 5', '5'),
// 		getItem('Option 6', '6'),
// 		getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
// 	]),
// 	getItem('Navigation Three', 'sub4', <SettingOutlined />, [
// 		getItem('Option 9', '9'),
// 		getItem('Option 10', '10'),
// 		getItem('Option 11', '11'),
// 		getItem('Option 12', '12'),
// 	]),
// ];

// submenu keys of first level

const Sidebar = () => {
	
	const router = useRouter()
	const pathname = usePathname();
	const [selectedItem, setSelectedItem] = useState<string>(pathname);
	const [openKeys, setOpenKeys] = useState<MenuItem["key"][]>([ PROTECTED_NAVIGATION_MENU_ITEMS[0]?.key ]);
	const onOpenChange: MenuProps['onOpenChange'] = (keys) => { setOpenKeys(keys); };

	useUpdateEffect(() => {
		router.push(selectedItem)
	}, [selectedItem])
	
	return (
		<Layout.Sider
			collapsible
			width={280}
		>
			<div
				style={{ height: 64, color: "red" }}
				className="logo"
			>
				Logo
			</div>
			<Menu
				selectable={true}
				selectedKeys={[selectedItem]}
				onSelect={(selectEvent) => {
					const { key: navigationUrl } = selectEvent
					setSelectedItem(navigationUrl as string)
				}}
				mode="inline"
				openKeys={openKeys}
				onOpenChange={onOpenChange}
				items={PROTECTED_NAVIGATION_MENU_ITEMS}
			/>
		</Layout.Sider>
	)
}
export default Sidebar