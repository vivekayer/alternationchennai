import { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: "AlterNation Chennai - About Us",
  description: "Learn about AlterNation, a Chennai-based musical partnership dedicated to supporting jazz and improvised music",
};

export default function About() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Who we are</h1>

      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">About AlterNation</h2>
          <p className="text-gray-300">
            AlterNation is a Chennai-based musical partnership and social
            enterprise, founded by four friends-musicians-volunteers, that aims
            to support and grow a scene and community of independent,
            alternative, contemporary, jazz original and improvised music in
            Chennai. Through showcasing the best original jazz artists, and jazz
            inspired music from Chennai and beyond, AlterNation hopes to build a
            listening community, to encourage more spaces to hold events, and
            encourage more local artists to learn and develop the jazz genre in
            Chennai.
          </p>
          <p className="text-gray-300">
            Since our formation in September 2024, AlterNation has put on 11
            shows in Chennai at the Vinyl and Brew café in the heart of the
            city. These include professional artists showcasing their original
            and often provocative work in jazz-related, improvised and
            contemporary genres. AlterNation is collaborating with other music
            venues, artists, promoters and managers who are also working to host
            and promote jazz music in Chennai.
          </p>
          <p className="text-gray-300">
            As a culmination of the work of 2024 and 2025, AlterNation is
            hosting our first ever Jazz Festival right here in Chennai featuring
            some of the most exciting music from artists in the Chennai Jazz
            scene.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Join Us</h2>
          <p className="text-gray-300 mb-6">
            Join us and help us to continue to grow the Jazz scene in Chennai
            by:
          </p>

          <ul className="space-y-4">
            <li>
              <strong className="text-white">FOLLOW</strong> AlterNation on{" "}
              <Link
                href="https://instagram.com/alternationchennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-sm mr-1" />
                Instagram
              </Link>
              ,{" "}
              <Link
                href="https://www.youtube.com/@alternationchennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-sm mr-1" />
                YouTube
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.facebook.com/alternationchennai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-sm mr-1" />
                Facebook
              </Link>
            </li>

            <li>
              <strong className="text-white">JOIN</strong> AlterNation as a
              Citizen of AlterNation by joining our{" "}
              <Link
                href="https://chat.whatsapp.com/LIX1rOMBejL5yPVuTLj35W"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Whatsapp Group
              </Link>
            </li>

            <li>
              <strong className="text-white">SUPPORT</strong> AlterNation by
              coming to our shows! Find out about our monthly shows from our
              Instagram, Whatsapp, Facebook
            </li>

            <li>
              <strong className="text-white">SHOUT ABOUT</strong> AlterNation to
              your friends and family, by telling them all about AlterNation and
              encouraging them to follow us and come to the shows
            </li>

            <li>
              <strong className="text-white">JAM WITH</strong> AlterNation come
              to one of our{" "}
              <Link
                href="/jazz-jams"
                className="text-blue-400 hover:text-blue-300"
              >
                AlterNation Jazz Jams
              </Link>
            </li>

            <li>
              <strong className="text-white">PLAY WITH</strong> AlterNation we
              are always interested in new professional Jazz artists in Chennai.
              So get in touch, or check out the{" "}
              <Link
                href="/weekly-jazz-workshops"
                className="text-blue-400 hover:text-blue-300"
              >
                Weekly Jazz Workshops
              </Link>{" "}
              if you are a musician interested in developing your Jazz chops.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
