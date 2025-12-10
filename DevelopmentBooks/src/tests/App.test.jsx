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

const getCloseCartBtn = () => {
	return screen.queryByTestId(testConstants.TEST_ID_CLOSE_CART_BTN);
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
	it("should render close cart when close cart button is clicked", async () => {
		await user.click(getShowCartBtn());

		expect(getCart()).toBeInTheDocument();
		expect(getCloseCartBtn()).toBeInTheDocument();
		const xMarkIcon = screen.queryByTestId(testConstants.TEST_ID_XMARK_ICON);
		expect(xMarkIcon).toBeInTheDocument();

		await user.click(getCloseCartBtn());

		expect(getCart()).not.toBeInTheDocument();
	});
});
