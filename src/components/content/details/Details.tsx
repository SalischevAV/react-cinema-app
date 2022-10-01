/* eslint-disable max-len */
import React from 'react';
import Crew from '../crew/Crew';
import Rating from '../rating/Rating';
import { DetailsProps } from './Details.props';
import './Details.scss';
import Media from './media/Media';
import Overview from './overview/Overview';
import Reviews from './reviews/Reviews';
import Tabs from './tabs/Tabs';
import TabWrapper from './tabWrapper/TabWrapper';

const Details = (props: DetailsProps) => {
  return (
    <div {...props}>
      <div className="movie-container">
        <div
          className="movie-bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80)'
          }}
        >
          <div className="movie-overlay"></div>
          <div className="movie-details">
            <div className="movie-image">
              <img
                src="https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                alt=""
              />
            </div>
            <div className="movie-body">
              <div className="movie-overview">
                <div className="title">
                  Avengers <span>2020-12-03</span>
                </div>
                <div className="movie-genres">
                  <ul className="genres">
                    <li>Action</li>
                    <li>Comedy</li>
                    <li>Sci-fi</li>
                  </ul>
                </div>
                <div className="rating">
                  <Rating rating={8} totalStar={10} className={'rating-stars'} />
                  &nbsp;
                  <span>6.5</span> <p>(2000) reviews</p>
                </div>
                <Tabs>
                  <TabWrapper label="overview">
                    <Overview />
                  </TabWrapper>
                  <TabWrapper label="crew">
                    <Crew />
                  </TabWrapper>
                  <TabWrapper label="media">
                    <Media />
                  </TabWrapper>
                  <TabWrapper label="reviews">
                    <Reviews />
                  </TabWrapper>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
