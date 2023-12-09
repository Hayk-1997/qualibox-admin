import { isObjectEquals } from '@utils/common.utils';

const deepMap = (f, obj) => {
	return Object.keys(obj).reduce((acc, k) => {
		if ({}.toString.call(obj[k]) == '[object Object]') {
			acc[k] = deepMap(f, obj[k])
		} else {
			acc[k] = f(obj[k], k)
		}
		return acc
	}, {})
}

const isNumericString = str => {
	if (typeof str != "string") return false
	return !isNaN(str) && !isNaN(parseFloat(str))
}

const toNumberIfPossible = value => {
	try {
		const v = typeof value.trim === 'function' ? value.trim() : value;
		return (isNumericString(v) ? Number(v) : v)
	} catch (error) {
		return value;
	}
}
const itOrDefault = (value, defaultvalue) => (value === null || value === undefined) ? defaultvalue : value;
const makeDeepMap = (arg) => deepMap(v => ((typeof v === "string") ? toNumberIfPossible(v) : itOrDefault(v, "")), arg)

export const isFormChanged = (formValues, initialValues) => {
	if (Object.keys(formValues).length === 0) return false;

	let values = {};
	let initials = {};

	Object.keys(formValues).forEach(key => {
		values[key] = itOrDefault(formValues[key], "");
		initials[key] = itOrDefault(initialValues[key], "");
	});

	values = makeDeepMap(values);
	initials = makeDeepMap(initials);

	return !isObjectEquals(values, initials);
}