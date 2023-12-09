import React, { useRef, Fragment } from 'react';
import { Tooltip, Button } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, PrinterOutlined, EllipsisOutlined } from '@ant-design/icons';

/** Table Actions Component */
const Actions = ({
	actions,
	record,
	setDeletingItem
}) => {

	const ref = useRef(null);

	/** Fires on edit button click, when no dropdown
		* @function
		* @param {object} e - the event object
		* @param {object} actions - actions object
		* @param {string} action - action name
		* @param {object} record - the row item
		* @memberOf Actions
  */
	const actionClickHandler = (e, record, actions, action) => {
		e.stopPropagation();
		if (!actions[action].disabled || !actions[action].disabled(record)) {
			if (action === "delete" || actions[action].type === "delete") {
				setDeletingItem({ record, actions, action })
			} else {
				actions[action].handler && actions[action].handler(record)
			}
		}

	}



	const getActionsClassName = () => {
		let className = "";
		if (
			Object.keys(actions)
				.filter(ac => actions[ac] &&
					!["activate", "cancel"].includes(ac) &&
					(!actions[ac].hidden || (typeof actions[ac].hidden === "function" && !actions[ac].hidden(record)))).length > 1) {
			className += "table-action-others"
		}
		return className;
	}

	return (
		<div
			className="table-actions-wrapper"
			onClick={e => e.stopPropagation()}
			ref={ref}
		>
			<div
				className={getActionsClassName()}
			>
				<Fragment>
					{
						Object.keys(actions).reverse().filter(ac => actions[ac] && !["activate", "cancel"].includes(ac) && (!actions[ac].hidden || (typeof actions[ac].hidden === "function" && !actions[ac].hidden(record)))).map(ac => (
							<div
								className={"table-action" + (actions[ac].disabled && actions[ac].disabled(record) ? " table-action-disabled" : "")}
								onClick={e => actionClickHandler(e, record, actions, ac)}
								key={ac}
							>
								<Tooltip
									title={typeof actions[ac].title === "function" ? actions[ac].title(record) : actions[ac].title || (ac === "edit" ? "Edit" : ac === "delete" ? "Delete" : "")}
									getPopupContainer={() => document.body}
								>
									{
										actions[ac].icon
											? typeof actions[ac].icon === "function"
												? actions[ac].icon(record)
												: actions[ac].icon
											: (
												ac === "view"
													? <EyeOutlined />
													: ac === "edit"
														? <EditOutlined />
														: ac === "delete"
															? <DeleteOutlined />
															: ac === "print"
																? <PrinterOutlined />
																: null
											)
									}
								</Tooltip>
							</div>
						))
					}
					{
						actions.cancel && (!actions.cancel.hidden || !actions.cancel.hidden(record)) && (
							<div className="table-action table-action-delete" style={{ marginLeft: "0" }}>
								<Button
									danger={actions.cancel.type ? false : true}
									disabled={actions.cancel.disabled && actions.cancel.disabled(record)}
									onClick={
										e => {
											e.stopPropagation();
											if (!actions.cancel.disabled || !actions.cancel.disabled(record))
												setDeletingItem({ record, actions, action: "cancel" })
										}
									}
								>
									{actions.cancel.title}
								</Button>
							</div>
						)
					}
				</Fragment>
			</div>
			{
				Object.keys(actions)
					.filter(a => actions[a] && a !== "activate" && (typeof actions[a].hidden !== "function" || !actions[a].hidden(record)))
					.length > 1 && (
					<div
						className="table-action table-action-more"
					>
						<EllipsisOutlined />
					</div>
				)
			}
		</div>
	)
}

export default Actions;