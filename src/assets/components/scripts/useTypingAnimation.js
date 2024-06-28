import { useEffect, useState } from 'react';

const useTypingAnimation = (text, typingSpeed) => {
  const [animationDuration, setAnimationDuration] = useState(0);

  useEffect(() => {
    const duration = text.length * typingSpeed;
    setAnimationDuration(duration);
  }, [text, typingSpeed]);

  return animationDuration;
};

export default useTypingAnimation;
