import React from 'react';
import { MediaProps } from './Media.props';

import './Media.scss';

const Media = (props: MediaProps) => {
  return (
    <>
      <div className="media" {...props}>
        <div>
          <div className="media-title">Watch Trailer</div>
          <div className="media-videos">
            <div className="video">
              <iframe
                title="Avengers"
                style={{
                  width: '100%',
                  height: '100%'
                }}
                src="https://www.youtube.com/embed/TcMBFSGVi1c"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div className="media-title">Photos (10)</div>
          <div className="media-images">
            <div
              className="image-cell"
              style={{
                backgroundImage:
                  // eslint-disable-next-line max-len
                  'url(https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
