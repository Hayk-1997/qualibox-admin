import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Switch as AntSwitch, Tooltip } from 'antd';

import Question from 'components/common/question';

/** Table Switch Component */
const Switch = ({
	defaultChecked,
	message,
	handler,
	noPopup,
	disabled,
	info
}) => {

	const { t } = useTranslation();

	const [activateModal, setActivateModal] = useState(false);
	const [checked, setChecked] = useState(defaultChecked);

	useEffect(() => {
		setChecked(defaultChecked);
	}, [defaultChecked])

	/** Fires on click on switcher
		* @function
		* @param {object} e - event object
		* @description open confirmation modal
		* @memberOf Switch
  */
	const onClick = e => {
		if (!noPopup)
			setActivateModal(true)
		else {
			// const isChecked = !checked;
			// setChecked(isChecked);
			//handler && handler(isChecked);
			handler && handler(e);
		}
	}

	/** Fires on click on OK button, on confirmation modal
		* @function
		* @memberOf Switch
  */
	const onOk = () => {
		const isChecked = !checked;

		let result = true;
		if (handler) {
			result = handler(isChecked);
		}
		if (result !== false) {
			setChecked(isChecked);
			setActivateModal(false);
		}

	}

	return (
		<Fragment>
			{
				info
					?
						<Tooltip
							title={info}
							getPopupContainer={() => document.body}
						>
							<AntSwitch
								defaultChecked={defaultChecked}
								checked={checked}
								onClick={onClick}
								disabled={disabled}
								size="small"
							/>
						</Tooltip>
					: <AntSwitch
						defaultChecked={defaultChecked}
						checked={checked}
						onClick={onClick}
						disabled={disabled}
						size="small"
					/>
			}


			<Question
				type={"confirm"}
				onOk={onOk}
				onCancel={() => setActivateModal(false)}
				isVisible={activateModal}
				message={message ? checked ? t(`alerts.${message}.disable`) : t(`alerts.${message}.enable`) : ""}
			/>
		</Fragment>
	)
}

/** Switch propTypes
	 * PropTypes
*/
Switch.propTypes = {
	/** Is Switcher checked by default */
	defaultChecked: PropTypes.bool,
	/** message to show on confirmation modal */
	message: PropTypes.string,
	/** function which called on swithcer value change */
	handler: PropTypes.func,
	/** If true, the confirmation modal will not be shown */
	noPopup: PropTypes.bool,
	/** Is switcher disabled */
	disabled: PropTypes.bool,
	/** Info icon tooltip near switch */
	info: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default Switch;