import { useState, useEffect } from "react";

export const useFetchData = (url = "", err_msg = "An error has ocurred getting the data") => {
	const [fetchData, setFetchData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const response = await window.fetch(url);
				if (!response.ok) {
					setFetchData([]);
					throw new Error("Personaje no encontrado");
				}
				const data = await response.json();
				setFetchData(data);
			} catch (err) {
				console.error(err.message);
				if (err.message === "Personaje no encontrado") {
					setError(err.message);
				} else {
					setError(err_msg);
				}
			}
			setLoading(false);
		})();
	}, [url]);

	return { data: fetchData, loading, error };
};
