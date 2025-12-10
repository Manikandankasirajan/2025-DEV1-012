import React from "react";
import { constants } from "../../constants/constants";
import { FaBagShopping } from "react-icons/fa6";
import PropTypes from "prop-types";

const Header = ({ setShowCart }) => {
	return (
		<header className="bg-slate-800">
			<nav className="px-5 py-3 flex justify-between">
				<h1 className="font-bold text-white">{constants.HEADER_TEXT}</h1>
				<div>
					<button
						aria-label={constants.SHOW_CART_BTN_LABEL}
						className="text-xl text-white cursor-pointer"
						data-testid={constants.TEST_ID_SHOW_CART_BTN}
						onClick={() => setShowCart(true)}>
						<FaBagShopping data-testid={constants.TEST_ID_BAG_ICON} />
					</button>
				</div>
			</nav>
		</header>
	);
};

Header.propTypes = {
	setShowCart: PropTypes.func.isRequired,
};

export default Header;
