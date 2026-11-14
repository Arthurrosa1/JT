import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import SectionPage from './pages/SectionPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:sectionId" element={<SectionPage />} />
      <Route path="/:sectionId/:season" element={<SectionPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
