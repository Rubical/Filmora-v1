export interface Film {
	id: number
	backdrop_path: string
	budget: number
	first_air_date: string
	genres: { id: number; name: string }[]
	genre_ids: number[]
	homepage: string
	name: string
	original_title: string
	overview: string
	poster_path: string
	release_date: string
	vote_average: number
	status: string
	revenue: number
	runtime: number
	last_episode_to_air: Episode
	next_episode_to_air: Episode
}

export type Episode = {
	air_date: string
	episode_number: number
	name: string
}

export interface FilmInfo {
	film: Film
	type: string
}

export interface Poster {
	file_path: string
	iso_639_1: string
}

export interface Actor {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string
	character: string
	credit_id: string
	order: number
}

export interface Video {
	name: string
	key: string
	type: string
	id: string
}
