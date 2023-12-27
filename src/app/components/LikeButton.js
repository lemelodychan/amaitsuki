"use client"
import { useState } from 'react';

const LikeButton = ({ uid }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = async () => {
    setLikeCount(likeCount + 1);

    const updatedJSON = {
      uid: uid,
      likeCount: likeCount + 1,
    };

    try {
      const response = await fetch('/api/likeCounter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedJSON),
      });

      const responseData = await response.json();
      console.log(responseData); // Log the response for debugging
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <p>UID: {uid}</p>
      <p>Like Count: {likeCount}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

export default LikeButton;
