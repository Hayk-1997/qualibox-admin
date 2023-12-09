import React, { Fragment, useMemo } from "react";
import SideShadowBox from "@components/ui/sideShadowBox";
import dayjs from "dayjs";
// import moment from "moment";
// import config from "config/config";

const momentifyAndGetTime = (value) => value.getTime();
const utcMomentifyAndFormt = (value, format) => dayjs(value).format(format);

const isThereDateFilterName = (filterNames, filters, initialFilters) => {
	return filterNames.some((name) => {
		const isExistsInFilters = filters[name] && !initialFilters[name];
		if (isExistsInFilters) return isExistsInFilters;

		const isExistsInInitialFilters = !filters[name] && initialFilters[name];
		if (isExistsInInitialFilters) return isExistsInInitialFilters;

		const isExistsInBoth = filters[name] && initialFilters[name];
		if (!isExistsInBoth) return isExistsInBoth;

		return (
			momentifyAndGetTime(filters["from"]) !== momentifyAndGetTime(initialFilters["from"])
		);
	})
};

/** Table Filters Tags Component */
const FilterTags = ({
	filters,
	filtersList,
	initialFilters,
	datePickersFilterKeys,
	clearAll,
	removeFilter,
}) => {

	const tagsList = useMemo(() => {
		return (filtersList || []).reduce((acc, f) => {
			// if (datePickersFilterKeys?.[f.name] && isThereDateFilterName(datePickersFilterKeys[f.name], filters, initialFilters)
			// ) {
			// 	acc.push(f);
			// }
			// else
			if (!Array.isArray(initialFilters[f.name]) || !Array.isArray(filters[f.name])) {
				if (filters[f.name] !== initialFilters[f.name]) {
					acc.push(f);
				}
			} else if (Array.isArray(initialFilters[f.name]) && Array.isArray(filters[f.name])) {
				if (filters[f.name].sort().toString() !== initialFilters[f.name].sort().toString()) {
					acc.push(f);
				}
			}

			return acc;
		}, []);
	}, [filtersList, initialFilters, isThereDateFilterName]);

	/** Function , to get filter text
	 * @function
	 * @returns {string} - text
	 * @memberOf FilterTags
	 */
	const makeTagsText = (filter) => {
		let title = filter.title;
		let value = "";
		const createRetVal = () => `${title}: ${value}`;
		const format = filter.time ? config.DATE_TIME_FORMAT : config.DATE_FORMAT;

		// if (datePickersFilterKeys?.[filter.name]) {
		// 	value = datePickersFilterKeys[filter.name].map((key) => utcMomentifyAndFormt(filters[key], format)).join(" - ");
		// 	return createRetVal();
		// }

		if (Array.isArray(filters[filter.name])) {
			if (filters[filter.name].length > 1) {
				value = filters[filter.name].length;
			} else if (!filter["values"]) {
				value = filters[filter.name][0];
			} else {
				value = get(
					filter["values"].find((v) => v.value === filters[filter.name][0]),
					"title",
					filters[filter.name]
				);
			}
			return createRetVal();
		}

		if (filter["values"]) {
			value = get(
				filter["values"].find((v) => v.value == filters[filter.name]),
				"title",
				filters[filter.name]
			);
			return createRetVal();
		}

		value = filters[filter.name];

		return createRetVal();
	};

	return (
		tagsList.length > 0
			? (
				<div className="table-filters-tags">
					<div className="table-filters-tags-clear">
						<span onClick={clearAll}>Clear All</span>
					</div>
					<SideShadowBox
						className={"table-filters-tags-list"}
						dependencies={filters}
					>
						{
							tagsList.map((tag) => (
								<div className="table-filters-tags-list-item" key={tag.name}>
									<span>{makeTagsText(tag)}</span>
									<i className="icon-close" onClick={() => removeFilter(tag.name)} />
								</div>
							))
						}
					</SideShadowBox>
				</div>
			)
			: (
				<Fragment />
			)
	);
};

export default FilterTags;
