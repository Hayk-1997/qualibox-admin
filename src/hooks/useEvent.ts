import { useCallback, useLayoutEffect, useRef } from "react";

type callbackType<A extends any[], R> = (...args: A) => R;

const useEvent = <A extends any[], R>(callback: callbackType<A, R>): callbackType<A, R> => {
	const functionRef = useRef(callback);

	useLayoutEffect(() => {
		functionRef.current = callback;
	});

	return useCallback((...args) => {
		const functionCall = functionRef.current;
		return functionCall(...args);
	}, []);
};

export default useEvent