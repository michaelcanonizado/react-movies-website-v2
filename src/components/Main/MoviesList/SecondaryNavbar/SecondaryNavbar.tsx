import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';
import NavLink from '@/components/UI/NavLink';

const navLinkClasses =
	'h-[48px] px-6 grid place-items-center hover:bg-secondary-300 hover:cursor-pointer tracking-wide w-fit whitespace-nowrap secondary-navbar';

export default function SecondaryNavbar() {
	// Target the currently active link to be able to transition to it into view when secondary navbar becomes scrollable on smaller screen sizes
	// useEffect(() => {
	// 	const currActiveLink = document.querySelector('ul a.active');

	// 	currActiveLink.scrollIntoView({
	// 		behavior: 'smooth',
	// 		inline: 'nearest',
	// 		block: 'end',
	// 	});
	// }, []);

	const routes: Array<{ title: string; path: string }> = [
		{ title: 'POPULAR', path: '/popular' },
		{ title: 'TOP RATED', path: '/top-rated' },
		{ title: 'NOW PLAYING', path: '/now-playing' },
		{ title: 'UPCOMING', path: '/upcoming' },
	];

	return (
		<ul
			className={`pt-6 flex justify-start font-[900] text-sm overflow-x-scroll hide-scrollbar`}
		>
			{routes.map((route, index) => {
				return (
					<NavLink
						href={route.path}
						key={index}
						className={navLinkClasses}
					>
						{route.title}
					</NavLink>
				);
			})}
			{/* <Link href="/popular" className={navLinkClasses}>
				POPULAR
			</Link>
			<Link href="/top-rated" className={navLinkClasses}>
				TOP RATED
			</Link>
			<Link href="/now-playing" className={navLinkClasses}>
				NOW PLAYING
			</Link>
			<Link href="/upcoming" className={navLinkClasses}>
				UPCOMING
			</Link> */}
		</ul>
	);
}
