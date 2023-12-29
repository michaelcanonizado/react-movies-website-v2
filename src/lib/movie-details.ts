import { options } from '@/config/tmdbconfig';

import {
	IMovieDetials,
	IMovieDetialsCredits,
	IMovieDetialsSimilar,
	IMovieDetialsVideos,
} from '@/interfaces/IMovieDetails';

import filterMovieData from '@/helpers/filterMovieData';

export default async function getMovieDetails(movieId: string) {
	const response = await Promise.all([
		fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options),
		fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options),
		fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar`, options),
		fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options),
	]);

	if (!response[0].ok || !response[1].ok || !response[2].ok || !response[3].ok) {
		console.log(response);
		console.log('SOMETHING WENT WRONG');
		console.log(response);

		throw new Error('Error fetching mobies');
		// {
		// 	message:
		// 		'Something went wrong with the API request, could not fetch Popular movies. Please visit another list or try again later.',
		// 	statusMessage: 'BAD REQUEST',
		//     status: 400}
	} else {
		const movieDetails = (await response[0].json()) as IMovieDetials;
		const movieCredits = (await response[1].json()) as IMovieDetialsCredits;
		const movieSimilars = (await response[2].json()) as IMovieDetialsSimilar;
		const movieVideos = (await response[3].json()) as IMovieDetialsVideos;

		const filteredMovieData = await filterMovieData(
			movieDetails,
			movieCredits,
			movieSimilars,
			movieVideos
		);

		// console.log(filteredMovieData);
		return filteredMovieData;
	}
}
