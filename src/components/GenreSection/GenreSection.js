import React from 'react';
import PropTypes from 'prop-types';
import VideoCard from '../VideoCard/VideoCard';
import { GenreContainer, GenreTitle, VideosGrid } from './GenreSection.styles';

const GenreSection = ({ genre, videos, onDeleteVideo, onUpdateVideo }) => {
  const genreTitles = {
    pop: 'Pop',
    rock: 'Rock',
    hiphop: 'Hip-Hop',
    eletronica: 'Eletrônica'
  };

   const genreColors = {
    pop: '#ff6b6b',
    rock: '#48dbfb',
    hiphop: '#1dd1a1',
    eletronica: '#feca57'
  };

  return (
    <GenreContainer color={genreColors[genre]}>
      <GenreTitle>{genreTitles[genre]}</GenreTitle>
      <VideosGrid>
        {videos.map(video => (
          <VideoCard 
            key={video.id} 
            video={video} 
            genre={genre}
            onDeleteVideo={onDeleteVideo}
            onUpdateVideo={onUpdateVideo}
          />
        ))}
      </VideosGrid>
    </GenreContainer>
  );
};

GenreSection.propTypes = {
    genre: PropTypes.string.isRequired,
    videos: PropTypes.array.isRequired,
    onDeleteVideo: PropTypes.func.isRequired,
    onUpdateVideo: PropTypes.func.isRequired
};

export default GenreSection;