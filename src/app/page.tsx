import { OurApplications, categories } from '../../data';
import Hero from '@/src/components/features/Hero';
import ProductHighlights from '@/src/components/homeComponents/ProductHighlights';
import OurProducts from '@/src/components/products/OurProducts';
import SharedSvg from '@/src/components/shared/SharedSvg';

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
    </>
  );
}
