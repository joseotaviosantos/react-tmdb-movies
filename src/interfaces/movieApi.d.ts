import { IMovieItem, IMovieDetailItem } from './movie';
export interface IGetMoviesRes {
  page: number;
  results: IMovieItem[];
  total_pages: number;
  total_results: number;
}

export interface IGetMovieDetailRes extends IMovieDetailItem {}
