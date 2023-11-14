import { TUser } from "@types/auth";

export type TInitialState = {
	user?: TUser;
	isLoading: boolean
};

export const authSliceInitialState: TInitialState = {
	user: null,
	isLoading: false
};