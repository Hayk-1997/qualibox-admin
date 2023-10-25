import { Layout, Menu } from "antd"
import { useState } from "react"
import { PROTECTED_NAVIGATION_MENU_ITEMS } from "@constants/navigations.constants";
import type { MenuItem } from "@constants/navigations.constants";
import { usePathname, useRouter } from 'next/navigation'
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
	
	const [triggerState, setTriggerState] = useState(false)
	const [openKeys, setOpenKeys] = useState<MenuItem["key"][]>([ PROTECTED_NAVIGATION_MENU_ITEMS[0]?.key ]);
	const onOpenChange: MenuProps['onOpenChange'] = (keys) => { setOpenKeys(keys); };
	
	return (
		<Layout.Sider
			collapsible
			trigger={null}
			collapsed={triggerState}
			width={280}
		>
			<div style={{ height: 64, color: "red" }} className="logo" onClick={() => setTriggerState(prev => !prev)}>
				Trigger
			</div>
			<Menu
				defaultSelectedKeys={[pathname]}
				mode="inline"
				openKeys={openKeys}
				onOpenChange={onOpenChange}
				items={PROTECTED_NAVIGATION_MENU_ITEMS}

				onClick={(clickEvent) => {
					const { key: navigationUrl } = clickEvent
					router.push(navigationUrl)
				}}
			/>
		</Layout.Sider>
	)
}
export default Sidebar