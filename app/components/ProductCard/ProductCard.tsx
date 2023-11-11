import React from 'react';
import AddToCart from '../AddToCart';
// import styles from './ProductCard.module.css';

const ProductCard = () => {
	return (
		<div className='p-5 my-5 text-2xl rounded-lg'>
			<h1>ProductCard</h1>
			{/* Product detail renderring from server side */}
			<AddToCart />
		</div>
	);
};

export default ProductCard;
