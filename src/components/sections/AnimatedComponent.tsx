import React, { useEffect, useRef, useState } from 'react';
import styles from '@styles/animated-component.module.css';

type AnimatedComponentProps = {
  children: React.ReactNode;
};

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = ref.current;

    const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
        }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
      <div
          ref={ref}
          className={`${styles.animatedComponent} ${isVisible ? styles.animate : ''}`}
      >
        {children}
      </div>
  );
};

export default AnimatedComponent;