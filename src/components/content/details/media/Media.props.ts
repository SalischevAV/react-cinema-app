import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { MovieImages } from '../../../../interfaces/payloads/MovieImages';
import { MovieVideos } from '../../../../interfaces/payloads/MovieVideos';

export interface MediaProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: MovieImages;
  videos: MovieVideos;
}
