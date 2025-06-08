import { IMovieItem } from './movie';

export interface ShortMovieItem {
  id: number;
  poster_path: string;
  title: string;
  vote_average: string;
}

export interface IFavoriteState {
  favoriteList: ShortMovieItem[];
}
