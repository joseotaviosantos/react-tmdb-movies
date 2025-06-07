import { IMovieItem } from './movie';
import { IGetPopularMoviesRes } from './movieApi';
import { ReqStatus } from './api';

export interface IMovieState
  extends Pick<IGetPopularMoviesRes, 'results' | 'page'> {
  errorMessage: string | null;
}
