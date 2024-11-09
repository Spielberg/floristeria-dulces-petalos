import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultLang } from '@/config';

import en from './translation/en.json';
import es from './translation/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: defaultLang,
  fallbackLng: defaultLang,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
