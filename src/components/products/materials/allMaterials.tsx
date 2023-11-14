import Table from "@components/common/table"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import { reciveMaterials, getMaterials, getIsLoading, createMaterial, getFilters, getSorting, getTotal } from "@store/slices/materialsSlice"
import { Row, Col, Button } from "antd"
import { useEffect, useState } from "react"
import CreateMaterial from "./createMaterial"

const AllMaterials = () => {

	const [showCreateModal, setShowCreateModal] = useState(false)
	const isLoading = useAppSelector(getIsLoading)
	const total = useAppSelector(getTotal)
	const materials = useAppSelector(getMaterials)
	const filters = useAppSelector(getFilters)
	const sorting = useAppSelector(getSorting)
	const dispatch = useAppDispatch()


	/** Columns of table */
	const columns = [
		{
			title: "name",
			dataIndex: "name"
		},
		{
			title: "cost",
			dataIndex: "cost"
		},
		{
			title: "price",
			dataIndex: "price"
		}
	];
	

	return (
		<Row gutter={16}>
			<Col span={24}>
				<Row className="mb-[16px]">
					<Button
						type="primary"
						className="ml-auto"
						onClick={() => setShowCreateModal(true)}
					>
						Create
					</Button>
				</Row>
				<div className="">
					<Table
						uniqueKey="name"
						loadFn={(...args) => dispatch(reciveMaterials(...args))}
						data={materials}
						loading={isLoading}
						total={total}
						columns={columns}
						filters={filters}
						sorting={sorting}
					/>
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