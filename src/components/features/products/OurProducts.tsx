import ProductCard from './ProductCard';
import { productFilters, products } from '../../../../data';

export default function OurProducts() {
  return (
    <section className="w-full flex flex-col bg-secondary-bg px-12 py-14">
      <div className="mb-2 flex items-center gap-3">
        <span className="h-0.5 w-5 bg-primary-bg" />
        <span className="text-sm font-semibold uppercase text-secondary-text">
          What We Offer
        </span>
      </div>
      <h2 className="mb-6 text-5xl font-bold text-primary-text">
        A closer look at house wires
      </h2>
      <div className="mb-7 flex items-center gap-3">
        {productFilters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              !index ? 'bg-primary-bg text-white' : 'bg-white text-primary-text'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex items-stretch gap-5">
        {products.map((product) => (
          <div key={product.id} className="flex min-w-0 flex-1">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
