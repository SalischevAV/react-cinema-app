export enum RequestTypes {
  now_playing = 'now_playing',
  popular = 'popular',
  latest = 'latest',
  top_rated = 'top_rated',
  upcoming = 'upcoming'
}

export interface MovieRequest {
  type: RequestTypes;
  pageNumber: number;
}
