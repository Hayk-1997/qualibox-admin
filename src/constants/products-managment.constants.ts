import { IMaterial } from "@types/material";
import { IItemCategory } from "@types/itemCategories";

export const MATERIAL_DEFAULT_VALUE: IMaterial = {
	id: 0,
	name: undefined,
	cost: undefined,
	price: undefined,
	createdAt: undefined,
	updatedAt: undefined,
	uploads: []
}

export const ITEM_CATEGORY_DEFAULT_VALUE: IItemCategory = {
	id: 0,
	name: undefined,
	createdAt: undefined,
	updatedAt: undefined
}

export const PRODUCT_DEFAULT_VALUE: object = {
	id: 0,
	name: undefined,
	createdAt: undefined,
	updatedAt: undefined
}