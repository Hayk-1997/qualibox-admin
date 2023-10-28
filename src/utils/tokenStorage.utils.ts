import type { TTokens } from "@types/auth";
import { TOKENS_STORAGE_KEY } from "@constants/auth";
import { StorageWrapper, StorageType } from "@helpers/storage.helpers";

export default new StorageWrapper<TTokens>(StorageType.Local, TOKENS_STORAGE_KEY)