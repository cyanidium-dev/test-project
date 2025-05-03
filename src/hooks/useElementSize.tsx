'use client';

import { useState, useEffect, RefObject } from 'react';

interface ElementSize {
    width: number;
    height: number;
}

export function useElementSize<T extends HTMLElement | null>(elementRef: RefObject<T>): ElementSize {
    const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

    useEffect(() => {
        if (!elementRef.current) return;

        const updateSize = () => {
            if (elementRef.current) {
                const { offsetWidth, offsetHeight } = elementRef.current;
                setSize({
                    width: offsetWidth,
                    height: offsetHeight,
                });
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [elementRef]);

    return size;
}