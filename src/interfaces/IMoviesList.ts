export enum EList {
	popular = 'popular',
	topRated = 'top_rated',
	nowPlaying = 'now_playing',
	upcoming = 'upcoming',
}

export interface IMoviesList {
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
	[key: string]: any;
}

export interface IMovie {
	adult: boolean;
	backdrop_path: null | string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	[key: string]: any;
}
