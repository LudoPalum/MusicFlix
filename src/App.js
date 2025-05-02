import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContainer } from './App.styles';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddVideo from './pages/AddVideo/AddVideo';
import initialData from './data.json';

function App() {
  const [videos, setVideos] = useState(initialData);

  const addNewVideo = (newVideo) => {
    setVideos(prevVideos => {
      const genre = newVideo.genero;
      const updatedVideos = { ...prevVideos };
      updatedVideos[genre] = [
        ...(updatedVideos[genre] || []),
        {
          ...newVideo,
          id: Date.now()
        }
      ];
      return updatedVideos;
    });
  };

  const deleteVideo = (genre, id) => {
    setVideos(prevVideos => {
      const updatedVideos = { ...prevVideos };
      updatedVideos[genre] = updatedVideos[genre].filter(video => video.id !== id);
      return updatedVideos;
    });
  };

  const updateVideo = (genre, id, updatedVideo) => {
    setVideos(prevVideos => {
      const updatedVideos = { ...prevVideos };
      updatedVideos[genre] = updatedVideos[genre].map(video => 
        video.id === id ? { ...video, ...updatedVideo } : video
      );
      return updatedVideos;
    });
  };

  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                videos={videos} 
                onDeleteVideo={deleteVideo} 
                onUpdateVideo={updateVideo} 
              />
            } 
          />
          <Route path="/adicionar" element={<AddVideo onAddVideo={addNewVideo} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
