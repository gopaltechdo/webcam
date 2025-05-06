import React from 'react';

const App = () => {
  const videoURL = " http://10.214.115.50:5000/video_feed"; // replace with server IP or domain
  // const videoURL = "https://flask-nr63.onrender.com"; // replace with server IP or domain


  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Live Webcam Feed</h1>
      <img src={videoURL} alt="Webcam Stream" className="mx-auto border-4 border-orange-300" />
    </div>
  );
};

export default App;
