import './index.css';
import './assets/fonts/inter/inter.css';
import './assets/fonts/nunito/nunito.css';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import reportWebVitals from './reportWebVitals';
import { App } from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
