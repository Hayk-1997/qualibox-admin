import { StorageWrapper, StorageType } from "@helpers/storage.helpers";

export default new StorageWrapper<object>(StorageType.Local, "filters")