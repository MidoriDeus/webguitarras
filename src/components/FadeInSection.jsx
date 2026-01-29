import React, { useEffect, useRef } from 'react';

const FadeInSection = ({ children, className = "" }) => {
    const elementRef = useRef();

    useEffect(() => {
        const element = elementRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={`fade-in-section ${className}`}>
            {children}
        </div>
    );
};

export default FadeInSection;
