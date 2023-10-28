import { Button, Layout } from "antd"
import styles from "./header.module.scss"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { logout } from "@store/slices/authSlice"

const Header = () => {
	const dispatch = useAppDispatch()
	return (
		<Layout.Header className={styles.header}>
			<Button
				type="link"
				onClick={() => dispatch(logout())}
			>
				Logout
			</Button>

		</Layout.Header>
	)
}
export default Header