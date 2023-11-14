import { OrderDirection } from "@enums/common.enums"

interface IStandartSorting {
	page: number,
	limit: number,
	orderBy: string,
	orderDirection: OrderDirection
}

export default IStandartSorting