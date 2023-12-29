import React from 'react';

import getMovies from '@/lib/movies-list/popular';

import MoviesList from '@/components/Main/MoviesList/MoviesList';

const Popular = async () => {
	const movies = await getMovies();

	console.log(movies);

	return <MoviesList movies={movies} />;
};

export default Popular;
