export type Language = 'en' | 'hu' | 'ro'

interface Translations {
  [key: string]: {
    [key in Language]: string
  }
}

export const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    hu: 'Főoldal',
    ro: 'Acasă'
  },
  'nav.about': {
    en: 'About',
    hu: 'Rólunk',
    ro: 'Despre'
  },
  'nav.contact': {
    en: 'Contact',
    hu: 'Kapcsolat',
    ro: 'Contact'
  },
  'nav.privacy': {
    en: 'Privacy',
    hu: 'Adatvédelem',
    ro: 'Confidențialitate'
  },
  'nav.terms': {
    en: 'Terms',
    hu: 'Feltételek',
    ro: 'Termeni'
  },

  // Homepage
  'home.title': {
    en: 'Data Visualization Hub',
    hu: 'Adat Vizualizációs Központ',
    ro: 'Centru de Vizualizare a Datelor'
  },
  'home.subtitle': {
    en: 'Exploring Szeklerland Through Data',
    hu: 'Székelyföld Felfedezése Adatokon Keresztül',
    ro: 'Explorarea Ținutului Secuiesc prin Date'
  },
  'home.latest.data': {
    en: 'Latest Data',
    hu: 'Legfrissebb Adatok',
    ro: 'Date Recente'
  },
  'home.interactive.dashboard': {
    en: 'Interactive Dashboard',
    hu: 'Interaktív Irányítópult',
    ro: 'Tablou de Bord Interactiv'
  },
  'home.latest.articles': {
    en: 'Latest Articles',
    hu: 'Legújabb Cikkek',
    ro: 'Articole Recente'
  },
  'home.resources': {
    en: 'Resources & Documentation',
    hu: 'Források és Dokumentáció',
    ro: 'Resurse și Documentație'
  },

  // Chart types
  'chart.bar': {
    en: 'Bar Chart',
    hu: 'Oszlopdiagram',
    ro: 'Grafic cu Bare'
  },
  'chart.line': {
    en: 'Line Chart',
    hu: 'Vonaldiagram',
    ro: 'Grafic Liniar'
  },
  'chart.pie': {
    en: 'Pie Chart',
    hu: 'Kördiagram',
    ro: 'Grafic Circular'
  },
  'chart.area': {
    en: 'Area Chart',
    hu: 'Területdiagram',
    ro: 'Grafic cu Suprafață'
  },
  'chart.scatter': {
    en: 'Scatter Plot',
    hu: 'Pontdiagram',
    ro: 'Grafic de Dispersie'
  },

  // Chart Types
  'chart.type.bar': {
    en: 'Bar Chart',
    hu: 'Oszlopdiagram',
    ro: 'Grafic cu Bare'
  },
  'chart.type.line': {
    en: 'Line Chart',
    hu: 'Vonaldiagram',
    ro: 'Grafic Liniar'
  },
  'chart.type.pie': {
    en: 'Pie Chart',
    hu: 'Kördiagram',
    ro: 'Grafic Circular'
  },
  'chart.type.area': {
    en: 'Area Chart',
    hu: 'Területdiagram',
    ro: 'Grafic cu Suprafață'
  },
  'chart.type.scatter': {
    en: 'Scatter Plot',
    hu: 'Pontdiagram',
    ro: 'Grafic de Dispersie'
  },

  // Chart Libraries
  'chart.library.recharts': {
    en: 'Recharts',
    hu: 'Recharts',
    ro: 'Recharts'
  },
  'chart.library.visx': {
    en: 'Visx',
    hu: 'Visx',
    ro: 'Visx'
  },
  'chart.library.vega': {
    en: 'Vega-Lite',
    hu: 'Vega-Lite',
    ro: 'Vega-Lite'
  },

  // Chart Controls
  'chart.controls.library': {
    en: 'Library',
    hu: 'Könyvtár',
    ro: 'Bibliotecă'
  },
  'chart.controls.type': {
    en: 'Chart Type',
    hu: 'Diagram Típus',
    ro: 'Tip Grafic'
  },

  // Chart Labels
  'chart.label.value': {
    en: 'Value',
    hu: 'Érték',
    ro: 'Valoare'
  },
  'chart.label.category': {
    en: 'Category',
    hu: 'Kategória',
    ro: 'Categorie'
  },
  'chart.label.year': {
    en: 'Year',
    hu: 'Év',
    ro: 'An'
  }
}

export function getTranslation(key: string, lang: Language): string {
  return translations[key]?.[lang] || key
} 