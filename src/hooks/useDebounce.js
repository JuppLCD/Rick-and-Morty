import { useEffect, useState } from "react";

export const useDebounce = (value, delay, setPage) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const handler = setTimeout(() => {
			setPage(1);
			setDebouncedValue(value != "" ? value : null);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
};
