import { StaticImageData } from 'next/image';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';

export const Background: React.FC<{
  backgroundImage: StaticImageData;
  children: ReactNode;
}> = ({
  backgroundImage = { src: '' } as StaticImageData,
  children = <></>,
}) => {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    `rgba(22, 25, 32, 0.5)`
  );

  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY, innerHeight } = window;
    const scrollHeight: number = pageYOffset || scrollY || 0;
    const ratio: number =
      scrollHeight / innerHeight < 1 ? scrollHeight / innerHeight : 1;
    const percentage: number = 0.5 + parseFloat((0.4 * ratio).toFixed(2));
    const bgColor: string = `rgba(22, 25, 32, ${percentage})`;
    setBackgroundColor(bgColor);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <div
      className="bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div style={{ backgroundColor }} className="transition-all">
        {children}
      </div>
    </div>
  );
};

Background.displayName = 'Background';
Background.defaultProps = {
  backgroundImage: { src: '' } as StaticImageData,
  children: <></>,
};

export default Background;
