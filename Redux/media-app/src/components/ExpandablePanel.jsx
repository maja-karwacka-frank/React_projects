import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export const ExpandablePanel = ({ header, children }) => {
	const [expanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div className='mb-2 border rounded bg-pink-400'>
			<div className='flex p-2 justify-between items-center'>
				<div className='flex justify-between items-center'>{header}</div>
				<div onClick={handleClick} className='cursor-pointer'>
					{expanded ? <GoChevronDown /> : <GoChevronLeft />}
				</div>
			</div>
			{expanded && <div className='p-2 border-t'>{children}</div>}
		</div>
	);
};
