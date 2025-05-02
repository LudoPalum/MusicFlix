import React, { useState } from 'react';
import { FormContainer, FormGroup, Label, Input, Select, Textarea, SubmitButton } from './AddVideo.styles';

const AddVideo = ({ onAddVideo }) => {
  const [formData, setFormData] = useState({
    genero: 'pop',
    titulo: '',
    url: '',
    imagem: '',
    sobre: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVideo(formData);
    setFormData({
      genero: 'pop',
      titulo: '',
      url: '',
      imagem: '',
      sobre: ''
    });
    alert('Vídeo adicionado com sucesso!');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Adicionar Novo Vídeo</h2>
      
      <FormGroup>
        <Label>Gênero Musical:</Label>
        <Select name="genero" value={formData.genero} onChange={handleChange} required>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="hiphop">Hip-Hop</option>
          <option value="eletronica">Eletrônica</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>Título:</Label>
        <Input 
          type="text" 
          name="titulo" 
          value={formData.titulo} 
          onChange={handleChange} 
          required 
        />
      </FormGroup>

      <FormGroup>
        <Label>URL do Vídeo:</Label>
        <Input 
          type="url" 
          name="url" 
          value={formData.url} 
          onChange={handleChange} 
          required 
        />
      </FormGroup>

      <FormGroup>
        <Label>URL da Thumbnail:</Label>
        <Input 
          type="url" 
          name="imagem" 
          value={formData.imagem} 
          onChange={handleChange} 
          required 
        />
      </FormGroup>

      <FormGroup>
        <Label>Descrição do Artista/Banda:</Label>
        <Textarea 
          name="sobre" 
          value={formData.sobre} 
          onChange={handleChange} 
          required 
        />
      </FormGroup>

      <SubmitButton type="submit">Adicionar Vídeo</SubmitButton>
    </FormContainer>
  );
};

export default AddVideo;