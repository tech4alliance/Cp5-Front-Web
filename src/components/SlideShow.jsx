import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slideshow1 from '../assets/slideshow1.jpg';
import slideshow2 from '../assets/slideshow2.jpg';
import slideshow3 from '../assets/slideshow3.jpg';

const images = [slideshow1, slideshow2, slideshow3];

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

const SlideshowImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Button = styled.button`
  position:absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Indicator = styled.span`
  width: 10px;
  height: 10px;
  background-color: grey;
  border-radius: 50%;
  margin: 0 5px;
  margin-bottom:10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: #d4af37; /* Cor ativa */
  }

  &:hover {
    background-color: #b0a00b; /* Cor ao passar o mouse */
  }
`;

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <SlideshowContainer>
      <Button onClick={prevImage} className="prev">
        <FaChevronLeft />
      </Button>
      <SlideshowImage src={images[currentIndex]} alt={`Slideshow ${currentIndex + 1}`} />
      <Button onClick={nextImage} className="next">
        <FaChevronRight />
      </Button>
      <Indicators>
        {images.map((_, index) => (
          <Indicator
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Indicators>
    </SlideshowContainer>
  );
};

export default Slideshow;
