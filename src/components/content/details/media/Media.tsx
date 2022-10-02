import React from 'react';
import { MediaProps } from './Media.props';
import { IMAGE_URL } from '../../../../services/movies.service';

import './Media.scss';

const Media = ({ images, videos, ...props }: MediaProps) => {
  return (
    <>
      <div className="media" {...props}>
        <div>
          <div className="media-title">Watch Trailer</div>
          <div className="media-videos">
            {videos.results.map((video) => (
              <div className="video" key={video.key}>
                <iframe
                  title={video.name}
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  src={`https://www.youtube.com/embed/${video.id}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="media-title">Photos ({images.posters.length})</div>
          <div className="media-images">
            {images.posters.map((image) => (
              <div
                key={image.file_path}
                className="image-cell"
                style={{
                  backgroundImage: `url(${IMAGE_URL}${image.file_path})`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
