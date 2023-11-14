import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

/* Make the table draggable, returns draggable container */
const SortableWrapper = (props) => {
	const { children, ...restProps } = props;
	return (
		<SortableContext
			items={
				children[1] instanceof Array
					? children[1].map((child) => child.key)
					: []
			}
			strategy={verticalListSortingStrategy}
			{...restProps}
		>
			<tbody {...restProps}>
				{
					// This invokes `Table.components.body.row` for each element of `children`.
					children
				}
			</tbody>
		</SortableContext>
	);
};

export default SortableWrapper;