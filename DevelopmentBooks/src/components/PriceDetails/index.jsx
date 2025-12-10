import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import getPriceDetails from "../../utils/getPriceDetails";
import { constants } from "../../constants/constants";
import PriceDetail from "../PriceDetail";

const PriceDetails = () => {
	const { cart } = useContext(cartContext);

	const [totalPrice, discountPrice, finalPrice] = getPriceDetails(cart);

	const priceDetails = [
		{ category: constants.PRICE_TYPE_TOTAL_PRICE, value: totalPrice },
		{
			category: constants.PRICE_TYPE_DISCOUNT_PRICE,
			value: discountPrice,
		},
		{ category: constants.PRICE_TYPE_FINAL_PRICE, value: finalPrice },
	];

	return (
		<div className="border-b">
			{priceDetails.map((priceDetail) => (
				<PriceDetail key={priceDetail.category} priceDetail={priceDetail} />
			))}
		</div>
	);
};

export default PriceDetails;
