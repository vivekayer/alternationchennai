import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { knownShows } from '@/app/data/shows';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(knownShows).map((slug) => ({
    slug,
  }));
}

export default async function ShowPage({ params }: Props) {
  const { slug } = await params;
  const show = knownShows[slug as keyof typeof knownShows];
  if (!show) return notFound();

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/shows" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
        ← Back to Shows
      </Link>

      <h1 className="text-4xl font-bold mb-8">{show.title}</h1>

      <div className="space-y-4 text-gray-300">
        <div>
          <p className="text-lg">
            <strong className="text-white">Date:</strong> {show.date}
          </p>
        </div>
        <div>
          <p className="text-lg">
            <strong className="text-white">Venue:</strong> {show.venue}
          </p>
        </div>
        {show.description && (
          <div className="mt-8 pt-8 border-t border-gray-700 space-y-4">
            {typeof show.description === 'string' ? (
              <p className="whitespace-pre-wrap">{show.description}</p>
            ) : Array.isArray(show.description) ? (
              <>
                {show.description.map((item, idx) => {
                  if (item.type === 'text' && typeof item.content === 'string') {
                    return (
                      <p key={idx} className="leading-relaxed">
                        {item.content}
                      </p>
                    );
                  } else if (item.type === 'links' && Array.isArray(item.content)) {
                    return (
                      <p key={idx} className="space-x-4 flex flex-wrap gap-4">
                        {item.content.map((link, linkIdx) => (
                          <Link
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                          >
                            {link.text}
                          </Link>
                        ))}
                      </p>
                    );
                  }
                  return null;
                })}
                </>
            ) : null}
          </div>
        )}
        {Array.isArray(show.description) && (
          <div className="mt-8 space-y-6">
            {show.description.map((item, idx) => {
              if (item.type === 'band' && item.title && Array.isArray(item.members)) {
                return (
                  <div key={idx} className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.members.map((member, memberIdx) => (
                        <li key={memberIdx} className="text-gray-300">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
        {show.image && (
          <div className="mt-8 flex justify-center">
            <Image
              src={show.image}
              alt={show.title}
              width={800}
              height={600}
              className="w-4/5 h-auto rounded-lg"
            />
          </div>
        )}
        {'images' in show && show.images && Array.isArray(show.images) && (
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            {show.images.map((imgPath: string, idx: number) => (
              <Image
                key={idx}
                src={imgPath}
                alt={`${show.title} - Image ${idx + 1}`}
                width={800}
                height={600}
                className="w-4/5 h-auto rounded-lg"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
