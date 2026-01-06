import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function TuesdayJazzersCollective() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">The Tuesday Jazzers Collective</h1>

      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <div>
          <p className="text-lg text-white mb-4">
            AlterNation is proud to support the Tuesday Jazzers Collective.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Artists</h2>
          <p className="text-lg">
            <strong>Various Artists</strong> – Saxophones, flute, violin, keyboards, vocals, guitar, bass, drums
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">About</h2>
          <p className="mb-4">
            The Tuesday Jazzers Collective comprises musicians from all musical backgrounds, experience and instruments, 
            bound together by a love of Jazz. The collective comes together every Tuesday in a workshop in Chennai, mentored 
            by acclaimed Saxophonist and composer Maarten Visser, to learn and develop fundamental jazz music skills, 
            improvisation, harmony and performance.
          </p>
          <p className="mb-4">
            From Trad, to Swing, to Blues, to Bebop, to Bossa Nova to Modal, all the way to Free and Contemporary Jazz. 
            Instruments include, Saxophones, violin, piano, drums, guitars, bass, vocals and flute, among others. Bands 
            formed from the Collective over the last year include The Jazz Affair, Variations, Fractured Groove and the 
            Gautam Menon Quartet.
          </p>
          <p className="mb-4">
            In January 2026, the Tuesday Jazzers Collective will open the AlterNation Jazz festival.
          </p>
          <p>
            For more information on the Collective, the music and musicians, and for enquiries on how to book the artists 
            for shows, please DM at @tuesdayjazzerscollective
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Connect</h2>
          <p>
            <Link
              href="https://instagram.com/tuesdayjazzerscollective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              @Tuesdayjazzerscollective
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
