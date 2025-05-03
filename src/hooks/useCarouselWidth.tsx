'use client';

import { useState, useEffect, RefObject } from 'react';
import { useElementSize } from './useElementSize';

export function useCarouselWidth(
    carouselRef: RefObject<HTMLDivElement | null>,
    containerRef: RefObject<HTMLDivElement | null>
): number {
    const [dragWidth, setDragWidth] = useState(0);
    const containerSize = useElementSize(containerRef);

    useEffect(() => {
        const updateDragWidth = () => {
            if (carouselRef.current && containerRef.current) {
                const scrollWidth = carouselRef.current.scrollWidth;
                const containerWidth = containerRef.current.offsetWidth;
                setDragWidth(Math.max(0, scrollWidth - containerWidth));
            }
        };

        updateDragWidth();
    }, [carouselRef, containerRef, containerSize.width]);

    return dragWidth;
}