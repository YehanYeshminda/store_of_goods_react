import { useState, useEffect } from 'react';

const useFetch = (url = '', option = null) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// used for the clean up - for no memory leaks
		let isMounted = true;

		setLoading(true);
		fetch(url, option)
			.then((res) => res.json())
			.then((data) => {
				if (isMounted) {
					setData(data);
					setError(null);
				}
			})
			.catch((error) => {
				if (isMounted) {
					setError(error);
					setData(null);
				}
			})
			.finally(() => isMounted && setLoading(false));

		return () => (isMounted = false);
	}, [url, option]);

	return { loading, error, data };
};

export default useFetch;
