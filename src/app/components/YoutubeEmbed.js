import React from 'react';

const YoutubeEmbed = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
      <iframe
        width="100%"  // Set the width to 100%
        height="100%" // Set the height to 100%
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
  );
};

export default YoutubeEmbed;
