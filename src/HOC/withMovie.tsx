import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { DetailsProps } from '../components/content/details/Details.props';
import { MovieState } from '../redux/reducers/movieReducer';
import { RootState } from '../redux/store';

export const withMovie = <T extends Record<string, unknown> & DetailsProps>(
  Component: FunctionComponent<T>
) => {
  return function WithMovieComponent(props: T): JSX.Element {
    const { movie } = useSelector<RootState, MovieState>((state) => state.movies);

    return <Component {...props} movie={movie} />;
  };
};
