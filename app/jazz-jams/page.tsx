import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: "AlterNation Chennai - Jazz Jams",
  description: "Join AlterNation's jazz jam sessions for musicians and jazz enthusiasts in Chennai",
};

export default function JazzJams() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">AlterNation Jazz Jams</h1>

      <div className="space-y-6 text-gray-300">
        <p>
          AlterNation loves to create opportunities for musicians to play and
          explore music together, so we regularly hold Jazz Jams in Chennai,
          facilitated by us and musicians from the Tuesday Jazzers Collective.
        </p>

        <p>
         All instruments and voices are welcome at the AlterNation Jazz Jams.
          Our friendly house band will accompany the jam sessions, guiding players
          through a list of popular jazz standards. We ask that you have some
          knowledge of Jazz and improvisation in order to be able to fully join
          in. We provide the list of songs in advance so you can come prepared for the ones that interest you.
        </p>

        <p>
          The sessions are absolutely FREE, and open for all to come to listen
          and watch the great jazz music created by our Jazz-Jammers.
        </p>
      </div>

      <div className="pt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Jazz Standards Playlist</h2>
        <p className="text-gray-300 mb-4">
          Here's a curated playlist of some of the jazz standards we play at our jam sessions:
        </p>
        <Link
          href="https://youtube.com/playlist?list=PLIWef6r3MxK-vJZNPVn0_vtCSDsM2YrCc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 text-lg font-semibold inline-block"
        >
          View Playlist on YouTube →
        </Link>
      </div>

      <div className="pt-8">
        <Image
          src="/jazzjam.jpg"
          alt="Jazz Jams"
          width={1200}
          height={800}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="space-y-6 text-gray-300">
        <div className="pt-6">
          <p>
            Follow us on{' '}
            <Link
              href="https://www.instagram.com/alternationchennai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-sm mr-1" />
              Instagram
            </Link>{' '}
            or{' '}
            <Link
              href="https://chat.whatsapp.com/LIX1rOMBejL5yPVuTLj35W"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              join our Whatsapp group
            </Link>{' '}
            to hear about all upcoming AlterNation Jazz Jams.
          </p>
        </div>
      </div>
    </section>
  );
}
