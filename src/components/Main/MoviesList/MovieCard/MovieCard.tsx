import React, { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { IMovieCard } from '@/interfaces/IMovieCard';

import IconStarFilled from '@/components/Icons/IconStarFill';
import IconStarOutline from '@/components/Icons/IconStarOutline';
import IconDot from '@/components/Icons/IconDot';
import IconPlus from '@/components/Icons/IconPlus';

const MovieCard: FC<IMovieCard> = ({
	id,
	rating,
	title,
	image,
	releaseDate,
	language,
}) => {
	const dateObject = new Date(releaseDate);
	const releaseYear = dateObject.getFullYear();

	// sm:h-full
	// md:h-fit
	// md:max-h-[353px]
	// lg:h-[225px]
	// xl:h-[278px]

	return (
		<div className={`bg-secondary-200 rounded-md overflow-hidden`}>
			<Link href={`/movie/${id}`}>
				<div
					className="
					aspect-poster 
				w-full hover:cursor-pointer hover:brightness-90 relative"
				>
					<Image
						fill
						src={image}
						alt={title}
						className="w-full object-cover"
					/>
				</div>
			</Link>
			<div className="mt-[18px] mb-[10px] mx-[10px] flex flex-col">
				<div className="flex">
					<div className="flex">
						<span
							className="
						mt-[4px] 
						xl:mt-[3px]"
						>
							<IconStarFilled className="text-accent-100" />
						</span>
						<span className="ml-[6px] text-secondary-400">{rating}</span>
					</div>
					<div
						className="grid h-[28px] w-[40px] px-[12px] ml-[8px] 
					
					pt-[6px]
					xl:pt-[3px] 
					
					hover:cursor-pointer hover:bg-secondary-100 rounded"
					>
						<IconStarOutline className="stroke-accent-200" />
					</div>
				</div>

				<Link
					href={`/movie/${id}`}
					className="text-ellipsis overflow-hidden movie-card_line-clamp 
					
					h-[44px]
				
					hover:cursor-pointer group 

					leading-[1.3rem]
				"
				>
					<span className="font-normal tracking-[.03125em]  group-hover:underline">
						{title}
					</span>
				</Link>

				<div className="mt-[12px] flex self-center font-light text-xs tracking-wider">
					<span className="">{releaseYear}</span>
					<span className="font-black mx-[6px] grid place-items-center">
						<IconDot className="" />
					</span>
					<span className="">{language.toUpperCase()}</span>
					<span className="font-black mx-[6px] grid place-items-center">
						<IconDot className="" />
					</span>
					<span className="">Movie</span>
				</div>

				<div className="mt-[12px] py-[9px] rounded grid place-items-center bg-secondary-100 hover:cursor-pointer hover:bg-[#30353C] transition-colors duration-150 ease-in-out">
					<a className="text-accent-200 flex" href="/popular">
						<span
							className="grid place-items-center 
						
						w-[12px]
						xl:w-[16px]"
						>
							<IconPlus className="w-full h-full text-accent-200" />
						</span>
						<span
							className="font-medium tracking-wider

						text-sm
						lg:text-sm 
						xl:text-base

						mb-[-2px]

						ml-[6px]
						lg:mt-[2px]
						xl:ml-[9px]"
						>
							Watchlist
						</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
