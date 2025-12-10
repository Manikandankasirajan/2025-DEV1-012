import React from "react";
import { constants } from "../../constants/constants";

const BookListView = () => {
	return (
		<main>
			<h2 className="py-5 font-bold text-center">
				{constants.BOOKLIST_HEADING}
			</h2>
		</main>
	);
};

export default BookListView;
