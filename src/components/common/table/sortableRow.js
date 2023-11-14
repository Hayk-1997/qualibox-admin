import { cloneElement } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { pipe } from "utils/common";

const propsForDelete = [
	"prefixCls",			"renderIndex",
	"dataIndex",			"shouldCellUpdate",
	"fixLeft",				"fixRight",
	"lastFixLeft",			"firstFixRight",
	"lastFixRight",		"firstFixLeft",
	"isSticky",				"appendNode",
	"additionalProps",	"render"
];

const getNormalProps = (props) => {
	const newProps = Object.assign({}, props)
	propsForDelete.forEach(prop =>  delete newProps[prop])
	return newProps;
}

const objectAssignment = (...objs) => Object.assign({}, ...objs);

/* Make the row draggable, returns draggable row */
const SortableRow = (props) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		isDragging,
		overIndex,
		index
	} = useSortable({
		id: props["data-row-key"]
	});
	const isOver = overIndex === index;
	const { children, ...restProps } = props;

	const isData = children instanceof Array;
	const style = pipe(
		obj => restProps.style			? objectAssignment(obj, restProps.style)								: obj,
		obj => isData && isDragging	? objectAssignment(obj, { background: "#80808038" })				: obj,
		obj => isData && isOver			? objectAssignment(obj, { borderTop: "5px solid #ec161638" })	: obj
	)(new Object)
	
	return (
		<tr
			ref={setNodeRef}
			key={restProps["data-row-key"]}
			{...attributes}
			{...restProps}
			style={style}
		>
			{
				children
				instanceof Array
					? children.map((child, i) => {
						const { key, props, ref } = child;
						const normalProps = getNormalProps(props);
						return (
							key === "dragHandle"
								? (
									<td
										key={key || i}
										ref={ref}
										{...listeners}
										{...normalProps}
									>
										{
											child.props.render
												? (
													child.props.render(
														child.props.record[child.props.dataIndex],
														child.props.record
													)
												)
												: null
										}
									</td>
								) : (
									cloneElement(
										child,
										{
											key: (key || i),
											ref,
											...normalProps
										}
									)
								)
						);
					})
					: children
			}
		</tr>
	);
};

export default SortableRow;