"use client";

import React from 'react';
import { PrismicNextImage } from '@prismicio/next';
import { TbPlayerPlay } from "react-icons/tb";

import styles from "./YoutubeEmbed.module.scss"

const YoutubeEmbed = ({ videoId, placeholderImage, artistName, songName }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className={styles.Video_Container}>
      <div className={styles.Video}>
        {!isLoaded ? (
          <div className={styles.Thumbnail} onClick={() => setIsLoaded(true)} style={{ cursor: "pointer" }}>
            {placeholderImage && placeholderImage.url && (
              <PrismicNextImage 
                field={placeholderImage} 
                alt="Video thumbnail"
                style={{ width: "100%", height: "auto" }}
              />
            )}
            <button><TbPlayerPlay />Play</button>
          </div>
        ) : (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <p className={styles.info}>
        <span className={styles.title}>{songName}</span>
        <span className={styles.artist}>Originally by {artistName}</span>
      </p>
    </div>
  );
};

export default YoutubeEmbed;