import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Logo using SVG from public folder */}
        <div className="relative w-56 h-56 shadow-2xl rounded-lg overflow-hidden">
          <Image
            src="/logo.jpg"
            alt="AlterNation Logo"
            width={224}
            height={224}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}