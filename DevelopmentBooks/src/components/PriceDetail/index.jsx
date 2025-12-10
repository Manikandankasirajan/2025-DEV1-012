import PropTypes from "prop-types";
import React from "react";
import formatPrice from "../../utils/formatPrice";

const PriceDetail = ({ priceDetail }) => {
	const { category, value } = priceDetail;
	return (
		<div className="px-3 py-2 flex justify-between border-b border-dashed">
			<h4
				className="text-gray-600 font-bold"
				data-testid={`TEST_ID_PRICE_TYPE_${category}`}>
				{category}
			</h4>
			<p
				className="text-gray-600 font-bold"
				data-testid={`TEST_ID_PRICE_VALUE_${category}`}>
				{formatPrice(value)}
			</p>
		</div>
	);
};

PriceDetail.propTypes = {
	priceDetail: PropTypes.shape({
		category: PropTypes.string.isRequired,
		value: PropTypes.number.isRequired,
	}).isRequired,
};

export default PriceDetail;
