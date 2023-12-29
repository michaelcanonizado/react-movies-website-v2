import React from 'react';

import { EList } from '@/interfaces/IMoviesList';

import getMovies from '@/lib/movies-list';

import MoviesList from '@/components/Main/MoviesList/MoviesList';

const TopRated = async () => {
	const movies = await getMovies(EList.topRated);

	return <MoviesList movies={movies} />;
};

export default TopRated;
