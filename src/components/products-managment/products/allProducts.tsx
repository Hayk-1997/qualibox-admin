import Table from "@components/common/table"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import { reciveProducts, deleteProduct, getProducts, getIsLoading, getFilters, getSorting, getTotal, setFilters, setSorting } from "@store/slices/productsSlice"
import { Row, Col, Button } from "antd"
import { useEffect, useState } from "react"
import CreateProduct from "./createProduct"
import Filters from "./filters"
import { IProduct } from "@types/product"
import { useRouter } from "next/navigation"
import { PATHS } from "@constants/navigations.constants"
import { API_URL_ID_REGEX, DATE_TIME_FORMAT } from "@constants/common.constants"
import dayjs from "dayjs"

const AllProducts = () => {

	const [showCreateModal, setShowCreateModal] = useState(false)
	const isLoading = useAppSelector(getIsLoading)
	const total = useAppSelector(getTotal)
	const products = useAppSelector(getProducts)
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
							loadFn={(...args) => dispatch(reciveProducts(...args))}
							data={products}
							loading={isLoading}
							total={total}
							columns={columns}
							filters={filters}
							sorting={sorting}
							setFiltersFn={(newFilters) => dispatch(setFilters(newFilters))}
							setSortingFn={(newSorting) => dispatch(setSorting(newSorting))}
							actions={{
								edit: {
									handler: (record: IProduct) => {
										router.push(PATHS.PRODUCTS_MANAGMENT_PRODUCTS_DEEP_VIEW.replace(API_URL_ID_REGEX, record.id))
									},
								},
								delete: {
									handler: (record: IProduct) => {
										dispatch(deleteProduct(record.id, () => {
											dispatch(reciveProducts())
										}))
									},
									message: (record: IProduct) => `Do you want delete product ${record.name}?`
								}
							}}
						/>
					</div>
				</div>
				<CreateProduct
					show={showCreateModal}
					closeFn={() => setShowCreateModal(false)}
				/>
			</Col>
		</Row>
	)
}
export default AllProducts