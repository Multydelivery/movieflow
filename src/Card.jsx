import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons
import './Card.css';

const Card = ({ title }) => {
  const [liked, setLiked] = useState(0); // 0 = Not liked, 1 = Liked
  const [count, setCount] = useState(0); // Like count

  const handleLike = () => {
    if (liked) {
      setLiked(0); // Set to "Unlike"
      setCount((prevCount) => prevCount - 1); // Decrement count
    } else {
      setLiked(1); // Set to "Like"
      setCount((prevCount) => prevCount + 1); // Increment count
    }
  };

  return (
    <div className='card-container'>
      <h2>{title}</h2>
      <button onClick={handleLike}>
        {liked ? (
          <FaHeart color="red" size={24} /> // Red heart for "Liked"
        ) : (
          <FaRegHeart color="black" size={24} /> // White (outline) heart for "Unlike"
        )}
      </button>
      <p>Likes: {count}</p> {/* Display the like count */}
    </div>
  );
};

export default Card;