enum StorageType {
	Session,
	Local
}

class StorageWrapper<T> {
	static Types = StorageType;

	public readonly type: StorageType;
	public readonly key: string;

	constructor(type: StorageType, key: string) {
		this.type = type;
		this.key = key;
	}

	get storage(): Storage {
		switch(this.type) {
			case StorageType.Session: return window.sessionStorage;
			case StorageType.Local: return window.localStorage;
			default: throw new Error("Storage type: " + this.type + " doesn't implemented.");
		}
	}

	get = (): (T | null) => {
		const data = this.storage.getItem(this.key);
		if (data === null) {
			return;
		}
		return JSON.parse(data) as T;
	}

	set = (value: (T | null)): void => {
		this.storage.setItem(this.key, JSON.stringify(value));
	}

	remove = (): void => {
		this.storage.removeItem(this.key);
	}

	clear = (): void => {
		this.storage.clear();
	}
}

export { StorageType, StorageWrapper }