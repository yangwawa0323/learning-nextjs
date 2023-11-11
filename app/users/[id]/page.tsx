import React from 'react';
import { User } from '../page';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
	params: {
		id: number;
	};
}

// React props , nextjs dynamic [id] => props : { params: { id: 3 } }
const UserDetailPage = async ({ params: { id } }: Props) => {
	if (id > 10) notFound();
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const user: User = await res.json();
	return (
		<>
			<div className='p-11 mockup-window border border-base-300'>
				<div>
					<strong>Name:</strong> {user.name}
				</div>
				<div>
					<strong>Username:</strong> {user.username}
				</div>
				<div>
					<strong>Company:</strong> {user.company.name}
				</div>
				<div>
					<strong>Email:</strong> {user.email}
				</div>
			</div>
			<Link href='/users'>Go back to user list</Link>
		</>
	);
};

export default UserDetailPage;
