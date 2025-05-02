import React, { useState } from 'react';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { BsPlayFill } from 'react-icons/bs';
import { 
  CardContainer, 
  MiniContainer,
  CardContent,
  CardImage, 
  CardTitle, 
  CardDescription,
  CardActions,
  IconButton,
  PlayButton,
  EditForm,
  FormInput
} from './VideoCard.styles';

const genreColors = {
  pop: '#ff6b6b',
  rock: '#48dbfb',
  hiphop: '#1dd1a1',
  eletronica: '#feca57'
};

const VideoCard = ({ video, genre, onDeleteVideo, onUpdateVideo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedVideo, setEditedVideo] = useState(video);

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este vídeo?')) {
      onDeleteVideo(genre, video.id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedVideo(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateVideo(genre, video.id, editedVideo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedVideo(video);
  };

  return (
    <CardContainer $genreColor={genreColors[genre]}>
      {isEditing ? (
        <EditForm onSubmit={handleSave}>
          <FormInput
            type="text"
            name="titulo"
            value={editedVideo.titulo}
            onChange={handleChange}
            required
          />
          <FormInput
            type="url"
            name="url"
            value={editedVideo.url}
            onChange={handleChange}
            required
          />
          <FormInput
            type="url"
            name="imagem"
            value={editedVideo.imagem}
            onChange={handleChange}
            required
          />
          <FormInput
            as="textarea"
            name="sobre"
            value={editedVideo.sobre}
            onChange={handleChange}
            required
          />
          <CardActions>
            <IconButton type="submit" title="Salvar" $primary>
              <FaSave />
            </IconButton>
            <IconButton type="button" onClick={handleCancel} title="Cancelar">
              <FaTimes />
            </IconButton>
          </CardActions>
        </EditForm>
      ) : (
        <>
          <MiniContainer>
          <CardContent>
          <CardImage src={video.imagem} alt={video.titulo} />
          <CardTitle>{video.titulo}</CardTitle>
          <CardDescription>{video.sobre}</CardDescription>
          <CardActions>
            <PlayButton href={video.url} target="_blank" rel="noopener noreferrer" title="Assistir">
            <BsPlayFill size={18} />
            </PlayButton>
            <IconButton onClick={handleEdit} title="Editar">
              <FaEdit />
            </IconButton>
            <IconButton onClick={handleDelete} title="Excluir" $delete>
              <FaTrash />
            </IconButton>
          </CardActions>
          </CardContent>
    </MiniContainer>
        </>
      )}
    </CardContainer>
  );
};

export default VideoCard;