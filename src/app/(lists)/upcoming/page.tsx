import React from 'react';

import { EList } from '@/interfaces/IMoviesList';

import getMovies from '@/lib/movies-list';

import MoviesList from '@/components/Main/MoviesList/MoviesList';

const Upcoming = async () => {
	const movies = await getMovies(EList.upcoming);

	return <MoviesList movies={movies} />;
};

export default Upcoming;
