'use client';
import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  end: number;
  duration?: number;
};

export const Count: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [value, setValue] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  // Trigger when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTrigger(true);
        }
      },
      { threshold: 0.4 }, // start when 40% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Count-up logic
  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setValue(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [trigger, end, duration]);

  return <span ref={ref}>{value}</span>;
};
