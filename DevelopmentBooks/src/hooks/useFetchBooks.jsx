import React, { useEffect, useState } from "react";
import { constants } from "../constants/constants";

const useFetchBooks = (url) => {
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBooks = async () => {
			if (!url) return setError(constants.MISSING_URL_MESSAGE);
		};

		fetchBooks();
	}, [url]);

	return { error };
};

export default useFetchBooks;
