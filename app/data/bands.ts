export type Band = {
  name: string;
  image?: string;
  video?: string;
  description?: string;
  members?: string[];
  links?: { text: string; url: string }[];
};

export const bands: Band[] = [
  {
    name: "Gautam Menon Quartet",
    image: "/bands/GautamMenonQuartet.jpg",
    video: "https://www.youtube.com/embed/Ch7qC3q2iSI?rel=0",
    description:
      "Gautam Menon Quartet presents genre-blending ethno-jazz music that weaves the melodic depth of Carnatic music with the improvisational freedom of modern jazz. With pulsating rhythmic cycles, modal exploration, and spontaneous interplay at its core, they create music that is both rooted in tradition and alive with contemporary energy. Their sound features Carnatic-influenced composition techniques - intricate rhythmic motifs, raga-based melodies, and layered improvisation - that dovetail seamlessly with jazz harmony and groove. The result is an expressive, cinematic, and exploratory musical experience where every performance becomes a fresh conversation between cultures, instruments, and ideas.",
    members: [
      "Gautam Menon - drums",
      "Akhilesh Subramanian - bass",
      "Divyam Mehrotra - keyboards",
      "Vivek Ayer - guitar",
    ],
  },
  {
    name: "The Jazz Affair",
    image: "/bands/TheJazzAffair.png",
    video: "https://www.youtube.com/embed/dRj4RLhzcA8?rel=0",
    description:
      "A dynamic four-piece ensemble founded by violinist Neil Sha. Known for their improvisational jazz, all members are part of the Tuesday Jazzers Collective and have performed at venues across Chennai including Alliance Française of Madras and the Inko Centre.",
    members: [
      "Neil Sha - violin",
      "Divyam Mehrotra - keyboards",
      "Akhilesh Subramanian - bass",
      "Gautam Menon - drums",
    ],
  },
  {
    name: "The Living Room Trio",
    image: "/bands/TheLivingRoomTrio.jpg",
    video: "https://www.youtube.com/embed/sYI4EWMU2_8?rel=0",
    description:
      "The Living Room Trio is a jazz ensemble based in Chennai with three talented musicians. Their repertoire is entirely dedicated to traditional jazz and improvised music, bringing timeless classics for the jazz-craving audience.",
    members: [
      "Harish Vijaya - vocals",
      "Sam Christopher - guitar",
      "Gautam Menon - drums",
    ],
  },
  {
    name: "Vivek Ayer Trio",
    image: "/bands/VivekAyerTrio.jpg",
    video: "https://www.youtube.com/embed/6XCrdF_5aQ8?rel=0",
    members: [
      "Vivek Ayer - guitar",
      "Akhilesh Subramanian - bass",
      "Gautam Menon - drums",
    ],
  },
];
