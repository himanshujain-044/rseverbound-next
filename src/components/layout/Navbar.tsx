import Image from 'next/image';
import Button from '../shared/Button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-8">
      <div className="flex justify-center items-center gap-0.5">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="object-contain w-auto"
          loading="eager"
        />
        <span className="text-primary-text font-bold">RS Ever Bound</span>
      </div>

      <div className="flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Button
          text="Request a Quote"
          bgColor="bg-primary-bg"
          textColor="text-white"
        />
      </div>
    </nav>
  );
};
export default Navbar;
