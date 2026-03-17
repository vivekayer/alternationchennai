import { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: "AlterNation Chennai - Shows",
  description: "Explore AlterNation's past jazz shows in Chennai",
};

export default function ShowsLanding() {
  const shows = [
    { title: 'AlterNation Jazz Festival', slug: 'jazz-festival' },
    { title: "Mu's Progeny", slug: 'mus-progeny' },
    { title: 'Fractured Groove / Gautam Menon Quartet', slug: 'fractured-groove' },
    { title: 'Many Things - AlterNation one year anniversary show', slug: 'many-things-anniversary' },
    { title: 'Day 5', slug: 'day-5' },
    { title: 'Flying 4', slug: 'flying-4' },
    { title: 'oto.3', slug: 'oto3' },
    { title: 'Maarten and Holger', slug: 'maarten-and-holger' },
    { title: 'Tinctures', slug: 'tinctures' },
    { title: 'Beginnings', slug: 'beginnings' },
    { title: 'Descarga', slug: 'descarga' },
    { title: 'Many Things', slug: 'many-things' },
  ];

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">AlterNation Jazz Shows</h1>

      <div className="space-y-8">
        <p className="text-gray-300">
          Follow us on{" "}
          <Link
            href="https://www.instagram.com/alternationchennai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 inline"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-sm mr-1" />
            Instagram
          </Link>{" "}
          or{" "}
          <Link
            href="https://chat.whatsapp.com/LIX1rOMBejL5yPVuTLj35W"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            join our Whatsapp group
          </Link>{" "}
          to hear about all upcoming AlterNation shows.
        </p>

        <div>
          <p className="text-gray-300 mb-6">
            Explore our past shows.
          </p>

          <ul className="space-y-3">
            {shows.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/shows/${s.slug}`}
                  className="text-lg text-blue-400 hover:text-blue-300"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
