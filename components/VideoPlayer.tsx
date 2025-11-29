import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title = "Course Introduction" }) => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900">
      <div className="video-wrapper">
        <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`} 
          title={title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};