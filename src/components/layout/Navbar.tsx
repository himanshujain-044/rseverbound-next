import Image from 'next/image';
import Button from '../shared/Button';

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
        <span className="whitespace-nowrap text-lg font-bold text-primary-text">
          RS Ever Bound
        </span>
      </div>
      <div className="flex gap-5 items-center">
        <div>Home</div>
        <div>Services</div>
        <div>About</div>
        <div>Contact</div>
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
