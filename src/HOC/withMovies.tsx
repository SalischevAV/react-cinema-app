import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { MainProps } from '../components/main/Main.props';
import { MovieState } from '../redux/reducers/movieReducer';
import { RootState } from '../redux/store';

export const withMovies = <T extends Record<string, unknown> & MainProps>(
  Component: FunctionComponent<T>
) => {
  return function WithMovieComponent(props: T): JSX.Element {
    const movies = useSelector<RootState, MovieState>((state) => state.movies);

    return <Component {...props} movies={movies} />;
  };
};
