import { useEffect, useRef } from 'react';
import { Fancybox } from '@fancyapps/ui';

export default function Gallery({ className, images }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    Fancybox.bind(container, '[data-fancybox]');

    return () => {
      Fancybox.unbind(container, '[data-fancybox]');
      Fancybox.close();
    };
  }, [images]);

  return (
    <div className={className} ref={containerRef}>
      <ul>
        {images.map((image) => (
          <li key={image.full}>
            <a data-fancybox="gallery" href={image.full}>
              <img src={image.thumb} alt={image.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
