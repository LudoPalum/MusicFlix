import styled from 'styled-components';

export const FeaturedContainer = styled.section`
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  h2 {
    margin-top: 0;
    font-size: 1.8rem;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  margin: 15px 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const VideoInfo = styled.div`
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  h3 {
    margin: 0 0 10px;
    font-size: 1.4rem;
  }

  p {
    margin: 0;
    opacity: 0.9;
  }
`;