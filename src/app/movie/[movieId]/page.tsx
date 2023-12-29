import getMovieDetails from '@/lib/movie-details';
import React from 'react';

const MovieDetails = ({ params }: { params: { movieId: string } }) => {
	const movieDetails = getMovieDetails(params.movieId);

	return <div>Movie Details</div>;
};

export default MovieDetails;
