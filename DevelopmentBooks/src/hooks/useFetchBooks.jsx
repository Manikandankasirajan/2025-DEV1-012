import React, { useEffect, useState } from "react";
import { constants } from "../constants/constants";
import axios from "axios";

const useFetchBooks = (url) => {
	const [error, setError] = useState(null);
	const [bookList, setBookList] = useState(null);

	useEffect(() => {
		const fetchBooks = async () => {
			if (!url) return setError(constants.MISSING_URL_MESSAGE);
			try {
				const response = await axios.get(url);
				setBookList(response.data);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchBooks();
	}, [url]);

	return { error, bookList };
};

export default useFetchBooks;
