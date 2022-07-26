import { DependencyList, useCallback, useEffect, useState } from 'react';

export function useAsync<DATA>(callback: () => Promise<DATA>, dependencies: DependencyList = []) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [value, setValue] = useState<undefined | DATA>();

	const callbackMemoized = useCallback(() => {
		setLoading(true);
		setError(undefined);
		setValue(undefined);

		callback()
			.then(setValue)
			.catch(setError)
			.finally(() => setLoading(false));
	}, dependencies);

	useEffect(() => {
		callbackMemoized();
	}, [callbackMemoized]);

	return { loading, error, value };
}
