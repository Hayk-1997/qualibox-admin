import dayjs from 'dayjs';

export const formatDate = date => dayjs(date).format("MM/dd/yyyy")

export const formatDateTime = (date, tz = true, sec = false) => {
	const dateTimeFormat = sec ? 'DD/MM/YYYY HH:mm:ss.SSS' : 'DD/MM/YYYY HH:mm'
	const format = tz ? dateTimeFormat + " (UTCZ)" : dateTimeFormat;
	const timeZone = getTimeZone();
	const hours = parseInt(timeZone);
	const minutes = (timeZone % 1) * 60;
	if (tz && date.indexOf("Z") === -1) {
		date = new Date(date);
		date.setHours(date.getHours() + hours);
		date.setMinutes(date.getMinutes() + minutes);
	}
	return dayjs(date).format(format)
}
export const aDayAgo = () => {
	const now = new Date();
	return new Date(now.setDate(now.getDate() - 1));
};

export const aWeekAgo = () => {
	const now = new Date();
	return new Date(now.setDate(now.getDate() - 7));
};

export const getTimeZone = () => {
	const date = new Date();
	const timeZone = date.getTimezoneOffset() / 60;
	return timeZone > 0 ? "-" + timeZone : timeZone * -1
}

export const roundToHour = (date: Date): Date => {
	const isNotStartOfDate = date.getMinutes() || date.getSeconds() || date.getMilliseconds()
	const dayjsDate = isNotStartOfDate ? dayjs(date).add(1, "hour") : dayjs(date)
	return dayjsDate.startOf("day").toDate()
}

export const getNow = round => {
	const date = new Date;
	if (!round) return date;
	return roundToHour(date);
}

export const yesterday = round => {
	const date = dayjs(new Date).subtract(1, "day");
	if (!round) return date;
	return roundToHour(date);
}

export const weekago = (count, round) => {
	const date = dayjs(new Date).subtract(1, "week");
	if (!round) return date;
	return roundToHour(date);
}

export const monthAgo = (count, round) => {
	const date = dayjs(new Date).subtract(1, "month");
	if (!round) return date;
	return roundToHour(date);
}