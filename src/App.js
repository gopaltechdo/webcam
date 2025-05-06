import React from 'react';
import WebcamStream from './webcam';
const App = () => {
  const videoURL = " https://912a-2401-4900-1cc4-366a-59ab-af2f-20b0-8d85.ngrok-free.app/video_feed"; // replace with server IP or domain
  // const videoURL = "https://flask-nr63.onrender.com"; // replace with server IP or domain


  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Live Webcam Feed</h1>
      <img src={videoURL} alt="Webcam Stream" className="mx-auto border-4 border-orange-300" />
    </div>
  );
};

export default App;
// const App = () => {
//   return (
//     <div className="App">
//       <WebcamStream />
//     </div>
//   );
// }
// export default App;
