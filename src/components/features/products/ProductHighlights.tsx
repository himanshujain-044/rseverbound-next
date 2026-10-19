import { feature } from '../../../../data';
import Svg from '../../shared/Svg';

function FeatureCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {feature.map((item) => (
        <div
          key={item.id}
          className="flex min-w-0 flex-col rounded-md bg-white p-5 sm:p-6"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-secondary-text">
            <Svg
              paths={item.iconPaths}
              width={24}
              height={24}
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
            />
          </div>
          <h3 className="mt-4 text-lg leading-6 font-semibold text-primary-text sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-primary-text/90">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function ProductHighlights() {
  return (
    <section className="w-full bg-secondary-bg px-5 py-12 sm:px-8 sm:py-14 lg:px-[5.2%] lg:py-16">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-5 shrink-0 bg-secondary-text" />
          <span className="text-xs font-semibold uppercase text-secondary-text sm:text-sm">
            The Product Details
          </span>
        </div>
        <h2 className="mt-3 text-3xl leading-tight font-bold text-primary-text sm:text-4xl lg:text-5xl">
          What’s inside matters.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-text sm:text-base">
          A closer look at coil length and conductor material in the RS Ever
          Bound range.
        </p>
        <div className="mt-7 sm:mt-8">
          <FeatureCards />
        </div>
      </div>
      <div className="mt-12 sm:mt-14 lg:mt-16">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-5 shrink-0 bg-secondary-text" />
          <span className="text-xs font-semibold uppercase text-secondary-text sm:text-sm">
            Why Choose Us
          </span>
        </div>
        <h2 className="mt-3 max-w-4xl text-3xl leading-tight font-bold text-primary-text sm:text-4xl lg:text-5xl">
          Reliable electrical cables for dependable projects.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-text sm:text-base">
          RS Ever Bound supplies reliable wiring solutions for residential and
          commercial electrical installations.
        </p>
        <div className="mt-7 sm:mt-8">
          <FeatureCards />
        </div>
      </div>
    </section>
  );
}
