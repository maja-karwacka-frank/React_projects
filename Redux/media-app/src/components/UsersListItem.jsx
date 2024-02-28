import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';

export const UsersListItem = ({ user }) => {
	const [doRemoveUser, isLoading, error] = useThunk(removeUser);

	const handleClick = () => {
		doRemoveUser(user);
	};

	return (
		<div className='mb-2 border rounded bg-pink-400'>
			<div className='flex p-2 justify-between items-center cursor-pointer'>
				<div className='flex justify-between items-center'>
					<Button className='mr-3' loading={isLoading} onClick={handleClick}>
						<GoTrash />
					</Button>
					{error && <div>Error deleting user...</div>}
					{user.name}
				</div>
			</div>
		</div>
	);
};
