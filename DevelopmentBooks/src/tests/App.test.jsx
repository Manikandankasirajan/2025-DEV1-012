import { render, screen } from "@testing-library/react";
import App from "../App";
import { beforeEach, expect } from "vitest";
import { testConstants } from "./constants/testConstants";

describe("app component", () => {
	beforeEach(() => render(<App />));
	it("should render header text", () => {
		const headerText = screen.getByRole("heading", { level: 1 });
		expect(headerText).toHaveTextContent(testConstants.HEADER_TEXT);
	});
	it("should render booklist section heading", () => {
		const bookListheading = screen.getByRole("heading", { level: 2 });
		expect(bookListheading).toHaveTextContent(testConstants.BOOKLIST_HEADING);
	});
});
