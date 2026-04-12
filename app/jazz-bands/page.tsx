import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { bands, slugify } from '@/app/data/bands';

export const metadata: Metadata = {
  title: 'AlterNation Chennai - Jazz Bands',
  description: 'Jazz bands championed by AlterNation Chennai',
};

export default function JazzBands() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Jazz Bands</h1>
      <p className="text-gray-300 mb-2">
        Bands championed by AlterNation Chennai.
      </p>
      <p className="text-gray-400 mb-10 text-sm">
        For enquiries contact alternationchennai&#64;gmail&#46;com
      </p>

      {bands.length === 0 ? (
        <p className="text-gray-500">Coming soon.</p>
      ) : (
        <div className="space-y-16">
          {bands.map((band) => (
            <div key={band.name}>
              {/* Row 1: Band name */}
              <h2 className="text-3xl font-bold text-white mb-6">
                <Link href={`/jazz-bands/${slugify(band.name)}`} className="hover:text-blue-400 transition-colors">
                  {band.name}
                </Link>
              </h2>

              {/* Row 2: Image + Video */}
              {(band.image || band.video) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {band.image && (
                    <div className="relative w-full aspect-square">
                      <Image
                        src={band.image}
                        alt={band.name}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  {band.video && (
                    <div className="relative w-full aspect-square">
                      <iframe
                        src={band.video}
                        title={`${band.name} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full rounded-lg"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Row 3: Description */}
              {band.description && (
                <p className="text-gray-300 text-base leading-relaxed">{band.description}</p>
              )}

              {band.members && band.members.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
                  {band.members.map((member) => (
                    <li key={member} className="text-sm text-gray-400">{member}</li>
                  ))}
                </ul>
              )}

              {band.links && band.links.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-4">
                  {band.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
