import { Metadata } from 'next';
import Logo from './components/Logo';

export const metadata: Metadata = {
  title: "AlterNation Chennai - Jazz and improvised, contemporary music",
  description: "Independent, alternative events showcasing the best contemporary, jazz original and improvised music in Chennai",
};

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
          <Logo />
        </div>
      </main>
    </div>
  );
}