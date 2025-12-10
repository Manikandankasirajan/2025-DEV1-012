import React from "react";
import { constants } from "../../constants/constants";
import useFetchBooks from "../../hooks/useFetchBooks";

const BookListView = () => {
	const { error, bookList } = useFetchBooks(constants.API_URL);
	const isBookListEmpty = () => !bookList || bookList.length === constants.ZERO;
	return (
		<main>
			<h2 className="py-5 font-bold text-center">
				{constants.BOOKLIST_HEADING}
			</h2>
			{error && <p className="mt-48 text-center">{error}</p>}
			{isBookListEmpty() && (
				<p className="mt-48 text-center">{constants.NO_RESULTS_MESSAGE}</p>
			)}
		</main>
	);
};

export default BookListView;
