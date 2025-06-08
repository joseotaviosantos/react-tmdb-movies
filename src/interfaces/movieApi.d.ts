import { IMovieItem, IMovieDetailItem } from './movie';
export interface IGetPopularMoviesRes {
  page: number;
  results: IMovieItem[];
  total_pages: number;
  total_results: number;
}

export interface IGetMovieDetailRes extends IMovieDetailItem {}
