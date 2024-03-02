export interface IFAQ {
	id: number,
	header: string,
	contents: IFAQContent[],
	createdAt: string | Date,
	updatedAt: string | Date
}

export interface IFAQContent {
	id?: number,
	key?: number,
	faq_id?: IFAQ["id"],
	title: string,
	content: string,
	createdAt: string | Date,
	updatedAt: string | Date
}