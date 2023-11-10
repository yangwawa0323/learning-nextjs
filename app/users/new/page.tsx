import Link from 'next/link';
import React from 'react';

const NewUserPage = () => {
	return (
		<div>
			<h1>New User Page</h1>
			<Link href='/users'>Go back to /users</Link>
		</div>
	);
};

export default NewUserPage;
