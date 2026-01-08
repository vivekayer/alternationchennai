type ShowDescription =
  | { type: 'text'; content: string }
  | { type: 'band'; title: string; members: string[] }
  | { type: 'links'; content: { text: string; url: string }[] };

type Show = {
  title: string;
  date: string;
  venue: string;
  description: ShowDescription[];
  image?: string;
  images?: string[];
};

export const knownShows: Record<string, Show> = {
  'many-things': {
    title: 'Many Things',
    date: 'Saturday, 28th September 2024',
    venue: 'Vinyl & Brew, Chennai',
    description: [
      { type: 'text', content: 'Many Things is a cross genre instrumental trio from Chennai, India consisting of Maarten Visser on saxophone, Aravind Murali on bass, and Manukrishnan on drums. Many Things combine a variety of musical styles such as jazz, rock, classical and funk and delicately treads the fine line between composition and improvisation. Their innovative music takes the listener on a journey, with unexpected twists and turns that never fail to surprise. Many things has played at various venues across the country.' },
      { type: 'band', title: 'Band', members: [
        'Maarten Visser - saxophone',
        'Aravind Murali - bass',
        'Manukrishnan - drums',
      ]},
    ],
    image: '/bands/01_ManyThings.jpg',
  },
  'descarga': {
    title: 'Descarga',
    date: '2nd November 2024',
    venue: 'Vinyl & Brew, Chennai',
    description: [
      { type: 'text', content: 'DESCARGA - improvised music session - is a project by drummer Jeoraj George. The idea behind Descarga is to collaborate with artists from diverse musical backgrounds and explore the deep traditions of latin, jazz, funk and world music. The band draws influence from AfroCuban, Afro Brazilian sources and Jazz legends like Chick Corea, Michel Camilo, Horacio Hernandez, and contemporary bands like Snarky Puppy and Dirty Loops. For this instalment of the project Jeoraj has teamed up with Joshua Costa on piano and Napier Peter Naveen Kumar on bass guitar.' },
      { type: 'band', title: 'Band', members: [
        'Jeoraj George - drums',
        'Joshua Costa - piano',
        'Napier Peter Naveen Kumar - bass',
      ]},
    ],
    image: '/bands/02_Descarga.jpg',
  },
  'beginnings': {
    title: 'Beginnings',
    date: '28th December 2024',
    venue: 'Vinyl & Brew, Chennai',
    image: '/bands/03_Beginnings.jpg',
    description: [
      { type: 'text', content: 'BEGINNINGS is a project by pianist, saxophonist and composer, Matt Littlewood. Beginnings features mainly original compositions, together with re-imaginings of some well-known jazz standards. The project is a conscious effort to play an active role in the improvised musical community, and aims to conceptualise many diverse musical and personal experiences gained over the years. The compositions also reflect his work towards a new pianistic and compositional style that combines jazz with elements of Neo Soul, RnB, and Indian and Western Classical music.\n\nMatt performs the pieces on piano and is joined by the internationally renowned Holger Jetter on electric double bass, and dynamic and versatile drummer, Raul Mattia.' },
      { type: 'band', title: 'Band', members: [
        'Matt Littlewood - piano',
        'Holger Jetter - double bass',
        'Raul Mattia - drums',
      ]},
    ],
  },
  'tinctures': {
    title: 'Tinctures',
    date: '8th February 2025',
    venue: 'Vinyl & Brew, Chennai',
    description: [
      { type: 'text', content: 'TINCTURES is an eclectic duo from Bangalore/Berlin that explores the nature of consonance and dissonance on piano and guitar. Together, Nishad Pandey (guitar) and Aman Mahajan (piano) constitute a compositional and improvisational laboratory, blending tinctures of European and Indian classical music and jazz with aesthetic, literary and mathematical concepts to create lush and intricate sound-worlds.' },
      { type: 'text', content: 'The duo maintains a schedule of regular performances and workshops in India and Berlin. Tinctures released their debut album Heads and Tales in 2021. Their second album moments, remote was released in 2023, created virtually during the 2020 Coronavirus pandemic. Supported by Goethe-Institut Germany\'s Virtual Partner Residency, this album uses the novel approach of integrating latency into the improvisations and sonic sculptures.' },
      { type: 'text', content: 'Tinctures\' third work, According To The Tides is scheduled for release in 2025.' },
      { type: 'text', content: 'Tinctures has performed across India and in Germany at a wide variety of venues ranging from house concerts and music schools to auditoriums.' },
      { type: 'links', content: [
        { text: 'www.tincturesmusic.com', url: 'https://www.tincturesmusic.com' },
        { text: 'www.amanmahajanmusic.com', url: 'https://www.amanmahajanmusic.com' },
        { text: 'www.nishadpandey.com', url: 'https://www.nishadpandey.com' },
      ]},
      { type: 'band', title: 'Band', members: [
        'Nishad Pandey - guitar',
        'Aman Mahajan - piano',
      ]},
    ],
    image: '/bands/04_Tinctures.jpg',
  },
  'maarten-and-holger': {
    title: 'Maarten and Holger',
    date: '8th March 2025',
    venue: 'Vinyl & Brew, Chennai',
    image: '/bands/05_MVHJ.webp',
    description: [
      { type: 'text', content: 'Maarten Visser and Holger Jetter have collaborated intensively over the last 15 years in different line-ups and as a duo. The last duo show dates back to the 2019 Madras Jazz Festival, where they played tunes from the Pixie-Suite, a set of tunes Maarten exclusively wrote for the festival. The music is an exploration in sound as well as an invitation to improvise with this sound. For this AlterNation show the duo will reprise these tunes and see where pixies will lead them.' },
      { type: 'band', title: 'Band', members: [
        'Maarten Visser - saxophone',
        'Holger Jetter - bass',
      ]},
    ],
  },
  'oto3': {
    title: 'oto.3',
    date: '26th April 2025',
    image: '/bands/06_OTO3.webp',
    venue: 'Vinyl & Brew, Chennai',
    description: [
      { type: 'text', content: 'A decade after their last performance, Robbert van Hulzen (Netherlands), Holger Jetter (Germany/India), and Maarten Visser (Netherlands/India) felt it was the perfect moment to embark on a new oto.3 journey. With the addition of an electric double bass, fresh experiments, innovative sound structures, and a specially composed 50-minute piece, they are set to premiere their latest creation at AlterNation.' },
      { type: 'band', title: 'Band', members: [
        'Maarten Visser - saxophones',
        'Holger Jetter - bass',
        'Robbert van Hulzen - drums',
      ]},
    ],
  },
  'flying-4': {
    title: 'Flying 4',
    date: '19th July 2025',
    venue: 'Vinyl & Brew, Chennai',
    description: [
      { type: 'text', content: 'Fronted by acclaimed German singer Leona Berlin, whose emotive blend of jazz, R&B and hip-hop has captivated audiences worldwide, the ensemble also features Hungarian piano virtuoso Zsigmond Gerlóczy, praised for his breathtaking improvisations and poetic depth. Joining them is Japanese bassist and composer Hiroshi Tokieda, known for his rich sonic palette spanning jazz to electronic, and Berlin-based drummer-producer Magro, whose award-winning grooves merge acoustic jazz with modern hip-hop and R&B.' },
      { type: 'band', title: 'Band', members: [
        'Leona Berlin - vocals',
        'Zsigmond Gerlóczy - piano',
        'Hiroshi Tokieda - bass',
        'Magro - drums',
      ]},
    ],
    image: '/bands/07_Flying4.webp',
  },
  'day-5': {
    title: 'Day 5',
    date: '23rd August 2025',
    venue: 'Vinyl & Brew, Chennai',
    description: [
      { type: 'text', content: 'Day 5 is a Chennai-based quartet that forges a sharp fusion of jazz, funk, and blues. The band\'s intricate and grooving sound is built on a foundation of powerful rhythms and melodic improvisation.' },
      { type: 'band', title: 'Band', members: [
        'Amitav Gautam - guitar',
        'Pranav RV - keyboards',
        'Aravind Murali - bass',
        'Dhina - drums',
      ]},
    ],
    image: '/bands/08_Day5.jpg',
  },
  'many-things-anniversary': {
    title: 'Many Things - AlterNation one year anniversary show',
    date: '20th September 2025',
    venue: 'Vinyl & Brew, Chennai',
    description: [
      { type: 'text', content: 'Many Things is a cross genre instrumental trio from Chennai, India consisting of Maarten Visser on saxophone, Aravind Murali on bass, and Manukrishnan on drums. Many Things combine a variety of musical styles such as jazz, rock, classical and funk and delicately treads the fine line between composition and improvisation. Their innovative music takes the listener on a journey, with unexpected twists and turns that never fail to surprise. Many things has played at various venues across the country.' },
      { type: 'band', title: 'Band', members: [
        'Maarten Visser - saxophone',
        'Aravind Murali - bass',
        'Manukrishnan - drums',
      ]},
    ],
    image: '/bands/09_ManyThings.jpg',
  },
  'fractured-groove': {
    title: 'Fractured Groove / Gautam Menon Quartet',
    date: '29th November 2025',
    venue: 'Vinyl & Brew, Chennai',
    description: [
      { type: 'text', content: 'Fractured Groove is an experimental band who blends intricate rhythm, melodic phrasing, and harmonic storytelling. A fusion of technical precision and emotional flow, it captures the beauty hidden in fragments - where every groove tells a story.' },
      { type: 'band', title: 'Fractured Groove', members: [
        'Samuel Christopher - guitar',
        'Akhilesh Subramanian - bass',
        'Dhina - drums',
      ]},
      { type: 'text', content: 'Gautam Menon Quartet featuring Akhilesh Subramaniam on Bass, Divyam Mehrotra on Keyboards, and Vivek Ayer on Guitar presents genre-blending ethno-jazz music that weaves the melodic depth of Carnatic music with the improvisational freedom of modern jazz. With pulsating rhythmic cycles, modal exploration, and spontaneous interplay at its core. They create music that is both rooted in tradition and alive with contemporary energy. Their sound features Carnatic-influenced composition techniques-intricate rhythmic motifs, raga-based melodies, and layered improvisation-that dovetail seamlessly with jazz harmony and groove. The result is an expressive, cinematic, and exploratory musical experience where every performance becomes a fresh conversation between cultures, instruments, and ideas.' },
      { type: 'band', title: 'Gautam Menon Quartet', members: [
        'Gautam Menon - drums',
        'Akhilesh Subramaniam - bass',
        'Divyam Mehrotra - keyboards',
        'Vivek Ayer - guitar',
      ]},
    ],
    image: '',
    images: ['/bands/10_FG.jpg', '/bands/10_GMQ.jpg'],
  },
  'mus-progeny': {
    title: "Mu's Progeny",
    date: '13th December 2025',
    venue: 'Vinyl & Brew, Chennai',
    description: [
      { type: 'text', content: 'Mu\'s Progeny bends toward a future on the verge of non-existence. Drums, shō, and Fryprone-three voices unprepared for one another-collide to summon echoes of archaic memory and the shimmer of future possibility. The music forms a kind of democracy: sound, interaction, and community woven into a single, unpredictable body. It\'s colours and cultural memories anchor it, yet its style belongs to no lineage but its own.' },
      { type: 'text', content: 'Rhythmic unity surfaces, then fractures. Violence coexists with tenderness. Melody, counterpoint, and harmony drift through the space like transmissions from a planet our ancestors once imagined. On stage, something is born-briefly, irretrievably. It lives only in the moment of performance and in the vibrations left behind on the walls.' },
      { type: 'band', title: 'Band', members: [
        'Dirk Wachtelaer - drums',
        'Dirk Stromberg - fryprone',
        'Fabio Rambelli - shō',
      ]},
    ],
    image: '/bands/11_MusProgeny.jpg',
  },
};
