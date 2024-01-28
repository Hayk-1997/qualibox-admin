import Table from "@components/common/table"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import { reciveItemCategories, deleteItemCategory, getItemCategories, getIsLoading, getFilters, getSorting, getTotal, setFilters, setSorting } from "@store/slices/itemCategoriesSlice"
import { Row, Col, Button } from "antd"
import { useEffect, useState } from "react"
import CreateMaterial from "./createMaterial"
import Filters from "./filters"
import { IItemCategory } from "@types/material"
import { useRouter } from "next/navigation"
import { PATHS } from "@constants/navigations.constants"
import { API_URL_ID_REGEX, DATE_TIME_FORMAT } from "@constants/common.constants"
import dayjs from "dayjs"
import { IItemCategory } from "@types/itemCategories"

const AllItemCategories = () => {

	const [showCreateModal, setShowCreateModal] = useState(false)
	const isLoading = useAppSelector(getIsLoading)
	const total = useAppSelector(getTotal)
	const materials = useAppSelector(getItemCategories)
	const filters = useAppSelector(getFilters)
	const sorting = useAppSelector(getSorting)
	const dispatch = useAppDispatch()
	const router = useRouter()


	/** Columns of table */
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			sorting: true
		},
		{
			title: "Created At",
			dataIndex: "createdAt",
			render: value => dayjs(value).format(DATE_TIME_FORMAT)
		},
		{
			title: "Updated At",
			dataIndex: "createdAt",
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
							loadFn={(...args) => dispatch(reciveItemCategories(...args))}
							data={materials}
							loading={isLoading}
							total={total}
							columns={columns}
							filters={filters}
							sorting={sorting}
							setFiltersFn={(newFilters) => dispatch(setFilters(newFilters))}
							setSortingFn={(newSorting) => dispatch(setSorting(newSorting))}
							actions={{
								edit: {
									handler: (record: IItemCategory) => {
										router.push(PATHS.PRODUCTS_MANAGMENT_ITEM_CATEGORY_DEEP_VIEW.replace(API_URL_ID_REGEX, record.id))
									},
								},
								delete: {
									handler: (record: IItemCategory) => {
										dispatch(deleteItemCategory(record.id, () => {
											dispatch(reciveItemCategories())
										}))
									},
									message: (record: IItemCategory) => `Do you want delete material ${record.name}?`
								}
							}}
						/>
					</div>
				</div>
				<CreateMaterial
					show={showCreateModal}
					closeFn={() => setShowCreateModal(false)}
				/>
			</Col>
		</Row>
	)
}
export default AllItemCategories