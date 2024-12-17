import React, { useState, useEffect } from 'react';

const Animations = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    return (
        <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {children}
        </div>
    );
};

export default Animations;

