import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='flex gap-3 bg-slate-200 p-3'>
			<Link href='/'>Next.js</Link>
			<Link href='/users'>Users</Link>
			<Link href='/products'>Products</Link>
			<Link href='/admin'>Admin</Link>
		</div>
	);
};

export default Navbar;
