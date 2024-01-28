import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router"
import { reciveMaterial } from "@store/slices/materialsSlice";
import { Tabs } from "antd";
import GeneralInfo from "./generalInfo";
import { getHashValue, updateLocationHash } from "@utils/common.utils";
import classNames from "classnames";

const DeepView = () => {
	const router = useRouter()
	const { query: { _id: ID } } = router;
	const dispatch = useDispatch()
	const [activeKey, setActiveKey] = useState(getHashValue("tab") || "1");
	const [unsavedTabs, setUnsavedTabs] = useState([]);
	const tabClassName = key => unsavedTabs.indexOf(key) > -1 ? "unsaved-tab" : "";
	const changeTabSavedStatus = (status, key) => {
		if (status && unsavedTabs.indexOf(key) === -1) {
			setUnsavedTabs([...unsavedTabs, key]);
		} else if (!status) {
			setUnsavedTabs(unsavedTabs.filter(t => t !== key));
		}
	}
	const handleTabChange = key => {
		updateLocationHash("tab=" + key);
	}

	useEffect(() => {
		const id = Number(ID)
		if (id) {
			dispatch(reciveMaterial(Number(ID)))
		}
	}, [dispatch, ID])

	useEffect(() => {
		setActiveKey(getHashValue("tab") || "1");
	}, [])
	
	return (
		<Tabs
			animated={false}
			onChange={key => handleTabChange(key)}
			activeKey={activeKey}
			items={[
				{
					key: "1",
					label: (
						<span className={classNames("px-4", tabClassName("1"))}>
							General Info
						</span>
					),
					children: (
						<GeneralInfo
							onTabChange={status => changeTabSavedStatus(status, "1")}
							activeTabKey={activeKey}
						/>
					)
				}
			]}
		/>
		
	)
}
export default DeepView