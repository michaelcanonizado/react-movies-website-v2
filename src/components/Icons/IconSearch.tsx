import React from 'react';

const IconSearch = ({ className }: { className?: string }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			fill="none"
		>
			<path
				d="M14.9268 15.0401L22.3867 22.5M17.28 9.4401C17.28 13.77 13.7699 17.2801 9.43998 17.2801C5.11006 17.2801 1.59998 13.77 1.59998 9.4401C1.59998 5.11019 5.11006 1.6001 9.43998 1.6001C13.7699 1.6001 17.28 5.11019 17.28 9.4401Z"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default IconSearch;
