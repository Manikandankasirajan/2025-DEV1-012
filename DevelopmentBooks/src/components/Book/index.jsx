import PropTypes from "prop-types";
import React from "react";
import { constants } from "../../constants/constants";

const Book = ({ bookDetails }) => {
	const { id, imgSrc, title, price } = bookDetails;
	return (
		<div className="w-64 mx-auto p-3 bg-white shadow-2xl">
			<img
				src={imgSrc}
				alt={title}
				className="w-full rounded"
				data-testid={constants.TEST_ID_BOOK_IMAGE}
			/>
			<h3
				className="my-2 font-bold text-black/75"
				data-testid={constants.TEST_ID_BOOK_TITLE}>
				{title}
			</h3>
			<h4
				className="font-bold text-black/75"
				data-testid={constants.TEST_ID_BOOK_PRICE}>
				{price}
			</h4>
		</div>
	);
};

Book.propTypes = {
	bookDetails: PropTypes.shape({
		id: PropTypes.string.isRequired,
		imgSrc: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
};

export default Book;
