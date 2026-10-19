import Image from 'next/image';
import Link from 'next/link';
import Button from '../shared/Button';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  return (
    <nav className="relative z-50 flex h-20 w-full items-center justify-between bg-white px-4 sm:px-6 lg:px-8">
      <Link href="/" className="flex shrink-0 items-center gap-0.5">
        <Image
          src="/logo.png"
          alt="RS Ever Bound Logo"
          width={60}
          height={60}
          className="h-12 w-12 object-contain sm:h-15 sm:w-15"
          priority
        />
        <span className="whitespace-nowrap text-base font-bold text-primary-text sm:text-lg">
          RS Ever Bound
        </span>
      </Link>
      <div className="hidden items-center gap-4 min-[1024px]:flex xl:gap-6">
        <Link
          href="/"
          className="whitespace-nowrap text-sm font-medium text-primary-text hover:text-secondary-text"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="whitespace-nowrap text-sm font-medium text-primary-text hover:text-secondary-text"
        >
          Services
        </Link>
        <Link
          href="/about-us"
          className="whitespace-nowrap text-sm font-medium text-primary-text hover:text-secondary-text"
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="whitespace-nowrap text-sm font-medium text-primary-text hover:text-secondary-text"
        >
          Contact Us
        </Link>
        <Button
          text="Request a Quote"
          bgColor="bg-primary-bg"
          textColor="text-white"
          className="shrink-0 px-5 py-3 shadow-md"
        />
      </div>
      <div className="min-[1024px]:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
