import IStandartFilters from '@interfaces/IStandartFilters';
import { message } from 'antd';
import dayjs from 'dayjs';

export const stopPropagation = (e: Event): void => e.stopPropagation();

export const toLowerCaseFirstLetter = (str: string): string => str.charAt(0).toLowerCase() + str.slice(1);

export const toUpperCaseFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const copyToClipboard = (text: string) => {
	const input = document.createElement('input');
	input.setAttribute('value', text);
	document.body.appendChild(input);
	input.select();
	const result = document.execCommand('copy');
	document.body.removeChild(input);
	message.success("Copied");
	return result;
}

export const isObjectEquals = (x, y) => {
	if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
	// after this just checking type of one would be enough
	if (x.constructor !== y.constructor) { return false; }
	// if they are functions, they should exactly refer to same one (because of closures)
	if (x instanceof Function) { return x === y; }
	// if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
	if (x instanceof RegExp) { return x === y; }
	if (x === y || x.valueOf() === y.valueOf()) { return true; }
	if (Array.isArray(x) && x.length !== y.length) { return false; }

	// if they are dates, they must had equal valueOf
	if (x instanceof Date) { return false; }

	// if they are strictly equal, they both need to be object at least
	if (!(x instanceof Object)) { return false; }
	if (!(y instanceof Object)) { return false; }

	// recursive object equality check
	var p = Object.keys(x);
	return Object.keys(y).every(i => p.indexOf(i) !== -1) && p.every(i => isObjectEquals(x[i], y[i]));
}

export const mapFilers = (filters: IStandartFilters): boolean => {
	if (!filters) {
		throw new Error("Invalid Arguments type.!")
	}
	const newFilter = {
		...filters,
		from: filters.from && dayjs(filters.from).toISOString(),
		to: filters.to && dayjs(filters.to).toISOString()
	}

	return newFilter
}

export const getHashValue = (param: string, optionalHash: string = window.location.hash): string => {
	const urlParams = new URLSearchParams(optionalHash.replace("#", "?"));
	return urlParams.get(param) || "";
}

export const updateLocationHash = (hash: string, add: boolean): void => {
	const scrollmem = document.body.scrollTop;
	let h = window.location.hash.replace("#", "");
	const params = h.split("&").filter(p => p !== "" && p.split("=")[0] !== hash.split("=")[0]);
	window.location.hash = add && params.length > 0 ? params.join("&") + "&" + hash : hash;
	document.body.scrollTop = scrollmem;
}