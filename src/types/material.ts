export interface IMaterial {
	id: number,
	name: string,
	cost: number,
	price: number,
	createdAt: string | Date,
	updatedAt: string | Date,
	uploads: {
		uid: number,
		name: string,
		status: string,
		url: BASE_URL + upload.path,
		size: string,
		type: string,
		preview: boolean
	}[]
}