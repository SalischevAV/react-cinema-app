/* eslint-disable max-len */
import React, { useCallback, useState } from 'react';
import { PrevNext } from '../../../interfaces';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/SliadeShow';

import './MainContent.scss';

// TODO remove this arr
const pictures = [
  {
    url: 'https://img.freepik.com/free-vector/realistic-galaxy-background_23-2148991322.jpg?w=1380&t=st=1664122285~exp=1664122885~hmac=8ffd3b15175c356a5d1330156e3b762162a7cf0e4ef0f664a380d408f6d1c577',
    rating: 7.5
  },
  {
    url: 'https://img.freepik.com/free-photo/beautiful-milky-way-night-sky_53876-139825.jpg?w=1380&t=st=1664121954~exp=1664122554~hmac=73fcd8ffbe534b936dc5b33f6bbc4a57f7cee6fb458648f99ea08dbea78ebbfd',
    rating: 7.7
  },
  {
    url: 'https://img.freepik.com/free-vector/planets-outer-space-with-satellites-meteors-illustration_33099-2352.jpg?w=1380&t=st=1664121991~exp=1664122591~hmac=deefae1d79f28bf934398900c3c57c6d5e8968ccf8168390c0e4acefce64c4c4',
    rating: 9.2
  },
  {
    url: 'https://img.freepik.com/free-photo/dark-surface-with-reflections-smooth-minimal-black-waves-background-blurry-silk-waves-minimal-soft-grayscale-ripples-flow_1217-1722.jpg?w=1800&t=st=1664048983~exp=1664049583~hmac=4477891be4bddf35038e6b72ba5f71025f130e8725ce222ec50dd3eddaa050ef',
    rating: 7.5
  },
  {
    url: 'https://img.freepik.com/premium-photo/vintage-red-tram_548832-16981.jpg?w=1380',
    rating: 7.5
  },
  {
    url: 'https://img.freepik.com/free-photo/empty-sea-beach-background_1339-4265.jpg?w=1380&t=st=1664191658~exp=1664192258~hmac=4965e9303708ba227b8a09b0ca457643ee47d1ec550b1c937d8b22b0fd2c4fd8',
    rating: 4.3
  },
  {
    url: 'https://img.freepik.com/free-photo/lime-lemon-orange-slices_1339-4600.jpg?w=1380&t=st=1664191681~exp=1664192281~hmac=1548580a5afe5669116e13b69ef05b9f6d2e46cd771608e10ec26250619262cc',
    rating: 6.1
  },
  {
    url: 'https://img.freepik.com/free-photo/portrait-young-sportive-girl-training-with-dumbbells-isolated-blue-background-neon_155003-45614.jpg?w=1380&t=st=1664192379~exp=1664192979~hmac=e748a0a687c23f061e54458989c0b39749ad725fb9f8a707744fac811af07727',
    rating: 7.5
  },
  {
    url: 'https://img.freepik.com/free-photo/people-concert-with-smoke-overlay-texture_53876-126856.jpg?w=1380&t=st=1664192423~exp=1664193023~hmac=9155a93dc639bf193c1fe7153131669bab62c39d91935d4ec15df8ca50b56674',
    rating: 7.5
  },
  {
    url: 'https://img.freepik.com/free-photo/close-up-nightlife-drinks-bar_23-2149088558.jpg?w=1380&t=st=1664192447~exp=1664193047~hmac=3e662aaa9b47876ccbea4974a3f402da8f872b1fc2d553589ec69e1dabad90bb',
    rating: 7.5
  },
  {
    url: 'https://img.freepik.com/premium-photo/various-ice-cream-flavor-ball-set-up_35641-3024.jpg?w=1380',
    rating: 7.5
  },
  {
    url: 'https://img.freepik.com/premium-photo/roasted-coffee-beans-with-scoops-setup-white-concrete-background_35641-4446.jpg?w=1380',
    rating: 3.2
  }
];

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = useCallback(
    (type: PrevNext) => {
      if (type === 'prev' && currentPage >= 1) {
        setCurrentPage((prev) => prev - 1);
      } else {
        setCurrentPage((prev) => prev + 1);
      }
    },
    [currentPage]
  );

  return (
    <div className="main-content">
      <SlideShow images={pictures} auto={true} showArrows={false} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} paginate={paginate} totalPages={5} />
        </div>
      </div>
      <Grid images={pictures} />
    </div>
  );
};

export default MainContent;
