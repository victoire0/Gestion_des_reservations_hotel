import { useState } from 'react';
import PropTypes from 'prop-types';
import './RoomSlide.css';

const RoomSlide = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="room-slide">
      <button onClick={prevSlide} className="slide-btn1"> <img src="/src/assets/left.png" alt="" className="img1" /></button>
      <img
        src={images[currentImageIndex]}
        alt={`Room slide ${currentImageIndex + 1}`}
        className="slide-image"
      />
      <button onClick={nextSlide} className="slide-btn2"> <img src="/src/assets/right.png" alt="" className="img1" /> </button>
    </div>
  );
};

RoomSlide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoomSlide;
