import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
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

			<table className='table table-zebra table-bordered'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, idx) => {
						return (
							<tr key={idx}>
								<td>{user.company.name}</td>
								<td>{user.email}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default UsersPage;
