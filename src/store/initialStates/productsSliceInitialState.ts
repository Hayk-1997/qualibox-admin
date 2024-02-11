import { OrderDirection } from "@enums/common.enums";
import IStandartFilters from "@interfaces/IStandartFilters";
import IStandartSorting from "@interfaces/IStandartSorting";
import { IProduct } from "@types/product";
import { PRODUCT_DEFAULT_VALUE } from "@constants/products-managment.constants"

export interface IProductsSliceInitialState {
	isLoading: boolean,
	isSaving: boolean,
	data: IProduct[],
	total: number,
	filters: IStandartFilters,
	sorting: IStandartSorting,
	deepView: {
		main: IProduct,
		generalInfo: Object | null
	}
};

export const productsSliceInitialState: IProductsSliceInitialState = {
	isLoading: false,
	isSaving: false,
	data: [],
	total: 0,
	filters: {
		key: "name",
		value: "",
		from: "",
		to: ""
	},
	sorting: {
		page: 1,
		limit: 10,
		orderBy: "createdAt",
		orderDirection: OrderDirection.Desc,
	},
	deepView: {
		main: PRODUCT_DEFAULT_VALUE,
		generalInfo: null
	}
};