import React, { useEffect, useState, Fragment } from "react";
import { ConfigProvider, Spin, Table as AntTable, Descriptions, Tooltip, Empty, Tag } from "antd";

// import Switch from "./switch";
// import Actions from "./actions";
// import SortableRow from "./sortableRow";
// import SortableWrapper from "./sortableWrapper";
// import Question from "components/common/question";
// import { OrderDirection } from "constants/common.constants";

import { toUpperCaseFirstLetter, copyToClipboard } from "@utils/common.utils";

import { closestCenter, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import toDate from "date-fns/toDate";
import format from "date-fns/format";
import { DATE_FORMAT, TIME_FORMAT } from "@constants/common.constants"
import { OrderDirection } from "@enums/common.enums";

type Props = {
	data: any,
	columns: any,
	loadFn: (...args: any[]) => void,
	loading: boolean,
	updateProps: any[],
	total: number,
	sorting: object,
	filters: object,
	setSortingFn: (arg: object) => void,
	setFiltersFn: (arg: object) => void,
	actions: Record<string, object>,
	isDisabled: (dataRowRecord: object) => boolean,
	noPagination: boolean,
	uniqueKey: number | string | symbol,
	details: (dataRowRecord: object) => object,
	detailsType: "table" | any[] | null,
	detailsLoadFn: (dataRowRecord: object) => void,
	detailsRender: (null | ((dataRowRecord: object) => JSX.Element)),
	detailsOptions: {
		column?: (number | ((...args: any[]) => any)),
		layout?: "vertical" | "horizontal",
		colon?: "string",
		bordered?: boolean
	},
	isNonExpendable: (null | ((dataRowRecord: object) => boolean)),
	isAlwaysExpended: boolean,
	nonFixed: boolean,
	showFullID: boolean,
	draggable: null | Record<"onDragEnd", (...args: any[]) => any>,
	enableReload: boolean,
	tableProps: any[]
}

type TableType = (props: Props) => JSX.Element

/** Table Component */
const Table: TableType = ({
	data = Table.data,
	columns = [],
	loadFn = Function.prototype,
	loading = false,
	total = 0,
	sorting = {},
	filters = {},
	setSortingFn = Function.prototype,
	setFiltersFn = Function.prototype,
	actions = {},
	isDisabled = () => false,
	noPagination = false,
	uniqueKey = "id",
	details = null,
	detailsType = null,
	detailsLoadFn = Function.prototype,
	detailsRender = null,
	detailsOptions = {},
	isNonExpendable = null,
	isAlwaysExpended = false,
	nonFixed = false,
	showFullID = false,
	updateProps = [],
	draggable = null,
	enableReload = false,
	...tableProps
}: Props): JSX.Element => {
	// const { t } = useTranslation();

	const [dataSource, setDataSource] = useState([])
	const [deletingItem, setDeletingItem] = useState(null);
	const [initialSorting /*, setInitialSorting */] = useState(sorting);
	const [expendedRows, setExpendedRows] = useState([]);
	const [activeId, setActiveId] = useState(null);

	const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));

	/** Update data */
	useEffect(() => {
		setTimeout(() => {
			loadFn && loadFn(true);
		}, 20);
	}, updateProps || []);

	/** Update local data state */
	useEffect(() => {
		setDataSource(data)
	}, [data])

	/** Close all rows when data updates */
	useEffect(() => {
		if (!loading && isAlwaysExpended) return;
		setExpendedRows([]);
	}, [loading]);

	/** Expend all rows in case of isAlwaysExpended is true */
	useEffect(() => {
		if (!isAlwaysExpended) return;
		setExpendedRows(dataSource.map(d => d[uniqueKey]))
	}, [dataSource])

	/** Reset sorting on component unmount */
	useEffect(() => () => setSortingFn && setSortingFn(initialSorting), []);

	const localFnRenderIdOrCopy = (col, showFullID, value) => (
		<div className={"table-col-column" + (showFullID ? " table-col-column-full" : "")} >
			<span>{col.render ? col.render(value) : value}</span>
			{
				(col.render && col.render(value)) || (!col.render && value)
					? (
						<div
							className="table-col-button"
							onClick={(e) => handleCopyButtonClick(e, value)}
						>
							<Tooltip title={"Copy ID"}>
								<i className="icon-copy" style={{ marginLeft: "16px" }} />
							</Tooltip>
						</div>
					)
					: null
			}
		</div>
	);

	const localFnRenderTooltip = (col, value) => (
		<Tooltip title={col.renderTooltip(value)}>
			{col.render(value)}
		</Tooltip>
	);

	const localFnRenderMulti = (col, value) => {
		if (!col.multiMapper(value) || col.multiMapper(value).length === 0) {
			return "-";
		}

		if (col.multiMapper(value).length === 1) {
			return col.multiMapper(value)[0];
		}

		return (
			<Tooltip
				title={
					<ul className="table-tooltip-list">
						{
							col.multiMapper(value).map((v) => <li key={v}>{v}</li>)
						}
					</ul>
				}
				trigger="hover"
				placement="top"
				overlayClassName="table-tooltip-list-wrapper"
			>
				<Tag color="blue">
					{
						col.multiMapper(value).length + " " + col.title
					}
				</Tag>
			</Tooltip>
		)
	}

	const createFnForRender = (col) => {
		if (col.dataIndex === "id" || col.copy) {
			return (value) => localFnRenderIdOrCopy(col, showFullID, value);
		}

		if (col.renderTooltip) {
			return (value) => localFnRenderTooltip(col, value);
		}

		if (col.multi) {
			return (value) => localFnRenderMulti(col, value);
		}

		return col.render;
	}

	/** Create the columns of table
	 * @function
	 * @memberOf Table
	 */
	const makeColumns = () => {
		const result = columns.filter(c => !c.hidden).map((col) => ({
			sorter: true,
			...col,
			render: createFnForRender(col),
		}));
		if (actions) {
			const flagForRenderActions = (Object.keys(actions).filter((ac) => ac !== "activate").length > 0);
			if (flagForRenderActions || enableReload) {
				result.push({
					title: (
						<div className="table-actions-wrapper">
							{
								enableReload
									? (
										<div className="table-action" onClick={reload}>
											<i className="icon-refresh" />
										</div>
									)
									: null
							}
						</div>
					),
					render: (_, record) => {
						if (!flagForRenderActions) { return <Fragment />; }
						return renderActions(record, actions);
					},
					fixed: nonFixed ? false : "right",
				});
			}
			if (actions.activate) {
				const activateCol = {
					title: "",
					render: (_, record) => renderSwitcher(record, actions.activate),
					className: "ant-table-switcher-cell",
				};
				if (actions.activate.right) {
					result.push(activateCol);
				} else {
					result.unshift(activateCol);
				}
			}
		}
		if (draggable) {
			result.unshift({
				key: "dragHandle",
				dataIndex: "dragHandle",
				title: "",
				width: "3%",
				className: "ant-table-drag-cell",
				render: () => activeId ? <i className="icon-move" /> : <i className="icon-drag" style={{ cursor: "move", fontSize: "24px" }} />
			})
		}
		return result;
	};

	const handleDragStart = (event) => {
		if (!draggable) {
			return
		}
		const { active } = event;
		if (typeof draggable.onDragStart === "function") {
			draggable.onDragStart(active.id)
		}
		setActiveId(active.id);
	}

	const handleDragEnd = (event) => {
		if (!draggable) {
			return
		}
		const { active, over } = event;
		if ((active && over) && (active.id !== over.id)) {
			setDataSource((items) => {
				// In this example, find an item, where `item.key` === `useSortable.id`.
				const oldIndex = items.findIndex((item) => item[uniqueKey] === active.id);
				const newIndex = items.findIndex((item) => item[uniqueKey] === over.id);
				if (typeof draggable.onDragEnd === "function") {
					draggable.onDragEnd(oldIndex, newIndex)
				}
				return arrayMove(items, oldIndex, newIndex);
			});
		}
		// Stop overlay.
		setActiveId(null);
	}

	/** Fires on copy button click
	 * @function
	 * @param {object} e - the event object
	 * @param {string} text - text to copy
	 * @memberOf Table
	 */
	const handleCopyButtonClick = (e, text) => {
		e.stopPropagation();
		copyToClipboard(text);
	};

	/** Fires on delete confirmation popup confirm
	 * @function
	 * @param {string} promptValue - prompt input value
	 * @memberOf Table
	 */
	const onDelete = (promptValue) => {
		const action = deletingItem.actions[deletingItem.action];
		action.handler(deletingItem.record, promptValue);
		setDeletingItem(null);
	};

	/** Renders the action table cell
	 * @function
	 * @param {object} record - the row item
	 * @param {object} actions - actions object
	 * @returns {JSX} - the action table cell JSX
	 * @memberOf Table
	 */
	const renderActions = (record, actionsArg) => {
		return <Fragment></Fragment>
		// return (
		// 	<Actions
		// 		record={record}
		// 		actions={actionsArg}
		// 		setDeletingItem={setDeletingItem}
		// 	/>
		// );
	};

	/** Renders the action table cell
	 * @function
	 * @param {object} record - the row item
	 * @param {object} options - options of swithcher
	 * @returns {JSX} - the action table cell JSX
	 * @memberOf Table
	 */
	const renderSwitcher = (record, options) => {
		return <Fragment></Fragment>
		// return (
		// 	<Switch
		// 		noPopup={options.noPopup === true}
		// 		defaultChecked={options.isChecked(record)}
		// 		message={options.messageKey}
		// 		handler={(isChecked) => options.handler(isChecked, record)}
		// 		disabled={options.disabled ? options.disabled(record) : false}
		// 		info={options.info ? options.info(record) : null}
		// 	/>
		// );
	};

	/** Fires on sort and pagination change
	 * @function
	 * @param {object} pagination - the pagination object
	 * @param {object} sorter - the sorting object
	 * @memberOf Table
	 */
	const onChange = (pagination, _, sorter) => {
		const obj = {};
		if (pagination.current) {
			obj.page = pagination.current;
		}
		if (pagination.pageSize) {
			obj.limit = pagination.pageSize;
		}
		if (sorter.field) {
			obj.orderBy = toUpperCaseFirstLetter(sorter.field);
		}
		if (sorter.order) {
			obj.orderDirection = sorter.order === "ascend" ? OrderDirection.Asc : OrderDirection.Desc;
		} else {
			obj.orderDirection = initialSorting.orderDirection;
			obj.orderBy = initialSorting.orderBy;
		}
		setSortingFn({
			...sorting,
			...obj,
		});

		setTimeout(() => loadFn && loadFn(), 0);
	};

	/** renders the chidren of expended section of row
	 * @function
	 * @param {object} record - the row item
	 * @param {array} detailsOfRecord - row detail
	 * @returns {JSX} - the action table cell JSX
	 * @memberOf Table
	 */
	const childrenOfExpandedRow = (record, detailsOfRecord) => {
		if (detailsRender) {
			return detailsRender(record);
		}
		if (!detailsOfRecord) {
			return <Descriptions />;
		}

		if (detailsType === "table") {
			const antdColumns = [];
			if (draggable) {
				antdColumns.push({
					title: "",
					dataIndex: "sort",
					width: draggable ? "3%" : "1%",
					render: () => <Fragment />,
					className: "ant-table-drag-cell",
				})
			}
			detailsOfRecord.columns.forEach((c) => antdColumns.push({ ...c, sorter: false }))
			if (detailsOfRecord.actions) {
				antdColumns.push({
					title: <div className="table-actions-wrapper" />,
					render: (_, r) => renderActions(r, detailsOfRecord.actions),
					fixed: false,
					className: "ant-table-actions-cell",
				})
			}
			const detailsOfRecordKey = detailsOfRecord.uniqueKey ? detailsOfRecord.uniqueKey : uniqueKey;
			return (
				<AntTable
					loading={false}
					columns={antdColumns}
					dataSource={detailsOfRecord.data.map((d) => ({ ...d, key: d[detailsOfRecordKey] }))}
					pagination={false}
					rowClassName={getRowClassName}
					showHeader={!isAlwaysExpended}
					{...tableProps}
				/>
			)
		}
		if (detailsOfRecord.length > 0) {
			return (
				<Descriptions
					bordered={detailsOptions.bordered}
					colon={detailsOptions.colon}
					title=""
					className={"table-description"}
					column={
						typeof detailsOptions.column === "function"
							? detailsOptions.column(record)
							: detailsOptions.column
					}
					layout={detailsOptions.layout}
				>
					{
						detailsOfRecord.map((r, ind) => (
							<Descriptions.Item label={r.title} key={ind}>
								{r.value}
							</Descriptions.Item>
						))
					}
				</Descriptions>
			);
		}
		return <Empty image={<img src="/assets/images/no-data.svg" alt="No Data" />} style={{ padding: "0" }} />;
	}

	/** renders the expended section of row
	 * @function
	 * @param {object} record - the row item
	 * @returns {JSX} - the action table cell JSX
	 * @memberOf Table
	 */
	const expandedRowRender = (record) => {
		const detailsOfRecord = details(record);
		return (
			<Spin spinning={!detailsOfRecord}>
				{childrenOfExpandedRow(record, detailsOfRecord)}
			</Spin>
		)
	};

	/** Fires on row expend
	 * @function
	 * @param {boolean} expended - is true when row should expend
	 * @param {object} record - the row item
	 * @memberOf Table
	 */
	const onRowExpand = (expended, record) => {
		if (!expended) return;
		detailsLoadFn && detailsLoadFn(record);
	};

	/** Renders the content of empty Table
	 * @function
	 * @returns {JSX} - Empty Table content JSX
	 * @memberOf Table
	 */
	const renderEmpty = () => (
		<Empty
			description={"No Data Found"}
			image={<img src="/assets/images/no-data.svg" alt="No Data" />}
			imageStyle={{ height: "192px" }}
		/>
	);

	/** Get the css class name for row
	 * @function
	 * @param {object} record - the record of row
	 * @param {number} index - row index
	 * @returns {string} - Css class name
	 * @memberOf Table
	 */
	const getRowClassName = (record, index) => {
		let ret = "";
		if (isDisabled && isDisabled(record)) {
			ret = "table-row-disabled ";
		}
		if ((index + 1) % 2 == 0) {
			ret += "table-row-even";
		} else {
			ret += "table-row-odd";
		}
		if (!isAlwaysExpended && expendedRows.includes(record[uniqueKey])) {
			ret += " table-row-expended";
		}

		if (isAlwaysExpended) {
			ret += " table-row-always-expended";
		}

		if (isNonExpendable && isNonExpendable(record)) {
			ret += " table-row-non-expendable";
		}

		if (record.totalCol === "total") {
			ret += " table-row-total";
		}

		return ret;
	};

	/** Return table options, to make table draggable
	 * @function
	 * @returns {object} - table options
	 * @memberOf Table
	 */
	const draggableOptions = () => {
		if (!draggable) { return {}; }
		return (
			{
				components: {
					body: {
						row: SortableRow,
						wrapper: SortableWrapper
					},
				},
			}
		);
	};

	/** Fires on reload button click
	 * @function
	 * @memberOf Table
	 */
	const reload = () => {
		if (setFiltersFn && filters && filters.to) {
			setFiltersFn({
				...filters,
				to: toDate(format(new Date,`${DATE_FORMAT} ${TIME_FORMAT}`)) //moment(new Date(), `${config.DATE_FORMAT} ${config.TIME_FORMAT}`).toDate(),
			});
		}
		loadFn && loadFn(true);
	};

	return (
		<div className={"table-wrapper" + (isAlwaysExpended ? " table-wrapper-expended" : "") + (draggable ? " table-wrapper-draggable" : "")}>
			<ConfigProvider
				renderEmpty={renderEmpty}
				getPopupContainer={(trigger) => {
					if (!trigger) {
						return document.body;
					}
					return trigger.closest(".table-wrapper");
				}}
			>
				<Spin spinning={loading}>
					<DndContext
						sensors={sensors}
						collisionDetection={closestCenter}
						onDragStart={handleDragStart}
						onDragEnd={handleDragEnd}
					>
						<AntTable
							loading={false}
							columns={makeColumns()}
							dataSource={Array.isArray(dataSource) ? dataSource.map((d) => ({ ...d, key: d[uniqueKey] })) : []}
							pagination={
								noPagination
									? false
									: {
										total: total,
										pageSize: sorting ? sorting.limit : 10,
										showSizeChanger: true,
										current: sorting ? sorting.page : 1,
										pageSizeOptions: [10, 30, 50],
										showTotal: (total, range) => `${range[0]} - ${range[1]} of ${total}`,
										hideOnSinglePage: true,
										locale: { items_per_page: "" }
									}
							}
							onChange={onChange}
							rowClassName={getRowClassName}
							expandedRowRender={details ? expandedRowRender : null}
							onExpand={onRowExpand}
							expandedRowKeys={expendedRows}
							onExpandedRowsChange={expended => !isAlwaysExpended ? setExpendedRows(expended) : null}
							expandIcon={(params) => {
								if (params.expanded) {
									return (
										<a
											onClick={(e) => {
												params.onExpand(params.record, e);
											}}
										>
											<i className="icon-up" />
										</a>
									);
								}
								return (
									<a
										onClick={(e) => {
											params.onExpand(params.record, e);
										}}
									>
										<i className="icon-down" />
									</a>
								);
							}}
							{...draggableOptions()}
							{...tableProps}
						/>
						<DragOverlay>
							<AntTable
								columns={makeColumns()}
								showHeader={false}
								dataSource={(
									activeId
										? dataSource.filter((item) => item[uniqueKey] === activeId)
										: []
								)}
								pagination={false}
							/>
						</DragOverlay>
					</DndContext>
				</Spin>
				{
					// deletingItem
					// 	? (
					// 		<Question
					// 			type={deletingItem.actions[deletingItem.action].isPrompt ? "prompt" : "confirm"}
					// 			onOk={(promptValue) => onDelete(promptValue)}
					// 			onCancel={() => setDeletingItem(null)}
					// 			isVisible={true}
					// 			message={
					// 				deletingItem.actions[deletingItem.action].message
					// 					? deletingItem.actions[deletingItem.action].message(deletingItem.record)
					// 					: deletingItem.actions[deletingItem.action].messageKey
					// 			}
					// 			promptLabel={deletingItem.actions[deletingItem.action].promptLabel}
					// 			title={deletingItem.actions[deletingItem.action].title}
					// 			isPromptRequired={deletingItem.actions[deletingItem.action].isPromptRequired}
					// 		/>
					// 	)
					// 	: null
				}
			</ConfigProvider>
		</div>
	);
};

