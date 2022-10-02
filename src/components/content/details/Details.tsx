import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../../../redux/actions/movies';
import { LoadingState } from '../../../redux/reducers/loadingReducer';
import { MovieState } from '../../../redux/reducers/movieReducer';
import { RootState } from '../../../redux/store';
import Spinner from '../../spinner/Spinner';
import Crew from './crew/Crew';
import Rating from '../rating/Rating';
import { DetailsProps } from './Details.props';
import './Details.scss';
import Media from './media/Media';
import Overview from './overview/Overview';
import Reviews from './reviews/Reviews';
import Tabs from './tabs/Tabs';
import TabWrapper from './tabWrapper/TabWrapper';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../../../services/movies.service';
import { MovieDetails } from '../../../interfaces/payloads/MovieDetail';
import { MovieCredits } from '../../../interfaces/payloads/MovieCredits';
import { MovieImages } from '../../../interfaces/payloads/MovieImages';
import { MovieVideos } from '../../../interfaces/payloads/MovieVideos';
import { MovieReviews } from '../../../interfaces/payloads/MovieReviews';

const Details = (props: DetailsProps) => {
  const dispatch = useDispatch();
  const { movie } = useSelector<RootState, MovieState>((state) => state.movies);
  const { loading } = useSelector<RootState, LoadingState>((state) => state.loading);
  const { id } = useParams();

  const [details, setDetails] = useState<MovieDetails>();
  const [credits, setCredits] = useState<MovieCredits>();
  const [images, setImages] = useState<MovieImages>();
  const [videos, setVideos] = useState<MovieVideos>();
  const [reviews, setReviews] = useState<MovieReviews>();

  useEffect(() => {
    if (id && movie.length === 0) {
      getMovieDetails(id)(dispatch);
    }
    if (movie) {
      setDetails(movie[0] as MovieDetails);
      setCredits(movie[1] as MovieCredits);
      setImages(movie[2] as MovieImages);
      setVideos(movie[3] as MovieVideos);
      setReviews(movie[4] as MovieReviews);
    }
  }, [dispatch, id, movie, movie.length]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {details && credits && images && videos && reviews && (
        <div {...props}>
          <div className="movie-container">
            <div
              className="movie-bg"
              style={{
                backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})`
              }}
            >
              <div className="movie-overlay"></div>
              <div className="movie-details">
                <div className="movie-image">
                  <img src={`${IMAGE_URL}${details.poster_path}`} alt="" />
                </div>
                <div className="movie-body">
                  <div className="movie-overview">
                    <div className="title">
                      {details.title} <span>{details.release_date}</span>
                    </div>
                    <div className="movie-genres">
                      <ul className="genres">
                        {details.genres.map((genre) => (
                          <li key={genre.id}>{genre.name}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rating">
                      <Rating
                        rating={details.vote_average}
                        totalStar={10}
                        className={'rating-stars'}
                      />
                      &nbsp;
                      <span>{details.vote_average}</span> <p>{details.vote_count} reviews</p>
                    </div>
                    <Tabs>
                      <TabWrapper label="overview">
                        <Overview details={details} credits={credits} />
                      </TabWrapper>
                      <TabWrapper label="crew">
                        <Crew credits={credits} />
                      </TabWrapper>
                      <TabWrapper label="media">
                        <Media videos={videos} images={images} />
                      </TabWrapper>
                      <TabWrapper label="reviews">
                        <Reviews reviews={reviews} />
                      </TabWrapper>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
