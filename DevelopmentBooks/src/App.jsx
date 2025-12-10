import React, { useState } from "react";
import Header from "./components/Header";
import BookListView from "./components/BookListView";
import Cart from "./components/Cart";

const App = () => {
	const [showCart, setShowCart] = useState(false);
	return (
		<>
			<Header setShowCart={setShowCart} />
			<BookListView />
			{showCart && <Cart />}
		</>
	);
};

export default App;
