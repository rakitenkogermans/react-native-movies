import {IMovie} from './IMovie';
import {IGenre} from './IGenre';

export type MainStackParamList = {
  Home: undefined;
  Genre: {
    genre: IGenre;
  };
  Movie: {
    movie: IMovie;
  };
};

export type UserStackParamList = {
  User: undefined;
  Movie: {
    movie: IMovie;
  };
};
