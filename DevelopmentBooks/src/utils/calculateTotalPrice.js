export default function calculateTotalPrice(books) {
	let totalPrice = 0;
	books.forEach((book) => {
		totalPrice += book.bookPrice;
	});
	return totalPrice;
}
