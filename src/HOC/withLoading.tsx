import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { DetailsProps } from '../components/content/details/Details.props';
import { LoadingState } from '../redux/reducers/loadingReducer';
import { RootState } from '../redux/store';

export const withLoading = <T extends Record<string, unknown> & DetailsProps>(
  Component: FunctionComponent<T>
) => {
  return function WithLoadingComponent(props: T): JSX.Element {
    const { loading } = useSelector<RootState, LoadingState>((state) => state.loading);

    return <Component {...props} loading={loading} />;
  };
};
