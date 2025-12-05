import { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'particulier',
    title: 'Particulier',
    intro: 'Transformeer uw woning tot een slimme, sfeervolle leefomgeving met onze high-end oplossingen.',
    features: [
      'Multiroom Audio',
      'Home Cinema',
      'Smart Home Integratie',
      'Sfeerverlichting (Binnen & Buiten)',
      'WiFi Optimalisatie'
    ],
    image: 'https://www.canva.com/design/DAG6o2ZjTE0/b1DLMBKnVXoor7yA1yMiZw/view?utm_content=DAG6o2ZjTE0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5f199e3402',
    brands: [
      {
        name: 'Bluesound',
        description: 'Premium draadloos Hi-Res muzieksysteem voor het hele huis.',
        website: 'https://www.bluesound.com'
      },
      {
        name: 'Sonos',
        description: 'Het ultieme draadloze home sound system.',
        website: 'https://www.sonos.com'
      },
      {
        name: 'Denon / Marantz',
        description: 'Topklasse receivers en versterkers voor de echte audiofiel.',
        website: 'https://www.denon.com'
      },
      {
        name: 'Homey / Violet',
        description: 'Slimme hubs en schakelaars die al uw apparaten verbinden.',
        website: 'https://homey.app'
      }
    ]
  },
  {
    id: 'zakelijk',
    title: 'Zakelijk',
    intro: 'Professionele audiovisuele installaties die uw bedrijfspresentatie en communicatie naar een hoger niveau tillen.',
    features: [
      'Narrowcasting & Digital Signage',
      'Conference Rooms & Video Vergaderen',
      'Presentatiesystemen',
      'Omroepinstallaties',
      'Professionele Audio'
    ],
    image: 'https://picsum.photos/id/1/600/400',
    brands: [
      {
        name: 'Yamaha Pro',
        description: 'Betrouwbare professionele audio-oplossingen voor elke ruimte.',
        website: 'https://usa.yamaha.com/products/proaudio/'
      },
      {
        name: 'SHURE',
        description: 'Wereldleider in microfoons en draadloze audiosystemen.',
        website: 'https://www.shure.com'
      },
      {
        name: 'Yealink',
        description: 'Innovatieve video conferencing en voice communicatie.',
        website: 'https://www.yealink.com'
      }
    ]
  }
];