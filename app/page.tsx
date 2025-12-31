import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 min-h-auto sm:min-h-screen">
      <main className="w-full max-w-2xl">
        <div className="text-center mt-2 sm:mt-12 mb-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to AlterNation
          </h1>
          <p className="text-xl text-gray-300">
            A space for Jazz and original, improvised music in Chennai.
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/jazz-festival">
            <Image
              src="/an_jazz_festival.jpg"
              alt="AlterNation Jazz Festival"
              width={600}
              height={400}
              className="rounded-lg shadow-lg hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}