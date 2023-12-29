import React from 'react';

import { IClassName } from '@/interfaces/IClassName';

const IconPlus = ({ className }: IClassName) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			className={className}
		>
			<path d="M7 0H9V16H7V0Z" />
			<path d="M8.74227e-08 9L0 7L16 7V9L8.74227e-08 9Z" />
		</svg>
	);
};

export default IconPlus;
