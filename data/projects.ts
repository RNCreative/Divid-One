import { Project } from '../types';

// In a real scenario, images would be: 'src/assets/images/project1.jpg', etc.
// Using Picsum for demo purposes to ensure visual output.

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxe Thuisbioscoop Experience',
    description: 'High-end thuisbioscoop installatie met onzichtbare plafondspeakers, 4K laserprojectie en akoestische wandbekleding voor de ultieme cinematic sfeer.',
    image: 'https://picsum.photos/id/101/800/600', 
    category: 'Particulier'
  },
  {
    id: '2',
    title: 'Smart Garden Verlichting',
    description: 'Architecturale buitenverlichting geïntegreerd met weersbestendige tuinspeakers. Volledig bestuurbaar via smartphone voor de perfecte avondsetting.',
    image: 'https://picsum.photos/id/124/800/600',
    category: 'Particulier'
  },
  {
    id: '3',
    title: 'Corporate Conference Room',
    description: 'Professionele vergaderruimte voorzien van discrete videoprojectie, automatische zonwering, Yealink conference systemen en premium akoestische panelen.',
    image: 'https://picsum.photos/id/180/800/600',
    category: 'Zakelijk'
  },
  {
    id: '4',
    title: 'Multiroom Audio Penthouse',
    description: 'Volledige integratie van Sonos en Bluesound in een modern penthouse. Naadloze audio in elke kamer, centraal aangestuurd via een Homey dashboard.',
    image: 'https://picsum.photos/id/237/800/600',
    category: 'Particulier'
  }
];