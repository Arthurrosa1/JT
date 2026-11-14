import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './styles/reset.css';
import './styles/global.css';
import './styles/homePage.css';
import './styles/internal.css';
import './styles/components/navigator.css';
import './styles/components/pills.css';
import './styles/components/linkButton.css';
import './styles/components/gallery.css';
import './styles/components/themeToggle.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
