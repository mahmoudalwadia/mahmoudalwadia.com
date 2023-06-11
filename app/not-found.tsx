import './globals.css';

import Logo from './components/Logo';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex items-center flex-col justify-center min-h-screen">
      <h1 className="mb-3">404</h1>
      <Logo crazyModeEnabled />
      <p className="text-[16px] leading-[24px] font-light max-w-[200px] text-center mt-6">
        What you looking for is not exist, you should back
      </p>
      <Link href="/" className="animate-pulse">
        HOME
      </Link>
    </main>
  );
}
