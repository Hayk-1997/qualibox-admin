import Table from "@components/common/table"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import { reciveFAQs, deleteFAQ, getFAQs, getIsLoading, getFilters, getSorting, getTotal, setFilters, setSorting } from "@store/slices/faqsSlice"
import { Row, Col, Button } from "antd"
import { useEffect, useState } from "react"
import CreateFAQ from "./createFAQ"
import Filters from "./filters"
import { IFAQ } from "@types/FAQ"
import { useRouter } from "next/navigation"
import { PATHS } from "@constants/navigations.constants"
import { API_URL_ID_REGEX, DATE_TIME_FORMAT } from "@constants/common.constants"
import dayjs from "dayjs"

const AllFAQs = () => {

	const [showCreateModal, setShowCreateModal] = useState(false)
	const isLoading = useAppSelector(getIsLoading)
	const total = useAppSelector(getTotal)
	const faqs = useAppSelector(getFAQs)
	const filters = useAppSelector(getFilters)
	const sorting = useAppSelector(getSorting)
	const dispatch = useAppDispatch()
	const router = useRouter()

	console.log("faqs: ", faqs);
	


	/** Columns of table */
	const columns = [
		{
			title: "Header",
			dataIndex: "header",
			sorting: true
		},
		{
			title: "Created At",
			dataIndex: "createdAt",
			render: value => dayjs(value).format(DATE_TIME_FORMAT)
		},
		{
			title: "Updated At",
			dataIndex: "updatedAt",
			render: value => dayjs(value).format(DATE_TIME_FORMAT)
		}
	];
	

	return (
		<Row gutter={16}>
			<Col span={24}>
				<div className="section-wrapper">
					<div className="section-header">
						<Filters />
						<div className="section-actions">
							<Button
								type="primary"
								className="ml-auto"
								onClick={() => setShowCreateModal(true)}
							>
								Create
							</Button>
						</div>
					</div>
					<div className="section-content">
						<Table
							uniqueKey="id"
							loadFn={(...args) => dispatch(reciveFAQs(...args))}
							data={faqs}
							loading={isLoading}
							total={total}
							columns={columns}
							filters={filters}
							sorting={sorting}
							setFiltersFn={(newFilters) => dispatch(setFilters(newFilters))}
							setSortingFn={(newSorting) => dispatch(setSorting(newSorting))}
							actions={{
								edit: {
									handler: (record: IFAQ) => {
										router.push(PATHS.CMS_FAQ_DEEP_VEW.replace(API_URL_ID_REGEX, record.id))
									},
								},
								delete: {
									handler: (record: IFAQ) => {
										dispatch(deleteFAQ(record.id, () => {
											dispatch(reciveFAQs())
										}))
									},
									message: (record: IFAQ) => `Do you want delete material ${record.name}?`
								}
							}}
						/>
					</div>
				</div>
				<CreateFAQ
					show={showCreateModal}
					closeFn={() => setShowCreateModal(false)}
				/>
			</Col>
		</Row>
	)
}
export default AllFAQs