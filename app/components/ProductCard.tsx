import React from 'react';
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';

const ProductCard = () => {
	return (
		<div className={styles.cardContainer}>
			<h1>ProductCard</h1>
			{/* Product detail renderring from server side */}
			<AddToCart />
		</div>
	);
};

export default ProductCard;
