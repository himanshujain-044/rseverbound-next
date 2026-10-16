import Image from 'next/image';

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
        <div>Home</div>
        <div>Services</div>
        <div>About</div>
        <div>Contact</div>
        <div className="bg-primary-bg p-2.5 rounded-[2px] text-white ">
          Request a Quote
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
