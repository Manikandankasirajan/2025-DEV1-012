import { constants } from "../constants/constants";

export default function formatTitle(title) {
	return title.length > constants.TITLE_LIMIT
		? title.slice(constants.ZERO, constants.TITLE_LIMIT) + constants.ELLIPSIS
		: title;
}
