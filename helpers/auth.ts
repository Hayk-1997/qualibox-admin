export const setUserToken = (token: string): void =>
  localStorage.setItem("token", token);

export const getUserToken = (): string | null => localStorage.getItem("token");

export const removeUserToken = (): void => localStorage.removeItem("token");

export const clearToken = (): void => localStorage.clear();
