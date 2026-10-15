import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex bg-[#EDF4FC] p-12">
      <div className="flex flex-col flex-1 gap-10 ">
        <h2 className="text-primary-bg">Electricals Cables & Wires</h2>
        <h1 className="text-[72px] font-roboto text-primary-text font-bold line leading-[0.90]">
          Reliable Electrical Cables. Built for Performance.
        </h1>
        <p>
          High-quality PVC and aluminium wires designed for dependable
          installations, from residential house wiring to commercial electrical
          projects.
        </p>
        <div className="flex gap-2">
          <button className="bg-primary-bg text-[#ffffff] p-3 rounded-[2px]">
            Explore Our Products
          </button>
          <button className="bg-[#ffffff]  p-3 rounded-[2px]">
            Request a Quote
          </button>
        </div>
        <h2 className="text-primary-text">
          RS Ever Bound · Electrical cable trader
        </h2>
      </div>
      <div className="relative flex-1 w-[30%]">
        <Image
          src="/hero.png"
          alt="Premium Electrical Cables Showcase"
          // width={800}
          // height={1200}
          fill={true}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