/** Table propTypes
 * PropTypes
 */
Table.propTypes = {
	/** The array of items to show in table */
	// data: PropTypes.arrayOf(PropTypes.object),
	/** The array of objects representing the structure of columns */
	// columns: PropTypes.arrayOf(
	// 	PropTypes.shape({
	// 		/** Column title */
	// 		title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	// 		/** Column property of data */
	// 		dataIndex: PropTypes.string,
	// 		/** Column content render function */
	// 		render: PropTypes.func,
	// 		/** Is column sortable */
	// 		sorter: PropTypes.bool,
	// 	})
	// ),
	/** Function to call to laod table data */
	// loadFn: PropTypes.func,
	/** Is data loading */
	// loading: PropTypes.bool,
	/** total rows count in table */
	// total: PropTypes.number,
	/** Sorting details of table */
	// sorting: sortingType,
	/** Filters of table */
	// filters: PropTypes.object,
	/** Function to set sorting details */
	// setSortingFn: PropTypes.func,
	/** Function to set filters */
	// setFiltersFn: PropTypes.func,
	/** Object, represents the info about actions in table */
	// actions: PropTypes.object,
	/** Functions, which returns true for row , if it should be disabled */
	// isDisabled: PropTypes.func,
	/** Remove pagination, if true */
	// noPagination: PropTypes.bool,
	/** The property to use for unique Key, by default is "ID" */
	// uniqueKey: PropTypes.string,
	/** Function which returns the data for expended section for each row */
	// details: PropTypes.func,
	/** Function to call, to load data for expended section */
	// detailsLoadFn: PropTypes.func,
	/** Type of details view, if is can be 'table', 'info', by default id 'info'*/
	// detailsType: PropTypes.string,
	/** Function which renders the content of expended section */
	// detailsRender: PropTypes.func,
	/** Function which checks if the row is nonExpandable */
	// isNonExpendable: PropTypes.func,
	/** If true rows always will be expended */
	// isAlwaysExpended: PropTypes.bool,
	/** Properties for expended section */
	// detailsOptions: PropTypes.shape({
	// 	/** Columns count in expended section */
	// 	column: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
	// 	/** layout expended section */
	// 	layout: PropTypes.oneOf(["vertical", "horizontal"]),
	// 	/** Colon after label  */
	// 	colon: PropTypes.string,
	// 	/** Show borders on expened section  */
	// 	bordered: PropTypes.bool,
	// }),
	/** Disable actions table cell to be fixed */
	// nonFixed: PropTypes.bool,
	/** Do not crop Id, and show it fully */
	// showFullID: PropTypes.bool,
	/** Array of props, which update will triger data load */
	// updateProps: PropTypes.array,
	/** The option for table row dragging */
	// draggable: PropTypes.shape({
	// 	/** Function, which will fire on row drop end */
	// 	onDragEnd: PropTypes.func
	// }),
	/** Option to enable reload button for table */
	// enableReload: PropTypes.bool,
	/** Option to enable/disable draggable feature */
	// isDraggable: PropTypes.func,
};

Table.data = [];

export default Table;