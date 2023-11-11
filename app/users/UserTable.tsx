import Link from 'next/link';
import React from 'react';
import { User } from './page';
import { sort } from 'fast-sort';

interface Props {
	sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		// cache: 'no-cache',
	});
	const users: User[] = await res.json();
	const sortedUsers = sort(users).asc(
		sortOrder === 'email' ? (user) => user.email : (user) => user.name
	);
	return (
		<table className='table table-zebra table-bordered'>
			<thead>
				<tr>
					<th>
						<Link href='/users?sortOrder=name'>Name</Link>
					</th>
					<th>
						<Link href='/users?sortOrder=email'>Email</Link>
					</th>
				</tr>
			</thead>
			<tbody>
				{sortedUsers.map((user, idx) => {
					return (
						<tr key={idx}>
							<td>
								<Link href={`/users/${user.id}`}>{user.name}</Link>
							</td>
							<td>{user.email}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default UserTable;
