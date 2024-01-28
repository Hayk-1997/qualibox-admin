import { OrderDirection } from "@enums/common.enums";
import IStandartFilters from "@interfaces/IStandartFilters";
import IStandartSorting from "@interfaces/IStandartSorting";
import { IItemCategory } from "@types/itemCategories";
import { MATERIAL_DEFAULT_VALUE } from "@constants/materials.constants"

export interface IItemCategoriesInitialState {
	isLoading: boolean,
	isSaving: boolean,
	data: IItemCategory[],
	total: number,
	filters: IStandartFilters,
	sorting: IStandartSorting,
	deepView: {
		main: IItemCategory,
		generalInfo: Object | null
	}
};

export const itemCategoriesSliceInitialState: IItemCategoriesInitialState = {
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
		main: MATERIAL_DEFAULT_VALUE,
		generalInfo: null
	}
};