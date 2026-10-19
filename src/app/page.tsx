import { ourApplications, aboutSectionIcons, categories } from '../../data';
import Hero from '@/src/components/features/Hero';
import OurProducts from '../components/features/products/OurProducts';
import ProductHighlights from '../components/features/products/ProductHighlights';
import Image from 'next/image';
import Svg from '../components/shared/Svg';
import ContactSection from '../components/features/ContactSection';
import Button from '../components/shared/Button';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="w-full bg-white px-6 py-12 text-primary-text sm:px-8 sm:py-16 lg:px-[5.2%] lg:py-24">
        <div>
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-0.5 w-7 shrink-0 bg-primary-bg" />
                <span className="text-sm font-medium uppercase text-primary-bg">
                  Our Range
                </span>
              </div>
              <h2 className="max-w-full text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                Find your wire category
              </h2>
            </div>
            <p className="w-full text-base leading-7 text-primary-text/80 sm:text-lg md:max-w-95 lg:max-w-115 lg:pt-6">
              Browse our product categories, or share your requirements with us
              for a product enquiry.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-x-[3%]">
            {categories.map((category) => (
              <div
                key={category}
                className="flex min-w-0 items-center justify-between gap-4 border-b border-[#E5EDF7] py-5"
              >
                <span className="text-base font-medium sm:text-lg">
                  {category}
                </span>
                <span className="shrink-0 text-2xl text-primary-bg">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurProducts />

      <section className="w-full px-5 py-12 text-primary-text sm:px-8 sm:py-16 lg:px-[5.2%] lg:py-20">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-0.5 w-5 shrink-0 bg-primary-bg" />
          <span className="text-xs font-semibold uppercase text-secondary-text sm:text-sm">
            Where They&apos;re Used
          </span>
        </div>
        <h2 className="mb-8 max-w-3xl text-3xl leading-tight font-bold sm:text-4xl lg:mb-10 lg:text-5xl">
          Match the wire to the setting
        </h2>
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
          {ourApplications.map((application) => (
            <div
              key={application.id}
              className="flex min-w-0 flex-col border-t border-[#E5EDF7] py-5 sm:py-6"
            >
              <div className="mb-4 text-secondary-text">
                <Svg
                  paths={application.iconPaths}
                  width={26}
                  height={26}
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="none"
                />
              </div>
              <h3 className="mb-3 text-lg font-semibold sm:text-xl">
                {application.title}
              </h3>
              <p className="mb-4 text-sm leading-6 text-primary-text/80 sm:text-base">
                {application.description}
              </p>
              <p className="mt-auto text-sm leading-5 font-semibold text-secondary-text">
                {application.wire}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ProductHighlights />
      <section className="flex w-full flex-col gap-8 border-b border-[#E5EDF7] bg-white px-5 py-12 text-primary-text sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:gap-12 lg:px-[5.2%] lg:py-16 xl:gap-16">
        <div className="relative h-65 w-full overflow-hidden rounded-sm sm:h-95 lg:h-100 lg:flex-1">
          <Image
            src="/hero-about.png"
            alt="Electrician installing electrical wires"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 w-full flex-col lg:flex-1">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-0.5 w-5 shrink-0 bg-primary-bg" />
            <span className="text-xs font-semibold uppercase text-secondary-text sm:text-sm">
              About RS Ever Bound
            </span>
          </div>
          <h2 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl lg:mb-7 lg:text-5xl">
            Electrical cables.
            <br />
            Focused on your needs.
          </h2>
          <p className="mt-2 text-sm leading-6 text-primary-text/80 sm:text-base sm:leading-7 lg:mt-5">
            RS Ever Bound is an electrical cable trader supplying dependable
            products for residential and commercial electrical installations.
          </p>
          <div className="my-5 h-px w-full bg-[#E8EEF6]" />
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDF4FC] text-secondary-text">
              <Svg
                paths={[...aboutSectionIcons.products]}
                width={22}
                height={22}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <p className="text-sm leading-6 sm:text-base">
              PVC wires, aluminium wires in various specifications, electrical
              house wires, and multistrand wires
            </p>
          </div>
          <div className="mt-4 flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDF4FC] text-secondary-text">
              <Svg
                paths={[...aboutSectionIcons.location]}
                width={22}
                height={22}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <p className="pt-1 text-sm leading-6 sm:text-base">
              Shahgarh, Sagar, Madhya Pradesh, India
            </p>
          </div>
          <div className="mt-6">
            <Button
              text="Get in touch"
              bgColor="bg-primary-bg"
              textColor="text-white"
            />
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
