import styled from 'styled-components';

export const GenreContainer = styled.div`
  background-color: ${props => props.color}20;
  padding: 20px;
  border-radius: 8px;
  border-left: 5px solid ${props => props.color};
`;

export const GenreTitle = styled.h2`
  margin-top: 0;
  color: #333;
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;