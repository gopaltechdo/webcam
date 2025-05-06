import React, { useEffect, useRef } from 'react';

const WebcamStream = () => {
  const videoRef = useRef();

  useEffect(() => {
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };
    getVideo();
  }, []);

  return (
    <div>
      <h2>Live Webcam Stream</h2>
      <video ref={videoRef} autoPlay playsInline width="640" height="480" />
    </div>
  );
};

export default WebcamStream;
