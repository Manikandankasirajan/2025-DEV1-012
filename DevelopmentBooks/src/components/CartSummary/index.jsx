import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { constants } from "../../constants/constants";
import CartItem from "../CartItem";
import PriceDetails from "../PriceDetails";

const CartSummary = () => {
	const { cart, clearCart } = useContext(cartContext);
	return (
		<div className="p-5">
			<h2 className="pb-3 font-bold border-b-2">
				{constants.CART_SUMMARY_HEADING_TEXT}
			</h2>
			{cart.map((bookDetails) => {
				return <CartItem key={bookDetails.bookId} bookDetails={bookDetails} />;
			})}
			<PriceDetails />
			<div className="p-4 flex justify-center">
				<button
					data-testid={constants.TEST_ID_CLEAR_CART_BTN}
					className="p-3 bg-slate-400 font-bold rounded cursor-pointer"
					onClick={() => clearCart()}>
					{constants.CLEAR_CART_BTN_TEXT}
				</button>
			</div>
		</div>
	);
};

export default CartSummary;
