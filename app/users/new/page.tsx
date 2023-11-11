'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const NewUserPage = () => {
	const history = useRouter();
	return (
		<div>
			<h1>New User Page</h1>
			<div className='flex gap-4'>
				<button
					onClick={() => {
						history.push('/users');
					}}
					className='btn btn-secondary'
				>
					Create
				</button>

				<button
					onClick={() => {
						history.back();
					}}
					className='btn btn-neutral'
				>
					Back
				</button>
			</div>
		</div>
	);
};

export default NewUserPage;
