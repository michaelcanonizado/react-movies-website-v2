import React from 'react';

import { EList } from '@/interfaces/IMoviesList';

import getMovies from '@/lib/movies-list';

import MoviesList from '@/components/Main/MoviesList/MoviesList';

const Popular = async () => {
	const movies = await getMovies(EList.popular);

	return <MoviesList movies={movies} />;
};

export default Popular;
