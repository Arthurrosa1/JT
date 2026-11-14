import { useEffect, useState } from 'react';

import Menu from '../components/Menu.jsx';
import CardsCarousel from '../components/CardsCarousel.jsx';
import CarouselController from '../components/CarouselController.jsx';
import Backdrop from '../components/Backdrop.jsx';
import { backdrops, homeCards } from '../data/sections.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  useDocumentTitle('Jayson Tatum');

  // Os estilos de fundo da home (cor do tema + GIF/estádio em body::before) ficam
  // em `body.homeBody`, para não vazarem para as páginas internas.
  useEffect(() => {
    document.body.classList.add('homeBody');
    return () => document.body.classList.remove('homeBody');
  }, []);

  useEffect(() => {
    if (hoveredId) document.body.dataset.hovered = hoveredId;
    else delete document.body.dataset.hovered;
    return () => delete document.body.dataset.hovered;
  }, [hoveredId]);

  return (
    <>
      <Backdrop backdrop={backdrops.home} className="homeBackdrop" />
      <Menu />

      <main className="container">
        <CardsCarousel
          cards={homeCards}
          selectedIndex={selectedIndex}
          hoveredId={hoveredId}
          onHoverChange={setHoveredId}
        />
      </main>

      <CarouselController count={homeCards.length} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
    </>
  );
}
