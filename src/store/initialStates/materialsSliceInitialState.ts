import { OrderDirection } from "@enums/common.enums";
import IStandartFilters from "@interfaces/IStandartFilters";
import IStandartSorting from "@interfaces/IStandartSorting";
import { TMaterial } from "@types/material";
import { MATERIAL_DEFAULT_VALUE } from "@constants/materials.constants"

export type TMaterialsInitialState = {
	isLoading: boolean,
	isSaving: boolean,
	data: TMaterial[],
	total: number,
	filters: IStandartFilters,
	sorting: IStandartSorting,
	deepView: {
		main: TMaterial,
		generalInfo: Object | null
	}
};

export const materialsSliceInitialState: TMaterialsInitialState = {
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