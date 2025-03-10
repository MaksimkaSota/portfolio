import './index.scss';
import './assets/fonts/inter/inter.scss';
import './assets/fonts/nunito/nunito.scss';
import './assets/fonts/icons/icons.scss';
import './services/localization/i18n';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { App } from './Components/App';
import { ErrorCatcher } from './Components/Common/Errors/ErrorCatcher/ErrorCatcher';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ErrorCatcher>
        <App />
      </ErrorCatcher>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
