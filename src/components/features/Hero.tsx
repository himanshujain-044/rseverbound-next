import Image from 'next/image';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <section className="flex flex-col gap-10 bg-[#EDF4FC] px-6 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:gap-8 lg:px-12 lg:py-16 xl:px-16">
      <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-8">
        <div className="flex items-center gap-3">
          <span className="h-0.5 w-7 shrink-0 bg-primary-bg" />
          <span className="text-xs font-medium uppercase tracking-wider text-primary-bg sm:text-sm">
            Electrical Cables and Wires
          </span>
        </div>
        <h1 className="font-roboto text-4xl leading-tight font-bold text-primary-text sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-[72px] xl:leading-[0.95]">
          Reliable Electrical Cables. Built for Performance.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-primary-text/80 sm:text-lg">
          High-quality PVC and aluminium wires designed for dependable
          installations, from residential house wiring to commercial electrical
          projects.
        </p>
        <div className="flex flex-wrap items-center gap-3">
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
        <h2 className="text-sm font-medium text-primary-text sm:text-base">
          RS Ever Bound <span className="mx-1">·</span>
          <span className="font-normal">Electrical cable trader</span>
        </h2>
      </div>
      <div className="relative h-65 w-full flex-1 sm:h-90 lg:h-110 xl:h-125">
        <Image
          src="/hero-home.png"
          alt="Premium Electrical Cables Showcase"
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
