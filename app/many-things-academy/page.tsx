import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function ManyThingsAcademy() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Many Things Academy</h1>

      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">About</h2>
          <p>
            Many Things Academy offers music education and training programs for
            musicians interested in contemporary jazz, rhythm, harmony and
            improvisation. Learn from experienced musicians who are actively
            performing in the Chennai music scene.
          </p>
        </div>

        <div>
          <p>
            Many Things Academy focuses on developing musical skills across
            various instruments including saxophone, bass, drums, and other
            instruments. The academy emphasizes improvisation, composition, and
            ensemble playing techniques.
          </p>
        </div>

        <div className="flex gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              Previous Workshops
            </h2>
            <ul className="space-y-2 list-disc list-inside mb-6">
              <li>Jazz Fundamentals Workshop</li>
              <li>The Shape Of Rhythm</li>
              <li>Blues - A Jazz Connection</li>
              <li>Workshop for Saxophonists</li>
            </ul>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Connect</h2>
              <p>
                <Link
                  href="https://instagram.com/manythingsmadras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                  @manythingsmadras
                </Link>
              </p>
            </div>
          </div>
          <div className="flex-1 pr-8">
            <img
              src="/manythingsacademy1.jpg"
              alt="Many Things Academy"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
