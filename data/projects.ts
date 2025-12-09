import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxe Thuisbioscoop Experience',
    description: 'High-end thuisbioscoop installatie met onzichtbare plafondspeakers, 4K laserprojectie en akoestische wandbekleding.',
    fullDescription: 'Voor deze particuliere opdrachtgever in Wassenaar hebben we een ongebruikte kelderruimte getransformeerd tot een state-of-the-art thuisbioscoop. De uitdaging lag in de beperkte hoogte van de ruimte, waarvoor we kozen voor inbouwspeakers en een akoestisch systeemplafond met sterrenhemel-effect. De 4K laserprojector is weggewerkt in een geventileerde koof, en het gehele systeem is met één druk op de knop te bedienen via Control4.',
    image: 'https://picsum.photos/id/101/800/600', 
    gallery: [
      'https://picsum.photos/id/101/1200/800',
      'https://picsum.photos/id/250/1200/800',
      'https://picsum.photos/id/400/1200/800',
      'https://picsum.photos/id/450/1200/800'
    ],
    category: 'Particulier',
    location: 'Wassenaar',
    year: '2023',
    tags: ['Home Cinema', 'Akoestiek', 'Control4', '4K Projectie']
  },
  {
    id: '2',
    title: 'Smart Garden Verlichting',
    description: 'Architecturale buitenverlichting geïntegreerd met weersbestendige tuinspeakers. Volledig bestuurbaar via smartphone.',
    fullDescription: 'Een sfeervolle tuin vraagt om een lichtplan dat de diepte en texturen van het groen accentueert. We hebben gebruik gemaakt van hoogwaardige LED-armaturen van in-lite die via een Mesh-netwerk communiceren. Naast het licht hebben we een Sonance Landscape audiosysteem geïnstalleerd, waarbij de subwoofers zijn ingegraven voor een volle bas zonder visuele verstoring. Alles is geïntegreerd in het bestaande domoticasysteem.',
    image: 'https://picsum.photos/id/124/800/600',
    gallery: [
      'https://picsum.photos/id/124/1200/800',
      'https://picsum.photos/id/128/1200/800',
      'https://picsum.photos/id/132/1200/800',
      'https://picsum.photos/id/136/1200/800'
    ],
    category: 'Particulier',
    location: "'t Gooi",
    year: '2024',
    tags: ['Buitenverlichting', 'Landscape Audio', 'Domotica']
  },
  {
    id: '3',
    title: 'Corporate Conference Room',
    description: 'Professionele vergaderruimte voorzien van discrete videoprojectie, automatische zonwering en Yealink conference systemen.',
    fullDescription: 'Voor het hoofdkantoor van een IT-bedrijf in Amsterdam hebben we drie vergaderruimtes gemoderniseerd. De focus lag op "One-Touch-Join" meetings via Microsoft Teams. We implementeerden Yealink videobars, plafondmicrofoons met beamtracking zodat er geen apparatuur op tafel hoeft te staan, en automatische zonwering die sluit zodra een presentatie start.',
    image: 'https://picsum.photos/id/180/800/600',
    gallery: [
      'https://picsum.photos/id/180/1200/800',
      'https://picsum.photos/id/188/1200/800',
      'https://picsum.photos/id/192/1200/800',
      'https://picsum.photos/id/196/1200/800'
    ],
    category: 'Zakelijk',
    location: 'Amsterdam Zuidas',
    year: '2023',
    tags: ['Video Conferencing', 'Microsoft Teams', 'Automatisering']
  },
  {
    id: '4',
    title: 'Multiroom Audio Penthouse',
    description: 'Volledige integratie van Sonos en Bluesound in een modern penthouse. Naadloze audio in elke kamer.',
    fullDescription: 'In dit moderne penthouse in Rotterdam was de wens om muziek te hebben in elke ruimte, inclusief de badkamer en het dakterras, zonder zichtbare kabels. We hebben gekozen voor een hybride oplossing met Bowers & Wilkins inbouwspeakers aangestuurd door Sonos Amps in de technische ruimte. De bediening verloopt via wandpanelen en spraaksturing.',
    image: 'https://picsum.photos/id/237/800/600',
    gallery: [
      'https://picsum.photos/id/237/1200/800',
      'https://picsum.photos/id/240/1200/800',
      'https://picsum.photos/id/244/1200/800',
      'https://picsum.photos/id/248/1200/800'
    ],
    category: 'Particulier',
    location: 'Rotterdam',
    year: '2024',
    tags: ['Multiroom Audio', 'Sonos', 'Inbouw', 'Cable Management']
  }
];