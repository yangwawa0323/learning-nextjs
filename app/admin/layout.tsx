import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
	return (
		<div className='-m-3 flex flex-row'>
			<aside className='h-[100vh] bg-slate-200 p-5 mr-5'>Admin side bar</aside>
			<div>{children}</div>
		</div>
	);
};

export default AdminLayout;
