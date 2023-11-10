import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	websitr: string;
	company: {
		name: string;
	};
}

const UsersPage = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		cache: 'no-cache',
	});
	const users: User[] = await res.json();
	return (
		<div>
			<h1>Users Page</h1>
			<Link href='/users/new'> New user</Link>
			<p>{new Date().toLocaleTimeString()}</p>
			<ul>
				{users.map((user, idx) => {
					return <li key={idx}>{user.company.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default UsersPage;
