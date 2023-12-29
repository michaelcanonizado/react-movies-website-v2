import getMovieDetails from '@/lib/movie-details';
import React from 'react';

const MovieDetails = async ({ params }: { params: { movieId: string } }) => {
	const movieDetails = await getMovieDetails(params.movieId);
	console.log(movieDetails);
	console.log('Done');
	return <div>Movie Details</div>;
};

export default MovieDetails;
