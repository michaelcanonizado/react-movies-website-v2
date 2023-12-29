import React from 'react';

import getMovies from '@/lib/movies-list/popular';

const Popular = async () => {
	const movies = await getMovies();

	console.log(movies);

	return <div>Popular</div>;
};

export default Popular;
