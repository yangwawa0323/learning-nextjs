import React from 'react';

interface Props {
	params: {
		id: number;
		photoId: number;
	};
}

const UserPhotoPage = ({ params: { id, photoId } }: Props) => {
	return (
		<div>
			User {id} Photo {photoId} Page
		</div>
	);
};

export default UserPhotoPage;
