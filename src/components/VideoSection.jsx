import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black">
      {!isPlaying ? (
        <>
          <img
            alt="Man in pink and brown hoodie leaning forward with lamp and wooden frame in background"
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/a1aa/image/d7c679c9-2782-4baa-02aa-fc641ee21e5e.jpg"
          />
          <button
            aria-label="Play video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0e7e5] w-40 h-40 flex items-center justify-center hover:opacity-90 transition"
            onClick={() => setIsPlaying(true)}
          >
            <div className="rounded-full bg-primary w-24 h-24 flex items-center justify-center">
              <FontAwesomeIcon icon={faPlay} className="text-white text-2xl ml-[2px]" />
            </div>
          </button>
        </>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/up68UAfH0d0?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoSection;