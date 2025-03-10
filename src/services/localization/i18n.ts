import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enLang from './languages/en.json';
import ruLang from './languages/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,

    fallbackLng: 'en',

    detection: {
      order: ['localStorage', 'htmlTag', 'navigator'],
    },

    supportedLngs: ['en', 'ru'],

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: enLang,
      },
      ru: {
        translation: ruLang,
      },
    },
  });

export default i18n;
