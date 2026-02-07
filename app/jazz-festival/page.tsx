import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: "AlterNation Chennai - Jazz Festival",
  description: "Experience the AlterNation Jazz Festival featuring the most exciting music from the Chennai jazz scene",
};

export default function JazzFestival() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">AlterNation Jazz Festival</h1>

      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            About the Festival
          </h2>
          <p>
            On Saturday, January 31st, 2026, AlterNation presented a full day of
            outstanding contemporary, jazz, original, and improvised music from
            India. The festival featured performances by Jatayu, Suman Sridhar
            and the Black Mamba, and Many Things, along with showcase sets from
            the Tuesday Jazzers Collective. Hosted on an outdoor stage in the
            Zol Gardens at The Palomar by Crossway on Chennai's East Coast Road,
            the event ran from 3pm to 11pm.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Jatayu</h3>
            <p>
              Jatayu is a genre-blurring four-piece band from Chennai, India,
              known for their unique sound shaped at the crossroads of Carnatic
              music, jazz, rock, and modern improvisation. Jatayu's performance
              will launch their new EP, Jewel Tones, a project that reimagines
              traditional Carnatic compositions through the lens of contemporary
              jazz and groove-driven improvisation.
            </p>
            <p className="mt-4">
              <Link
                href="https://instagram.com/jatayusounds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                @jatayusounds
              </Link>
            </p>
            <p className="mt-2">
              <Link
                href="https://www.youtube.com/@Jatayu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                Video
              </Link>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/bands/Jatayu_ANJ.jpg"
              alt="Jatayu"
              width={600}
              height={800}
              className="w-3/4 h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Suman Sridhar and The Black Mamba
            </h3>
            <p>
              Suman Sridhar is a singer and award-winning artist from Mumbai who
              fuses jazz, pop, Indian classical, opera, spoken word in her
              performances. Her band includes Subid Khan on guitar and Vaibhav
              Wavikar on drums.
            </p>
            <p className="mt-4">
              <Link
                href="https://instagram.com/sumansridhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                @sumansridhar
              </Link>
            </p>
            <p className="mt-2">
              <Link
                href="https://www.youtube.com/@SumanSridhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                Video
              </Link>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/bands/SumanSridhar_ANJ.jpg"
              alt="Suman Sridhar and The Black Mamba"
              width={600}
              height={800}
              className="w-3/4 h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Many Things</h3>
            <p>
              Chennai-based Avant Garde Jazz trio, Many Things are veterans of
              the Chennai Jazz scene. In 2025, they released their second studio
              album, Two Many Things. Many Things combine jazz, rock, classical
              and funk and delicately treads the fine line between composition
              and improvisation.
            </p>
            <p className="mt-4">
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
            <p className="mt-2">
              <Link
                href="https://www.youtube.com/@manythingschennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                @manythingschennai
              </Link>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/bands/ManyThings_ANJ.jpg"
              alt="Many Things"
              width={600}
              height={800}
              className="w-3/4 h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              The Tuesday Jazzers Collective
            </h3>
            <p>
              Chennai's up and coming Jazz musicians, will open the show in the
              afternoon, performing three sets of well loved, classic American
              jazz music.
            </p>
            <p className="mt-4">
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
          <div className="flex justify-center">
            <Image
              src="/bands/TJC_ANJ.jpg"
              alt="The Tuesday Jazzers Collective"
              width={600}
              height={800}
              className="w-3/4 h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Live Visual Art
            </h3>
            <p>
              During the festival, Chennai-based new media art duo, Television
              Dust will create a series of 'jazz paintings', live visual
              compositions that interpret each artist's music in real time.
            </p>
            <p className="mt-4">
              <Link
                href="https://instagram.com/television_dust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                @television_dust
              </Link>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/bands/TelevisionDust_ANJ.jpg"
              alt="Television Dust"
              width={600}
              height={800}
              className="w-3/4 h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="text-sm text-gray-400 mt-8 pt-8 border-t border-gray-700">
          <p className="mb-2">
            <strong>Powered by</strong>{" "}
            <Link
              href="https://instagram.com/the.mk.network"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              @the.mk.network
            </Link>
          </p>
          <p className="mb-2">
            <strong>Promo partners</strong>{" "}
            <Link
              href="https://instagram.com/thechennaiscene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              @thechennaiscene
            </Link>{" "}
            <Link
              href="https://instagram.com/metalchennai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              @metalchennai
            </Link>{" "}
            <Link
              href="https://instagram.com/houseoftofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              @houseoftofficial
            </Link>
          </p>
          <p className="mb-2">
            <strong>Design</strong>{" "}
            <Link
              href="https://instagram.com/_chivaz_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              @_chivaz_
            </Link>
          </p>
          <p>
            <strong>Venue</strong>{" "}
            <Link
              href="https://instagram.com/thepalomarbycrossway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              @thepalomarbycrossway
            </Link>
            ,{" "}
            <Link
              href="https://instagram.com/thespotted_deer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              @thespotted_deer
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex justify-center">
          <Image
            src="/an_jazz_festival.jpg"
            alt="AlterNation Jazz Festival Poster"
            width={600}
            height={800}
            className="w-2/3 h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
