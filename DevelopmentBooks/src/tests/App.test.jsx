import { render, screen } from "@testing-library/react";
import App from "../App";
import { beforeEach, expect } from "vitest";
import { testConstants } from "./constants/testConstants";
import userEvent from "@testing-library/user-event";

const getShowCartBtn = () => {
	return screen.getByTestId(testConstants.TEST_ID_SHOW_CART_BTN);
};

const getCartOverlay = () => {
	return screen.queryByTestId(testConstants.TEST_ID_CART_OVERLAY);
};

const getCart = () => {
	return screen.queryByTestId(testConstants.TEST_ID_CART);
};

describe("app component", () => {
	let user;
	beforeEach(() => {
		render(<App />);
		user = userEvent.setup();
	});
	it("should render header text", () => {
		const headerText = screen.getByRole("heading", { level: 1 });
		expect(headerText).toHaveTextContent(testConstants.HEADER_TEXT);
	});
	it("should render booklist section heading", () => {
		const bookListheading = screen.getByRole("heading", { level: 2 });
		expect(bookListheading).toHaveTextContent(testConstants.BOOKLIST_HEADING);
	});
	it("should open cart when show cart button is clicked", async () => {
		expect(getShowCartBtn()).toBeInTheDocument();

		const bagIcon = screen.getByTestId(testConstants.TEST_ID_BAG_ICON);
		expect(bagIcon).toBeInTheDocument();

		expect(getCartOverlay()).not.toBeInTheDocument();
		expect(getCart()).not.toBeInTheDocument();

		await user.click(getShowCartBtn());

		expect(getCartOverlay()).toBeInTheDocument();
		expect(getCart()).toBeInTheDocument();
	});
});
