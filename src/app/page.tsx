import { OurApplications, aboutSectionIcons, categories } from '../../data';
import Hero from '@/src/components/features/Hero';
import ProductHighlights from '@/src/components/homeComponents/ProductHighlights';
import OurProducts from '@/src/components/products/OurProducts';
import SharedSvg from '@/src/components/shared/SharedSvg';
import Button from '../components/shared/Button';
import Image from 'next/image';
import ContactSection from '../components/features/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="w-full bg-white px-[5.2%] py-24 text-primary-text">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-0.5 w-7 bg-primary-bg" />
                <span className="text-sm font-medium uppercase text-primary-bg">
                  Our Range
                </span>
              </div>
              <h2 className="text-5xl font-bold">Find your wire category</h2>
            </div>
            <p className="max-w-115 pt-6 text-lg">
              Browse our product categories, or share your requirements with us
              for a product enquiry.
            </p>
          </div>
          <div className="mt-14 flex flex-wrap justify-between gap-x-[3%]">
            {categories.map((category) => (
              <div
                key={category}
                className="flex w-[31.3%] items-center justify-between border-b border-white py-5 text-lg"
              >
                <span className="text-lg">{category}</span>
                <span className="text-2xl text-primary-bg">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurProducts />
      <section className="w-full px-[5.2%] py-16 text-primary-text">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-0.5 w-5 bg-primary-bg" />
          <span className="text-sm font-semibold uppercase text-secondary-text">
            Where They&apos;re Used
          </span>
        </div>
        <h2 className="mb-7 text-5xl font-bold">
          Match the wire to the setting
        </h2>
        <div className="flex gap-10">
          {OurApplications.map((application) => (
            <div
              key={application.id}
              className="flex flex-1 flex-col border-t border-white pt-5"
            >
              <div className="mb-4 text-secondary-text">
                <SharedSvg
                  paths={application.iconPaths}
                  width={26}
                  height={26}
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="none"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                {application.title}
              </h3>
              <p className="mb-3 text-md">{application.description}</p>
              <p className="text-sm font-semibold text-secondary-text">
                {application.wire}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ProductHighlights />
      <section className="flex items-center gap-16 border-b border-[#E5EDF7] bg-white px-[5.2%] py-16 text-primary-text">
        <div className="relative h-100 flex-1 ">
          <Image
            src="/hero-about.png"
            alt="Electrician installing electrical wires"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-0.5 w-5 bg-primary-bg" />
            <span className="text-sm font-semibold uppercase text-secondary-text">
              About RS Ever Bound
            </span>
          </div>
          <h2 className="mb-7 text-5xl font-bold">
            Electrical cables.
            <br />
            Focused on your needs.
          </h2>
          <p className="mt-5 text-md leading-4.25">
            RS Ever Bound is an electrical cable trader supplying dependable
            products for residential and commercial electrical installations.
          </p>
          <div className="my-5 h-px w-full bg-[#E8EEF6]" />
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF4FC] text-secondary-text">
              <SharedSvg
                paths={[...aboutSectionIcons.products]}
                width={26}
                height={26}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <p className="text-md leading-4.25">
              PVC wires, aluminium wires in various specifications, electrical
              house wires, and multistrand wires
            </p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF4FC] text-secondary-text">
              <SharedSvg
                paths={[...aboutSectionIcons.location]}
                width={26}
                height={26}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <p className="text-md">Shahgarh, Sagar, Madhya Pradesh, India</p>
          </div>
          <div className="mt-5">
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
