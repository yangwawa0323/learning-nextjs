import Link from 'next/link';
import React from 'react';

const UsersPage = () => {
	return (
		<div>
			<h1>Users Page</h1>
			<Link href='/users/new'> New user</Link>
		</div>
	);
};

export default UsersPage;
