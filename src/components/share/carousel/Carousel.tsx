'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import SliderItem from '../../common/slider-item/SliderItem';
import { items } from '@/data/views';
import { useCarouselWidth } from '@/hooks/useCarouselWidth';

function Carousel() {
  const carousel = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragWidth = useCarouselWidth(carousel, containerRef);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <div className="px-4 md:px-6">
        <motion.div
          ref={carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -dragWidth }}
          dragElastic={0.1}
          dragTransition={{ bounceDamping: 30, power: 0.5 }}
          whileTap={{ cursor: 'grabbing' }}
          className="flex cursor-grab will-change-transform pb-4"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="shrink-0"
              whileTap={{ scale: 0.98 }}
              style={{
                width: '300px',
                marginRight: '16px',
              }}
            >
              <SliderItem
                avatar={item.imgSrc}
                name={item.name}
                position={item.subtitle || ''}
                task={item.task}
                review={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Carousel;