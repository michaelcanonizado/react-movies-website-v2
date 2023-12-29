'use client';

import { copyFileSync } from 'fs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({
	href,
	children,
	className,
}: {
	href: string;
	children: string;
	className?: string;
}) => {
	const pathname = usePathname();

	if (pathname === href) {
		className = `${className} + active`;
	}

	return (
		<Link href={href} className={className}>
			{children}
		</Link>
	);
};

export default NavLink;
