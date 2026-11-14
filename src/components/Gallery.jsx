import { useEffect, useRef } from 'react';
import { Fancybox } from '@fancyapps/ui';

/**
 * images: [{ full, thumb, alt?, credit?, source? }]
 * `credit`/`source` aparecem como legenda ao ampliar a foto (exigência das
 * licenças Creative Commons).
 */
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
    <div className={className ? `gallery ${className}` : 'gallery'} ref={containerRef}>
      <ul>
        {images.map((image) => (
          <li key={image.full}>
            <a
              data-fancybox="gallery"
              href={image.full}
              data-caption={image.credit ? captionHtml(image) : undefined}
              title={image.credit ? `Foto: ${image.credit}` : undefined}
            >
              <img src={image.thumb} alt={image.alt ?? 'Jayson Tatum em jogo'} loading="lazy" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

function captionHtml({ credit, source }) {
  const text = `Foto: ${escapeHtml(credit)}`;
  return source ? `<a href="${escapeHtml(source)}" target="_blank" rel="noopener noreferrer">${text}</a>` : text;
}
