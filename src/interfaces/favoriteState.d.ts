import { IMovieItem } from './movie';

export interface IShortMovieItem {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

export interface IFavoriteState {
  favoriteList: IShortMovieItem[];
}
