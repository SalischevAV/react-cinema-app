/* eslint-disable max-len */
import React from 'react';
import SlideShow from '../slide-show/SliadeShow';

import './MainContent.scss';

// TODO remove this arr
const pictures = [
  {
    url: 'https://img.freepik.com/free-vector/realistic-galaxy-background_23-2148991322.jpg?w=1380&t=st=1664122285~exp=1664122885~hmac=8ffd3b15175c356a5d1330156e3b762162a7cf0e4ef0f664a380d408f6d1c577'
  },
  {
    url: 'https://img.freepik.com/free-photo/beautiful-milky-way-night-sky_53876-139825.jpg?w=1380&t=st=1664121954~exp=1664122554~hmac=73fcd8ffbe534b936dc5b33f6bbc4a57f7cee6fb458648f99ea08dbea78ebbfd'
  },
  {
    url: 'https://img.freepik.com/free-vector/planets-outer-space-with-satellites-meteors-illustration_33099-2352.jpg?w=1380&t=st=1664121991~exp=1664122591~hmac=deefae1d79f28bf934398900c3c57c6d5e8968ccf8168390c0e4acefce64c4c4'
  },
  {
    url: 'https://img.freepik.com/free-photo/dark-surface-with-reflections-smooth-minimal-black-waves-background-blurry-silk-waves-minimal-soft-grayscale-ripples-flow_1217-1722.jpg?w=1800&t=st=1664048983~exp=1664049583~hmac=4477891be4bddf35038e6b72ba5f71025f130e8725ce222ec50dd3eddaa050ef'
  }
];

const MainContent = () => {
  return (
    <div className="main-content">
      <SlideShow images={pictures} auto={true} showArrows={false} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
