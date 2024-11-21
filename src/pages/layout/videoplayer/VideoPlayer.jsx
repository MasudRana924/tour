import { useRef, useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video"
        src="path/to/your-video.mp4" // Replace with the actual path to your video
        playsInline
      />
      {!isPlaying && (
        <div className="play-button-container">
          <button className="play-button" onClick={handlePlayPause}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="91"
              viewBox="0 0 88 91"
              fill="none"
            >
              <path
                d="M18.332 11.6758L69.6654 45.5008L18.332 79.3258V11.6758Z"
                fill="#D9D9D9"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
