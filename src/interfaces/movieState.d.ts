import { IMovieItem } from './movie';
import { IGetMoviesRes } from './movieApi';
import { ReqStatus } from './api';

export interface IMovieState
  extends Pick<IGetMoviesRes, 'results' | 'page' | 'total_results'> {
  errorMessage: string | null;
}
