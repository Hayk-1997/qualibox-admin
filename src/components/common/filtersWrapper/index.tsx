import React, { useState, useEffect, useMemo, useImperativeHandle, Fragment } from 'react';

import { Collapse, Form, Button } from 'antd';
import FilterTags from "./filterTags";
import useUpdateEffect from "@hooks/useUpdateEffect";
import { isFormChanged } from "@utils/form.utils";
import { yesterday, weekago, monthAgo, getNow } from '@utils/dateTime.utils';
import filtersStorageUtils from '@utils/filtersStorage.utils';

import { DATE_FORMAT, TIME_FORMAT, DATE_TIME_FORMAT } from "@constants/common.constants.ts"
import dayjs from 'dayjs';

/** Table Filters Component */
const FiltersWrapper = ({
	filtersName,
	loadFn,
	setFiltersFn,
	filters,
	formFieldsConfigs,
	children,
	activeReset,
	filtersList,
	defaultOpened,
	dependencies,
	formInstanceRef
}) => {
	const [formInstance] = Form.useForm();
	const { setFieldsValue, getFieldsValue } = formInstance;

	const [isFiltersTouched, setIsFiltersTouched] = useState(activeReset ? true : false);
	const [canApply, setCanApply] = useState(false);
	const [active, setActive] = useState(false);
	const [initial, setInitial] = useState(filters);

	const datePickersFilterKeys = useMemo(() => {
		return formFieldsConfigs?.datePicker.reduce((acc, field) => {
			if(field.name === "date") {
				acc[field.name] = ["from", "to"];
			} else {
				acc[field.name] = [`${field.name}From`, `${field.name}To`];
			}

			return acc;
		}, {}) || {};
	}, [formFieldsConfigs]);

	const updateFormValues = (filters, formatString) => {
		const formDatePickerFields = Object.keys(datePickersFilterKeys).reduce((acc, key) => {
			acc[key] = datePickersFilterKeys[key].map((filterKey) => filters[filterKey] && dayjs(filters[filterKey]));
			return acc;
		}, {});

		return {
			...filters,
			...formDatePickerFields
		}
	};

	const formInitialValues = useMemo(() => updateFormValues(initial, DATE_FORMAT), [initial]);

	/** Reset Filters
		* @function
		* @memberOf Filters
  */
	const resetFilters = () => setFiltersFn(initial);

	/** Funtion, handle form values, and make them according to filters
	* @function
	* @memberOf Filters
*/
const getDataFromFormValues = () => {
	const data = { ...getFieldsValue(true) };

	formFieldsConfigs?.datePicker.forEach(field => {
		const [fieldNameFrom, fieldNameTo]  = datePickersFilterKeys[field.name];
		if (data[field.name]) {
			const fromValue = data[field.name][0] ? data[field.name][0].clone() : "";
			const toValue = data[field.name][1] ? data[field.name][1].clone() : "";
			data[fieldNameFrom] = "";
			data[fieldNameTo] = "";
			const setValue = (key, value, args = []) => {
				data[key] = field.keepTime
					? new Date(value)
					: dayjs(value)
						.set("hour", args[0] ?? 0)
						.set("minute", args[1] ?? 0)
						.set("second", args[2] ?? 0);
			}

			
			if (fromValue) {
				setValue(fieldNameFrom, fromValue);
			}
			if (toValue) {
				setValue(fieldNameTo, toValue, [23, 59, 59]);
			}

			delete data[field.name];

		}
	});

	return data;
}

	/** Funtion, fires on submit button click
		* @function
		* @memberOf Filters
  */
	const doFilter = () => {
		setFiltersFn(getDataFromFormValues());
		setActive(false);
		setCanApply(false);
		setTimeout(() => loadFn(true), 0);
	};

	/** Funtion, fires on reset button click
		* @function
		* @param {boolean} loadData - if should load new data after reset
		* @memberOf Filters
  */
	const doReset = loadData => {
		resetFilters();
		setTimeout(() => {
			setFieldsValue(formInitialValues);
			setIsFiltersTouched(isFiltersChanged());
			if (loadData) {
				setCanApply(false);
				loadFn();
			}
		}, 0)
	}

	/** Check is filters changed
		* @function
		* @returns {boolean}
		* @memberOf Filters
  */
	const isFiltersChanged = () => {
		return isFormChanged(
			initial,
			{ ...getDataFromFormValues() }
		)
	}

	/** Function , fires on form value change
		* @function
		* @returns {object} changed - name-value mapping for changed field
		* @memberOf Filters
  */
	const handleFormValuesChange = changed => {
		setIsFiltersTouched(isFiltersChanged());
		setCanApply(true);
		Array.prototype.forEach.call(dependencies ? dependencies : [], d => {
			if (changed[d.field]) {
				setFieldsValue({ [d.resetField]: d.resetValue });
			}
		});
	}

	/** Function , to remove single filter
		* @function
		* @returns {string} name - filter name
		* @memberOf Filters
  */
	const removeFilter = name => {
		const fltrs = { ...filters };
		fltrs[name] = initial?.[name];
		Array.prototype.forEach.call(dependencies ? dependencies : [], d => {
			if (name === d.field) {
				fltrs[d.resetField] = d.resetValue;
			}
		});
		setFiltersFn(fltrs);
		setCanApply(false);
		setTimeout(loadFn, 0);
	}

	useImperativeHandle(formInstanceRef, () => {
		return { setFieldsValue, getFieldsValue };
	});

	useEffect(() => {
		const filtersFromLocalStorage = filtersStorageUtils.get() || {};
		const value = filtersFromLocalStorage[filtersName];
		const necessaryFilter = value || {};
		setFiltersFn({ ...initial, ...necessaryFilter });
	}, []);

	useEffect(() => {
		const cached = filtersStorageUtils.get() || {};
		const formFieldsKeys = filtersList.map(f => f.name);
		formFieldsKeys.forEach((key) => {
			if (datePickersFilterKeys && datePickersFilterKeys[key]) {
				formFieldsKeys.push(...datePickersFilterKeys[key]);
			}
		});
		const newFilters = {};
		Object.keys(filters).forEach(f => {
			if (formFieldsKeys.includes(f)) {
				newFilters[f] = filters[f];
			}
		})
		cached[filtersName] = newFilters;
		filtersStorageUtils.set(cached)
	}, [filters])

	/** Reset filters when global partner changes */
	useUpdateEffect(() => {
		doReset(false);
	}, []);

	/** Update field values when filters updated from outside */
	useEffect(() => {
		if (!active) { return }
		setFieldsValue(filters);
		setTimeout(() => {
			setIsFiltersTouched(isFiltersChanged());
		}, 0)
	}, [filters, active])

	/** Activate reset button on activeReset property change */
	useEffect(() => {
		if(!activeReset) { return };
		setIsFiltersTouched(true)
	}, [activeReset]);

	/** Reset to initial on component unmount */
	useEffect(() => () => resetFilters(), [])

	useEffect(() => {
		if (!defaultOpened) { return; }
		setActive(true)
	}, [defaultOpened])

	return (
		<Fragment>
			<div className="table-filters table-filters-head">
				<div className="table-filters-header">
					<Button
						className={active ? "table-filters-button-active" : ""}
						type="secondary"
						onClick={() => setActive(!active)}
					>
						<i className="icon-filter" />
						<span className="table-filters-header-title">Filter</span>
					</Button>
					{/* <FilterTags
						filters={filters}
						filtersList={filtersList}
						initialFilters={initial}
						// datePickersFilterKeys={datePickersFilterKeys}
						clearAll={() => doReset(true)}
						removeFilter={removeFilter}
					/> */}
				</div>
			</div>
			<div className="table-filters table-filters-content">
				<Collapse
					bordered={false}
					activeKey={active ? ["panel"] : []}
				>
					<Collapse.Panel
						forceRender={false}
						showArrow={false}
						key="panel"
					>
						<Form
							colon={false}
							form={formInstance}
							requiredMark={false}
							layout="vertical"
							initialValues={formInitialValues}
							onValuesChange={handleFormValuesChange}
						>
							{children}
							<div className="button-container">
								<Button htmlType="button" className="button" onClick={() => doReset(true)} style={{ marginRight: "16px" }} disabled={!isFiltersTouched}>
									<span>Reset</span>
								</Button>
								<Button type="primary" htmlType="button" className="button" onClick={doFilter} disabled={!canApply}>
									<span>Apply</span>
								</Button>
							</div>
						</Form>
					</Collapse.Panel>
				</Collapse>
			</div>
		</Fragment>
	)
};

export default FiltersWrapper;