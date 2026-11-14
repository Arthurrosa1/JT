import { useEffect, useRef, useState } from 'react';

/**
 * Fundo animado. Mostra na hora o primeiro quadro (`poster`, leve) e faz fade-in
 * da animação quando ela já pode tocar — assim a página nunca fica "vazia"
 * esperando o download.
 *
 * backdrop: { video?: string, gif?: string, poster: string }
 */
export default function Backdrop({ backdrop, className = '' }) {
  const { video, gif, poster } = backdrop;
  const src = video ?? gif;
  const mediaRef = useRef(null);
  const [readySrc, setReadySrc] = useState(null);
  const markReady = () => setReadySrc(src);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    if (video) {
      // garante autoplay mudo (alguns navegadores ignoram o atributo vindo do React)
      media.muted = true;
      media.play().catch(() => {});
      if (media.readyState >= 3) markReady();
    } else if (media.complete && media.naturalWidth) {
      markReady(); // GIF já estava em cache
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const mediaClassName = readySrc === src ? 'backdropMedia backdropMediaReady' : 'backdropMedia';

  return (
    <div className={className ? `backdrop ${className}` : 'backdrop'} style={{ backgroundImage: `url(${poster})` }} aria-hidden="true">
      {video ? (
        <video
          key={src}
          ref={mediaRef}
          className={mediaClassName}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={markReady}
        />
      ) : (
        <img key={src} ref={mediaRef} className={mediaClassName} src={gif} alt="" onLoad={markReady} />
      )}
    </div>
  );
}
