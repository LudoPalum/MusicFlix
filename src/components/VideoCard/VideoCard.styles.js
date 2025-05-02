import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  padding: 2px; /* Espaço para a borda */
  
  /* Moldura completa */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid ${({ $genreColor }) => $genreColor};
    border-radius: 8px;
    z-index: 1;
    pointer-events: none; /* Permite interação com o conteúdo */
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      border-width: 3px; /* Borda mais grossa no hover */
    }
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  background: white;
  border-radius: 6px; /* Ajuste para o border-radius interno */
  overflow: hidden;
  height: 100%;
`;


export const MiniContainer = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  padding: 15px;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.1rem;
  color: #333;
`;

export const CardDescription = styled.p`
  margin: 0 0 15px;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  
  button, a {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: ${({ $delete, $primary }) => 
    $delete ? '#f44336' : 
    $primary ? '#4CAF50' : 
    '#2196F3'};
  font-size: 1rem;

  &:hover {
    background-color: ${({ $delete, $primary }) => 
      $delete ? '#f4433620' : 
      $primary ? '#4CAF5020' : 
      '#2196F320'};
    transform: scale(1.1);
  }

  & > svg {
    display: block;
  }
`;

export const PlayButton = styled.a`
  background-color: #1a1a1a;
  color: white;
  padding: 8px 10px; /* Ajuste para ficar mais quadrado */
  border-radius: 4px; /* Cantos menos arredondados */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 0;
  
  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  & > svg {
    display: block;
    margin: 0 auto;
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #2196F3;
  }
`;