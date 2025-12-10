import calculateDiscountPrice from "./calculateDiscountPrice";
import calculateTotalPrice from "./calculateTotalPrice";

export default function getPriceDetails(books) {
	let totalPrice = calculateTotalPrice(books);
	let discountPrice = calculateDiscountPrice(totalPrice, books.length);
	let finalPrice = totalPrice - discountPrice;

	return [totalPrice, discountPrice, finalPrice];
}
