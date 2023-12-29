import React from 'react';

import { EList } from '@/interfaces/IMoviesList';

import getMovies from '@/lib/movies-list';

import MoviesList from '@/components/Main/MoviesList/MoviesList';

const NowPlaying = async () => {
	const movies = await getMovies(EList.nowPlaying);

	return <MoviesList movies={movies} />;
};

export default NowPlaying;
