import { options } from '@/config/tmdbconfig';

import { IMovie, EList } from '@/interfaces/IMoviesList';

import filterMoviesData from '@/helpers/filterMoviesData';

export default async function getMovies(type: EList) {
	const response = await Promise.all([
		fetch(
			`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
			options
		),
		fetch(
			`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=2`,
			options
		),
	]);

	if (!response[0].ok) {
		console.log(response);
		throw new Error('Error fetching mobies');
		// {
		// 	message:
		// 		'Something went wrong with the API request, could not fetch Popular movies. Please visit another list or try again later.',
		// 	statusMessage: 'INTERNAL SERVER ERROR',
		// 	status: 500,
		// }
	} else {
		const pageOne = await response[0].json();
		const pageTwo = await response[1].json();

		const allMoviesData: IMovie[] = [...pageOne.results, ...pageTwo.results];

		const filteredMoviesData = await filterMoviesData<IMovie[]>(allMoviesData);

		return filteredMoviesData;
	}
}
