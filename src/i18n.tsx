import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEnglish from "./Translation/English/translation.json";
import translationItalian from "./Translation/Italian/translation.json";

const resources = {
    en: {
        translation: translationEnglish,
    },
    it: {
        translation: translationItalian,
    },
}

// i18next.use(initReactI18next).init({
//     resources, 
//     lng: "it", // default language
// });

const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
};

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        detection: DETECTION_OPTIONS,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });



export default i18next;