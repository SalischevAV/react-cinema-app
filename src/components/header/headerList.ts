import { MovieType, MovieTypeType } from './../../redux/reducers/movieReducer';

interface HeaderList {
  id: number;
  iconClass: string;
  name: MovieType;
  type: MovieTypeType;
}

const HEADER_LIST: HeaderList[] = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: MovieType.NOW_PLAYING,
    type: MovieTypeType.NOW_PLAYING
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: MovieType.POPULAR,
    type: MovieTypeType.POPULAR
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: MovieType.TOP_RATED,
    type: MovieTypeType.TOP_RATED
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: MovieType.UPCOMING,
    type: MovieTypeType.UPCOMING
  }
];

export default HEADER_LIST;
