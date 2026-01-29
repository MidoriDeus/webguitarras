import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const FadeInSection = ({ children }) => {
    const [ref, visible] = useOnScreen({ rootMargin: '-50px' });

    return (
        <div ref={ref} className={`fade-in-section ${visible ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

export default FadeInSection;
