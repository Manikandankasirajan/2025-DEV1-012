import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect } from "vitest";
import { testConstants } from "./constants/testConstants";

describe("app component", () => {
	it("should render header text", () => {
		render(<App />);
		const headerText = screen.getByRole("heading", { level: 1 });
		expect(headerText).toHaveTextContent(testConstants.HEADER_TEXT);
	});
	it("should render booklist section heading", () => {
		render(<App />);
		const bookListheading = screen.getByRole("heading", { level: 2 });
		expect(bookListheading).toHaveTextContent(testConstants.BOOKLIST_HEADING);
	});
});
