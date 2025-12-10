import calculateDiscountPrice from "./calculateDiscountPrice";
import calculateTotalPrice from "./calculateTotalPrice";
import createSetOfUniqueBooks from "./createSetOfUniqueBooks";

export default function getPriceDetails(books) {
	const bookSets = createSetOfUniqueBooks(books);

	let totalPrice = 0;
	let discountPrice = 0;
	let finalPrice = 0;

	bookSets.forEach((bookSet) => {
		const totalPriceofBookSet = calculateTotalPrice(bookSet);
		const discountPriceBookSet = calculateDiscountPrice(
			totalPriceofBookSet,
			bookSet.length
		);
		totalPrice += totalPriceofBookSet;
		discountPrice += discountPriceBookSet;
		finalPrice += totalPriceofBookSet - discountPriceBookSet;
	});

	return [totalPrice, discountPrice, finalPrice];
}
