import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: "AlterNation Chennai - Weekly Jazz Workshops",
  description: "Develop your jazz skills with AlterNation's weekly workshops in Chennai",
};

export default function WeeklyJazzWorkshops() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Weekly Jazz Workshops</h1>

      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Weekly Jazz Workshops in Chennai
          </h2>
          <p>
            Maarten Visser, the acclaimed Saxophonist and composer, runs weekly
            workshops for musicians to come together to learn and develop
            fundamental jazz music skills, improvisation, harmony and
            performance. These workshops are run in Adyar, Chennai in the early
            evening and are open to all, with only a small monthly fee expected.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Workshop Schedule
          </h2>
          <div className="space-y-4">
            <p>
              <strong>Tuesday Workshop:</strong> For intermediate musicians
            </p>
            <p>
              <strong>Wednesday Workshop:</strong> For beginners
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
          <p>
            Please contact <strong>Maarten Visser</strong> directly for
            enquiries on the workshop, what you need to know, and how to join.
          </p>
          <p>
            <Link
              href="https://instagram.com/mista_viza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              @Mista_viza
            </Link>
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Image
            src="/tuesdayworkshop.jpg"
            alt="Weekly Jazz Workshops"
            width={800}
            height={600}
            className="w-4/5"
          />
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
