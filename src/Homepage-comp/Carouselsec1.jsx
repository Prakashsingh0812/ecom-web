import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const images = [
    {
      src: 'https://plus.unsplash.com/premium_photo-1694618623649-51733e6001fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
      alt: 'Image 1',
      buttonText: 'Buy Now 1',
      link: '#link1',
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww',
      alt: 'Image 2',
      buttonText: 'Buy Now 2',
      link: '#link2',
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
      alt: 'Image 3',
      buttonText: 'Buy Now 3',
      link: '#link3',
    },
  ];

  // Slide the carousel every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [isHovered, images.length]);

  const handleTouchStart = (e) => {
    const touchStartPosition = e.touches[0].clientX;
    setTouchStart(touchStartPosition);
  };

  const handleTouchEnd = (e) => {
    if (touchStart !== null) {
      const touchEndPosition = e.changedTouches[0].clientX;
      if (touchStart - touchEndPosition > 50) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Swipe left
      } else if (touchEndPosition - touchStart > 50) {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        ); // Swipe right
      }
    }
  };

  return (
    <div className="relative w-full max-w-full mx-auto mt-8">
      {/* Carousel container */}
      <div
        className="relative overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image Slider */}
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-full" style={{ height: '1000px' }}>
                {/* Adjusting height to 300px (you can modify as needed) */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay with button */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <a
                  href={image.link}
                  className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  {image.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
