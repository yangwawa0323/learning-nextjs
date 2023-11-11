import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';

export interface User {
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

interface Props {
	searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder = 'email' } }: Props) => {
	return (
		<div>
			<h1>Users Page</h1>
			<Link
				href='/users/new'
				className='btn btn-primary'
			>
				New user
			</Link>
			<UserTable sortOrder={sortOrder} />
		</div>
	);
};

export default UsersPage;
