import Logo from './components/Logo';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{backgroundColor: '#0f0f0e'}}>
      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Logo />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}