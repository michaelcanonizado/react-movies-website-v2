import React from 'react';

import SecondaryNavbar from '@/components/Main/MoviesList/SecondaryNavbar/SecondaryNavbar';

const navLinkClasses =
	'h-[48px] px-6 grid place-items-center hover:bg-secondary-300 hover:cursor-pointer tracking-wide w-fit whitespace-nowrap';

const MoviesListLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={`px-4 m-auto lg:max-w-[1024px] xl:max-w-[1280px]`}>
			<div className="pt-6">
				<div className="pb-6 leading-[2.5rem] font-bold text-[32px] md:leading-[3.125rem] md:font-normal md:text-[48px]">
					<span className="whitespace-[wrap]">
						What to Watch - React Movies
					</span>
				</div>
				<SecondaryNavbar />
				{children}
			</div>
		</div>
	);
};

export default MoviesListLayout;
