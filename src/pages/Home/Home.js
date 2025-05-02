import React, { useState, useEffect } from 'react';
import GenreSection from '../../components/GenreSection/GenreSection';
import FeaturedVideo from '../../components/FeaturedVideo/FeaturedVideo'; 
import { HomeContainer } from './Home.styles';

const Home = ({ videos, onDeleteVideo, onUpdateVideo }) => {
  const [featuredVideo, setFeaturedVideo] = useState(null);

  useEffect(() => {
    const allVideos = Object.values(videos).flat();
    if (allVideos.length > 0) {
      const randomIndex = Math.floor(Math.random() * allVideos.length);
      setFeaturedVideo(allVideos[randomIndex]);
    }
  }, [videos]);

  const genres = ['pop', 'rock', 'hiphop', 'eletronica'];

  return (
    <HomeContainer>
      {featuredVideo && <FeaturedVideo video={featuredVideo} />}
      {genres.map(genre => (
        <GenreSection 
          key={genre} 
          genre={genre} 
          videos={videos[genre] || []}
          onDeleteVideo={onDeleteVideo}
          onUpdateVideo={onUpdateVideo}
        />
      ))}
    </HomeContainer>
  );
};

export default Home;