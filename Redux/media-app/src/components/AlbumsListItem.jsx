import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { ExpandablePanel } from './ExpandablePanel';
import { useRemoveAlbumMutation } from '../store';
import { PhotosList } from './PhotosList';

export const AlbumsListItem = ({ album }) => {
	const [removeAlbum, results] = useRemoveAlbumMutation();

	const handleRemoveAlbum = () => {
		removeAlbum(album);
	};

	const header = (
		<>
			<Button
				className='mr-2'
				loading={results.isLoading}
				onClick={handleRemoveAlbum}>
				<GoTrash />
			</Button>
			{album.title}
		</>
	);

	return (
		<ExpandablePanel header={header}>
			<PhotosList album={album} />
		</ExpandablePanel>
	);
};
