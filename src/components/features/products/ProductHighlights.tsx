import { feature } from '../../../../data';
import SharedSvg from '@/src/components/shared/SharedSvg';

function FeatureCards() {
  return (
    <div className="flex items-start gap-5">
      {feature.map((item) => (
        <div key={item.id} className="flex-1 bg-white p-4.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] text-secondary-text">
            <SharedSvg
              paths={item.iconPaths}
              width={26}
              height={24}
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
            />
          </div>

          <h3 className="mt-3 text-xl font-semibold leading-6 text-primary-text">
            {item.title}
          </h3>

          <p className="mt-2 text-md  text-primary-text">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function ProductHighlights() {
  return (
    <section className="bg-secondary-bg px-16 py-16">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-4.5 bg-secondary-text" />
          <span className="text-sm font-semibold uppercase text-secondary-text">
            The Product Details
          </span>
        </div>

        <h2 className="mt-3 text-5xl font-bold leading-tight text-primary-text">
          What’s inside matters.
        </h2>

        <p className="mt-3 text-md text-primary-text">
          A closer look at coil length and conductor material in the RS Ever
          Bound range.
        </p>
      </div>

      <div className="mt-10">
        <FeatureCards />
      </div>

      <div className="mt-25">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-4.5 bg-secondary-text" />
          <span className="text-sm font-semibold uppercase text-secondary-text">
            Why Choose Us
          </span>
        </div>

        <h2 className="mt-3 text-5xl font-bold leading-tight text-primary-text">
          Reliable electrical cables for dependable projects.
        </h2>

        <p className="mt-3 text-md text-primary-text">
          RS Ever Bound supplies reliable wiring solutions for residential and
          commercial electrical installations.
        </p>

        <div className="mt-10">
          <FeatureCards />
        </div>
      </div>
    </section>
  );
}
