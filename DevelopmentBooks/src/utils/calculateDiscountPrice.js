import { constants } from "../constants/constants";

export default function calculateDiscountPrice(totalPrice, totalNoOfBooks) {
	const discountPrice =
		totalPrice * (constants.DISCOUNT_RULE[totalNoOfBooks] / constants.HUNDRED);
	return discountPrice;
}
