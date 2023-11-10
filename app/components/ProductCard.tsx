import React from 'react';
import AddToCart from './AddToCart';

const ProductCard = () => {
	return (
		<div>
			<h1>ProductCard</h1>
			{/* Product detail renderring from server side */}
			<AddToCart />
		</div>
	);
};

export default ProductCard;
