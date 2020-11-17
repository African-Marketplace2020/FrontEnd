import React, { useState } from 'react';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {SlideItem, Slideshow} from './Carousel_Styles';
const items = [
  {
    src: 'https://images.pexels.com/photos/389962/pexels-photo-389962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1920',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://images.pexels.com/photos/1518761/pexels-photo-1518761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <SlideItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </SlideItem>
    );
  });

  return (
    <Slideshow
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Slideshow>
  );
}

export default Slider;