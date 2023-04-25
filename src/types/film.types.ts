export interface IFilm {
  id: number;
  backdrop_path: string;
  budget: number;
  first_air_date: string;
  genres: TypeGenre[];
  genre_ids: number[];
  homepage: string;
  name: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export type TypeGenre = { id: number; name: string };
