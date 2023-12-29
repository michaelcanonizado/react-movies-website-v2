import React from 'react';

const IconExit = ({ className }: { className?: string }) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path d="M1.63605 15.7782L0.221834 14.364L14.364 0.221825L15.7782 1.63604L1.63605 15.7782Z" />
			<path d="M0.221832 1.63604L1.63605 0.221826L15.7782 14.364L14.364 15.7782L0.221832 1.63604Z" />
		</svg>
	);
};

export default IconExit;
