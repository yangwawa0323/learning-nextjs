'use client';
import React from 'react';

const AddToCart = () => {
	return (
		<div>
			<button
				className='btn btn-error'
				onClick={() => {
					console.log('clicked');
				}}
			>
				Add to cart
			</button>
		</div>
	);
};

export default AddToCart;
