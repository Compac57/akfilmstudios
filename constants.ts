import { Project, Service, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Alpine Gelübde',
    category: 'Hochzeitsfilm | Arlberg',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2940&auto=format&fit=crop',
    description: 'Ein intimes Elopement inmitten der verschneiten Gipfel der österreichischen Alpen.'
  },
  {
    id: '2',
    title: 'Eleganz am See',
    category: 'Fotografie | Bregenz',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2940&auto=format&fit=crop',
    description: 'Sonnenuntergangs-Emotionen, eingefangen am Ufer des Bodensees.'
  },
  {
    id: '3',
    title: 'Golden Hour Story',
    category: 'Full Production | Dornbirn',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=2940&auto=format&fit=crop',
    description: 'Eine cineastische Liebesgeschichte, gefilmt mit Sony Alpha Prime-Objektiven im goldenen Licht.'
  },
  {
    id: '4',
    title: 'Atem der Berge',
    category: 'Drone Cinema | Bregenzerwald',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2940&auto=format&fit=crop',
    description: 'Luftaufnahmen einer traditionellen Hochzeit mit der DJI Mavic 3 Cine.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'photo',
    title: 'Hochzeitsfotografie',
    description: 'Zeitlos, offen und emotional. Wir fangen die flüchtigen Momente ein, die euren Tag einzigartig machen – mit hochauflösenden Sony-Sensoren.'
  },
  {
    id: 'film',
    title: 'Cineastische Filme',
    description: 'Story-getriebene Hochzeitsfilme. Nicht nur eine Aufnahme, sondern ein Film eurer Liebe, perfekt color-graded.'
  },
  {
    id: 'drone',
    title: 'Luftaufnahmen',
    description: 'Atemberaubende 4K-Drohnenaufnahmen eurer Location und Landschaft mit modernster DJI-Technologie. Die perfekte Perspektive für die Vorarlberger Kulisse.'
  },
  {
    id: 'couple',
    title: 'Paarshootings',
    description: 'Pre-Wedding oder Verlobungsshootings in der Natur von Bregenz und Umgebung, um sich vor der Kamera wohlzufühlen.'
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/akfilmstudio' },
  { platform: 'Vimeo', url: '#' },
  { platform: 'Facebook', url: '#' },
];