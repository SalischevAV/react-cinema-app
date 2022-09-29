import { Results } from './Result';
export interface Dates {
  maximum: string;
  minimum: string;
}

export interface NowPlaying extends Results {
  dates: Dates;
}
