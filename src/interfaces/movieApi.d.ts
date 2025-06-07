import { IMovieItem } from './movie';
export interface IGetPopularMoviesRes {
  page: number;
  results: IMovieItem[];
  total_pages: number;
  total_results: number;
}
