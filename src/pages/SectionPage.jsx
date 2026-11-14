import { Navigate, useParams } from 'react-router-dom';

import Backdrop from '../components/Backdrop.jsx';
import Navigator from '../components/Navigator.jsx';
import Pills from '../components/Pills.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';
import LinkButton from '../components/LinkButton.jsx';
import Gallery from '../components/Gallery.jsx';
import sections from '../data/sections.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function SectionPage() {
  const { sectionId, season = '1' } = useParams();
  const section = Object.prototype.hasOwnProperty.call(sections, sectionId) ? sections[sectionId] : undefined;
  const seasonData = section?.seasons[Number(season) - 1];

  useDocumentTitle(section?.title ?? 'Jayson Tatum');

  if (!seasonData) return <Navigate to="/" replace />;

  return (
    <div className={`wrapper team-${sectionId}`}>
      <ThemeToggle floating />

      <div className="leftColumn">
        <Navigator sectionId={sectionId} section={section} />
      </div>

      <div className="mainContent">
        <Backdrop backdrop={seasonData.backdrop} />

        <div className="mainContentTop">
          <div className={section.logo.className}>
            <img src={section.logo.src} alt={section.logo.alt} title={section.logo.title} />
          </div>

          <div className="description">
            <Pills className={section.pillsClassName} label={seasonData.label} stats={seasonData.stats} />

            <div className="descriptionText">
              {seasonData.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>

          <div className="links">
            <ul>
              <li>
                <LinkButton href={section.highlightsUrl}>JT highlights</LinkButton>
              </li>
            </ul>
          </div>
        </div>

        <div className="MainContentBottom">
          <Gallery className={section.galleryClassName} images={section.gallery} />
        </div>
      </div>
    </div>
  );
}
