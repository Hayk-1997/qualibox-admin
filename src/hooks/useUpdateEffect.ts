import { DependencyList, EffectCallback, useEffect, useRef } from "react"

const useUpdateEffect = (callback: EffectCallback, dependencies: DependencyList | undefined): void => {
	const isFirstRenderRef = useRef<boolean>(true);
	useEffect(() => {
		if (isFirstRenderRef.current) {
			isFirstRenderRef.current = false;
			return
		}
		return callback()
	}, dependencies)
}

export default useUpdateEffect;