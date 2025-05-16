import i18n from "i18next";
import {
  initReactI18next
} from "react-i18next";

import translationEN from '../locales/en/translation.json';
import lessonsEN from '../locales/en/lessons.json';
import aboutEN from '../locales/en/about.json';
import contactEN from '../locales/en/contact.json';

import translationVI from '../locales/vi/translation.json';
import lessonsVI from '../locales/vi/lessons.json';
import aboutVI from '../locales/vi/about.json';
import contactVI from '../locales/vi/contact.json';

const resources = {
  en: {
    translation: translationEN,
    lessons: lessonsEN,
    about: aboutEN,
    contact: contactEN,
  },
  vi: {
    translation: translationVI,
    lessons: lessonsVI,
    about: aboutVI,
    contact: contactVI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["translation", "lessons", 'about', 'contact'],
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;