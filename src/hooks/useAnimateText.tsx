import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useAnimateText = (id: string) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const originalText = textElement?.textContent;
    if (textElement && originalText) {
      const chars = originalText.split('');
      textElement.innerHTML = chars.map((char) => `<span>${char}</span>`).join('') ?? '';
      const spans = textElement.querySelectorAll('span');
      gsap.from(spans, {
        duration: 0.2,
        opacity: 0,
        stagger: 0.04,
      });
    }
  }, [id]);

  return textRef;
};
