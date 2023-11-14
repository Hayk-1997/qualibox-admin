import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import Link from 'next/link';
import { PATHS } from "@constants/navigations.constants";

type Prop = {
	className: string | null
}

const Breadcrumb = ({ className = null }: Prop) => {
	const pathname = usePathname()
	const [items, setItems] = useState<any[]>([]);
	useLayoutEffect(() => {
		if (!pathname) { return; }
		let _pathname = pathname;
		const links = [];
		const pathValues = Object.values(PATHS)
		pathValues.forEach(path => {
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
			className={className}
		/>
	)
}
export default Breadcrumb