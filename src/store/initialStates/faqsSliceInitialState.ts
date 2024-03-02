import { OrderDirection } from "@enums/common.enums";
import IStandartFilters from "@interfaces/IStandartFilters";
import IStandartSorting from "@interfaces/IStandartSorting";
import { IFAQ, IFAQContent } from "@types/FAQ";
import { FAQ_DEFAULT_VALUE } from "@constants/cms.constants"

export interface IFAQsInitialState {
	isLoading: boolean,
	isSaving: boolean,
	data: IFAQ[],
	total: number,
	filters: IStandartFilters,
	sorting: IStandartSorting,
	deepView: {
		main: IFAQ,
		generalInfo: Object | null
	}
};

export const faqsSliceInitialState: IFAQsInitialState = {
	isLoading: false,
	isSaving: false,
	data: [],
	total: 0,
	filters: {
		key: "header",
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
		main: FAQ_DEFAULT_VALUE,
		generalInfo: null
	}
};