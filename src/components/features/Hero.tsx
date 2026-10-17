import Image from 'next/image';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <div className="flex bg-[#EDF4FC] p-12">
      <div className="flex flex-1 flex-col gap-10">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-0.5 w-7 bg-primary-bg" />
          <span className="text-sm font-medium uppercase text-primary-bg">
            Electrical Cables and Wires
          </span>
        </div>
        <h1 className="text-[72px] font-roboto font-bold leading-[0.90] text-primary-text">
          Reliable Electrical Cables. Built for Performance.
        </h1>
        <p className="text-lg">
          High-quality PVC and aluminium wires designed for dependable
          installations, from residential house wiring to commercial electrical
          projects.
        </p>
        <div className="flex gap-2">
          <Button
            text="Explore Our Products"
            bgColor="bg-primary-bg"
            textColor="text-white"
          />
          <Button
            text="Request a Quote"
            bgColor="bg-white"
            textColor="text-primary-text"
          />
        </div>
        <h2  className="text-primary-text text-lg">
          RS Ever Bound · Electrical cable trader
        </h2>
      </div>
      <div className="relative flex-1">
        <Image
          src="/hero.png"
          alt="Premium Electrical Cables Showcase"
          fill
          sizes="50vw"
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
