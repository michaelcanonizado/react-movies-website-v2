import { IMovieCard } from './IMovieCard';

export interface IMovieDetailsFiltered {
	id: number;
	title: string;
	rating: string;
	image: string | null;
	backdrop: string | null;
	releaseDate: string;
	language: string;
	description: string;
	genres: Genre[];
	runtime: number;
	status: string;
	tagline: string | null;
	similarMovies: IMovieCard[] | null;
	trailer: {
		youtubeLink: string;
		youtubeId: string;
	} | null;
	credits: { casts: Cast[]; directors: Cast[]; writers: Cast[] } | null;
}

export interface IMovieDetials {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string | null;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string | null;
	overview: string;
	popularity: number;
	poster_path: string | null;
	release_date: string;
	revenue: number;
	runtime: number;
	status: string;
	tagline: string | null;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	[key: string]: any;
}

export interface IMovieDetialsCredits {
	id: number;
	cast: Cast[];
	crew: Cast[];
	[key: string]: any;
}

export interface IMovieDetialsSimilar {
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
	[key: string]: any;
}

export interface IMovieDetialsVideos {
	id: number;
	results: Video[];
	[key: string]: any;
}

export interface Video {
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
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
	poster_path: string | null;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	[key: string]: any;
}

export interface Cast {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: null | string;
	cast_id?: number;
	character?: string;
	credit_id: string;
	order?: number;
	department?: string;
	job?: string;
	[key: string]: any;
}

export interface BelongsToCollection {
	id: number;
	name: string;
	poster_path: string | null;
	backdrop_path: string | null;
	[key: string]: any;
}

export interface Genre {
	id: number;
	name: string;
	[key: string]: any;
}
