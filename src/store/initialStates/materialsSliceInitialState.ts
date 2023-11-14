import { OrderDirection } from "@enums/common.enums";
import IStandartFilters from "@interfaces/IStandartFilters";
import IStandartSorting from "@interfaces/IStandartSorting";
import { TMaterial } from "@types/material";

export type TMaterialsInitialState = {
	isLoading: boolean
	data: TMaterial[],
	total: number,
	filters: IStandartFilters,
	sorting: IStandartSorting,
	current: {
		generalInfo: Object
	}
};

export const materialsSliceInitialState: TMaterialsInitialState = {
	isLoading: false,
	data: [],
	total: 0,
	filters: {
		nameOrId: "",
		from: "",
		to: "",
		lastUpdateFrom: "",
		lastUpdateTo: "",
	},
	sorting: {
		page: 1,
		limit: 10,
		orderBy: "Created",
		orderDirection: OrderDirection.Desc,
	},
	current: {
		generalInfo: {}
	}
};