import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { bands, slugify } from '@/app/data/bands';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return bands.map((band) => ({ slug: slugify(band.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const band = bands.find((b) => slugify(b.name) === slug);
  if (!band) return {};
  return {
    title: `AlterNation Chennai - ${band.name}`,
    description: band.description,
  };
}

export default async function BandPage({ params }: Props) {
  const { slug } = await params;
  const band = bands.find((b) => slugify(b.name) === slug);
  if (!band) notFound();

  return (
    <section className="container mx-auto px-4 py-12 max-w-5xl">
      <Link
        href="/jazz-bands"
        className="text-sm text-gray-400 hover:text-white transition-colors mb-8 inline-block"
      >
        ← Jazz Bands
      </Link>

      <h1 className="text-4xl font-bold text-white mb-8">{band.name}</h1>

      {(band.image || band.video) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

      {band.description && (
        <p className="text-gray-300 text-base leading-relaxed mb-6">{band.description}</p>
      )}

      {band.members && band.members.length > 0 && (
        <ul className="flex flex-wrap gap-x-6 gap-y-1 mb-8">
          {band.members.map((member) => (
            <li key={member} className="text-sm text-gray-400">{member}</li>
          ))}
        </ul>
      )}

      {band.links && band.links.length > 0 && (
        <ul className="flex flex-wrap gap-4 mb-8">
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

      {band.contact && (
        <div className="border-t border-gray-700 pt-6">
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p className="text-gray-300 text-sm">{band.contact.name}</p>
          {band.contact.instagram && (
            <a
              href={`https://www.instagram.com/${band.contact.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              @{band.contact.instagram}
            </a>
          )}
        </div>
      )}
    </section>
  );
}
