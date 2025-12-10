import React from "react";
import { constants } from "../../constants/constants";

const Cart = () => {
	return (
		<div
			className="w-screen h-screen fixed top-0 left-0 z-40 bg-slate-400/50 flex justify-end"
			data-testid={constants.TEST_ID_CART_OVERLAY}>
			<section
				className="relative w-10/12 bg-gray-50 shadow-2xl z-50 md:w-1/2 lg:w-1/3"
				data-testid={constants.TEST_ID_CART}></section>
		</div>
	);
};

export default Cart;
