import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./sideShadowBox.module.scss"
import classNames from "classnames";

const SideShadowBox = ({ children, className, dependencies }) => {
	const [isLeftShadowHidden, setIsLeftShadowHidden] = useState(true);
	const [isRightShadowHidden, setIsRightShadowHidden] = useState(true);

	const boxRef = useRef(null);

	const showHideSideShadows = useCallback(() => {
		/**
		 * The function works when changing dependencies
		 * and scrolling the box
		 */
		const actualWidthOfScrollBar = boxRef.current.scrollWidth - boxRef.current.clientWidth;
		const gap = 5;
		const isBothHidden = actualWidthOfScrollBar === 0;
		const scrollBarAndBoxWidthDifferance = actualWidthOfScrollBar - boxRef.current.scrollLeft;
		const scrollBarAndGapDifferance = actualWidthOfScrollBar - gap;

		if (isBothHidden) {
			setIsRightShadowHidden(true);
			setIsLeftShadowHidden(true);
			return;
		}

		const isBothVisible = (
			scrollBarAndBoxWidthDifferance < scrollBarAndGapDifferance
			&&
			scrollBarAndBoxWidthDifferance > gap
		);

		if (isBothVisible) {
			setIsRightShadowHidden(false);
			setIsLeftShadowHidden(false);
			return;
		}

		const isHiddenOnlyLeft = (
			boxRef.current.scrollLeft < gap
			&&
			scrollBarAndBoxWidthDifferance > gap
		);

		if (isHiddenOnlyLeft) {
			setIsRightShadowHidden(false);
			setIsLeftShadowHidden(true);
			return;
		}

		const isHiddenOnlyRight = (
			scrollBarAndGapDifferance < boxRef.current.scrollLeft
			&&
			scrollBarAndBoxWidthDifferance < actualWidthOfScrollBar
		);

		if (isHiddenOnlyRight) {
			setIsRightShadowHidden(true);
			setIsLeftShadowHidden(false);
		}
	}, []);

	useEffect(() => {
		if (boxRef.current === null) {
			return;
		}

		showHideSideShadows();
	}, [dependencies, showHideSideShadows]);

	return (
		<div
			className={classNames(styles["vs--ui-side-shadow-box"], className)}
			onScroll={showHideSideShadows}
			ref={boxRef}
		>
			<div className={classNames(styles["vs--ui-side-shadow-box-left"], isLeftShadowHidden && "vs--ui-shadow-hidden")} />
			{children}
			<div className={classNames(styles["vs--ui-side-shadow-box-right"], isRightShadowHidden && "vs--ui-shadow-hidden")} />
		</div>
	);
};

export default SideShadowBox;
