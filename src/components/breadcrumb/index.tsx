import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import Link from 'next/link';
import { PATHS } from "@constants/navigations.constants";

const Breadcrumb = () => {
	const pathname = usePathname()
	const [items, setItems] = useState<any[]>([]);
	useLayoutEffect(() => {
		let _pathname = pathname;
		const links = [];
		const pathValues = Object.values(PATHS)
		pathValues.forEach(path => {
			console.log(path);
			const matchObj = _pathname.match(new RegExp("^" + path));
			if (!matchObj) {
				return
			}

			links.push(matchObj[0])
			_pathname = _pathname.slice(0, path.length)
		})
		const newItems = links
			.slice(0, -1)
			.map(link => ({ title: <Link href={link}>link</Link> }))
			.concat(
				links.length === 0
					? []
					: { title: <Link href={links.at(-1)}>{links.at(-1)}</Link> }
			)

		setItems(newItems)
	}, [pathname])
	return (
		<AntdBreadcrumb
			items={items}
		/>
	)
}
export default Breadcrumb