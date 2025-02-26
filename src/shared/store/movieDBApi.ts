import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"
import { BASE_URL } from "@/shared/constants/constants"
import { Actor, Film, Poster, Video } from "@/shared/types/types"

type fetchActorsParams = {
	id: string
	type: string
}

type fetchFilmsParams = {
	category: string
	type: string
	page: number
}

type fetchFilmParams = fetchActorsParams
type fetchVideoParams = fetchActorsParams
type fetchPostersParams = fetchActorsParams

type fetchSearchedFilmsParams = {
	searchedParams: string
	type: string
	page: number
}

type fetchSimilarMoviesParams = fetchActorsParams

export const movieDBApi = createApi({
	reducerPath: "movieDBApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		fetchActors: builder.query<Actor[], fetchActorsParams>({
			query: ({ type, id }) => `${type}/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
		}),
		fetchFilms: builder.query<{ totalpages: number; results: Film[] }, fetchFilmsParams>({
			query: ({ type, category, page }) =>
				`${type}/${category}?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
		}),
		fetchFilm: builder.query<Film, fetchFilmParams>({
			query: ({ type, id }) => `${type}/${id}?api_key=${process.env.API_KEY}&language=en-US`
		}),
		fetchVideo: builder.query<Video[], fetchVideoParams>({
			query: ({ type, id }) => `${type}/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
		}),
		fetchPosters: builder.query<Poster[], fetchPostersParams>({
			query: ({ type, id }) => `${type}/${id}/images?api_key=${process.env.API_KEY}`
		}),
		fetchSearchedFilms: builder.query<
			{ totalpages: number; results: Film[] },
			fetchSearchedFilmsParams
		>({
			query: ({ searchedParams, type, page }) =>
				`search/${type}?query=${searchedParams}&api_key=${process.env.API_KEY}&language=en-US&page=${page}&include_adult=false`
		}),
		fetchSimilarMovies: builder.query<Film[], fetchSimilarMoviesParams>({
			query: ({ type, id }) =>
				`${type}/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
		})
	})
})
