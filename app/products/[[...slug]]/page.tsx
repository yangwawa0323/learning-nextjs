import React from 'react';

interface Props {
	params: { slug: string[] };
	searchParams: { sortOrder: string };
}

const ProductsPage = (props: Props) => {
	return (
		<div>
			<h1>Products page</h1>
			<p>{JSON.stringify(props)}</p>
		</div>
	);
};

export default ProductsPage;
