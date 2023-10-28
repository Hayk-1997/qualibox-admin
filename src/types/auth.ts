export type TLoginForm = {
	email: string;
	password: string;
};

export type TUser = {
	name: string;
	email: string;
};

export type TTokens = {
	refreshToken?: string | null
	token?: string | null
}