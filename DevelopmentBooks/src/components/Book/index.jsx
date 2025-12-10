import PropTypes from "prop-types";
import React, { useContext } from "react";
import { constants } from "../../constants/constants";
import { cartContext } from "../../context/cartContext";
import formatTitle from "../../utils/formatTitle";
import formatPrice from "../../utils/formatPrice";

const Book = ({ bookDetails }) => {
	const { id, imgSrc, title, price } = bookDetails;
	const { cart, addToCart } = useContext(cartContext);
	const isBookAddedToCart = cart.find((book) => book.bookId === id);
	return (
		<div
			className="w-64 mx-auto p-3 bg-white shadow-2xl"
			data-testid={constants.TEST_ID_BOOK}
			title={title}>
			<img
				src={imgSrc}
				alt={title}
				className="w-full rounded"
				data-testid={constants.TEST_ID_BOOK_IMAGE}
			/>
			<h3
				className="my-2 font-bold text-black/75"
				data-testid={constants.TEST_ID_BOOK_TITLE}>
				{formatTitle(title)}
			</h3>
			<h4
				className="font-bold text-black/75"
				data-testid={constants.TEST_ID_BOOK_PRICE}>
				{formatPrice(price)}
			</h4>
			<button
				className="my-1 w-full py-2 bg-blue-900  text-white font-bold rounded-lg cursor-pointer hover:bg-blue-700 disabled:bg-green-700 disabled:cursor-default"
				onClick={() => addToCart(id, title, price)}
				data-testid={`TEST_ID_${title}`}
				disabled={isBookAddedToCart}>
				{isBookAddedToCart
					? constants.CHECK_MARK
					: constants.ADD_TO_CART_BTN_TEXT}
			</button>
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
