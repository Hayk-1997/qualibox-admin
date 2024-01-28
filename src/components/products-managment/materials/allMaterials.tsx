import Table from "@components/common/table"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import { reciveMaterials, createMaterial, deleteMaterial, getMaterials, getIsLoading, getFilters, getSorting, getTotal, setFilters, setSorting } from "@store/slices/materialsSlice"
import { Row, Col, Button } from "antd"
import { useEffect, useState } from "react"
import CreateMaterial from "./createMaterial"
import Filters from "./filters"
import { TMaterial } from "@types/material"
import { useRouter } from "next/navigation"
import { PATHS } from "@constants/navigations.constants"
import { API_URL_ID_REGEX, DATE_TIME_FORMAT } from "@constants/common.constants"
import dayjs from "dayjs"

const AllMaterials = () => {

	const [showCreateModal, setShowCreateModal] = useState(false)
	const isLoading = useAppSelector(getIsLoading)
	const total = useAppSelector(getTotal)
	const materials = useAppSelector(getMaterials)
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
			title: "Cost",
			dataIndex: "cost"
		},
		{
			title: "Price",
			dataIndex: "price"
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
							uniqueKey="name"
							loadFn={(...args) => dispatch(reciveMaterials(...args))}
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
									handler: (record: TMaterial) => {
										router.push(PATHS.PRODUCTS_MANAGMENT_MATERIALS_DEEP_VIEW.replace(API_URL_ID_REGEX, record.id))
									},
								},
								delete: {
									handler: (record: TMaterial) => {
										dispatch(deleteMaterial(record.id, () => {
											dispatch(reciveMaterials())
										}))
									},
									message: (record: TMaterial) => `Do you want delete material ${record.name}?`
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
export default AllMaterials