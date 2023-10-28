import { Divider, Layout, Menu } from "antd"
import { useState } from "react"
import { PROTECTED_NAVIGATION_MENU_ITEMS } from "@constants/navigations.constants";
import type { MenuItem } from "@constants/navigations.constants";
import { usePathname, useRouter } from 'next/navigation'
import useUpdateEffect from "@hooks/useUpdateEffect";
import styles from "./sidebar.module.scss"


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
			className={styles.sidebar}
		>
			<div
				style={{ height: 64, color: "red" }}
				className="logo"
			>
				Logo
			</div>
			<Divider className="my-0" type="horizontal" plain={true}  />
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