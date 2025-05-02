import React from 'react';
import { FeaturedContainer, VideoWrapper, VideoInfo } from './FeaturedVideo.styles';

const FeaturedVideo = ({ video }) => {
  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(video.url);

  return (
    <FeaturedContainer>
      <h2>🎬 Destaque do Dia</h2>
      
      {videoId ? (
        <VideoWrapper>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.titulo}
          />
        </VideoWrapper>
      ) : (
        <p>Não foi possível carregar o vídeo</p>
      )}
      
      <VideoInfo>
        <h3>{video.titulo}</h3>
        <p>{video.sobre}</p>
      </VideoInfo>
      <button onClick={() => window.location.reload()}>🔀 Novo Destaque</button>
    </FeaturedContainer>
  );
};

export default FeaturedVideo;