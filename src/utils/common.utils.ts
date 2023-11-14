import { message } from 'antd';

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