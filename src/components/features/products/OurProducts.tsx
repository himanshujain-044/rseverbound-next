'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { productFilters, products } from '../../../../data';

export default function OurProducts() {
  const [activeFilter, setActiveFilter] = useState(productFilters[0]);

  return (
    <section className="w-full overflow-hidden bg-secondary-bg px-5 py-12 text-primary-text sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mb-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-0.5 w-6 bg-primary-bg" />
          <span className="text-xs font-semibold uppercase tracking-wide text-secondary-text sm:text-sm">
            What We Offer
          </span>
        </div>
        <h2 className="max-w-2xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
          A closer look at house wires
        </h2>
      </div>
      <div className="-mx-5 mb-7 overflow-x-auto px-5 scrollbar-none [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        <div className="flex w-max gap-2">
          {productFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-primary-bg text-white'
                  : 'border border-[#DCE6F2] bg-white text-primary-text hover:border-primary-bg'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="-mx-5 overflow-hidden px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 scrollbar:none [&::-webkit-scrollbar]:hidden sm:gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full min-w-0 shrink-0 snap-start sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
