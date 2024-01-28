import FiltersWrapper from "@components/common/filtersWrapper"
import { DATE_FORMAT } from "@constants/common.constants";
import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import { getFilters, reciveMaterials, setFilters } from "@store/slices/materialsSlice"
import { Col, Form, Input, Row, DatePicker } from "antd";
const { Item: FormItem } = Form;

const Filters = () => {
	const dispatch = useAppDispatch()
	const filters = useAppSelector(getFilters)

	return (
		<FiltersWrapper
			loadFn={(...args) => dispatch(reciveMaterials(...args))}
			setFiltersFn={(...args) => dispatch(setFilters(...args))}
			filters={filters}
			filtersName="materials"
			filtersList={[
				{ name: "value", title: "Name" },
				{ name: "date", title: "Date" }
			]}
			formFieldsConfigs={{
				datePicker: [
					{ name: "date", keepTime: false }
				]
			}}
		>
			<Row gutter={[16, 0]}>
				<Col xs={24} sm={12} lg={6} xl={4}>
					<FormItem
						name="value"
						label="Name"
					>
						<Input placeholder="Name" />
					</FormItem>
				</Col>
				<Col xs={24} sm={12} lg={6} xl={4}>
					<FormItem
						name="date"
						label="From - To"
					>
						<DatePicker.RangePicker format={DATE_FORMAT.toUpperCase()} />
					</FormItem>
				</Col>
			</Row>
		</FiltersWrapper>
	)
}
export default Filters