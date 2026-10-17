import Image from 'next/image';
import Button from '../../shared/Button';
import { Product } from '@/src/app/types/home-types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md bg-white shadow-md pb-8 gap-2">
      <div className="relative h-75 w-full bg-[#e9eef4]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-sm font-semibold text-secondary-text">
          {product.label}
        </p>
        <h3 className="mb-2 text-xl font-bold leading-6 text-primary-text">
          {product.title}
        </h3>
        <p className="mb-4 text-md leading-5 text-primary-text">
          {product.description}
        </p>
        <div className="flex flex-col gap-2 text-md">
          <div className="flex items-start justify-between gap-3">
            <span className="font-medium text-primary-text">Coil</span>
            <span className="text-right text-primary-text">{product.coil}</span>
          </div>
          <div className="flex items-start justify-between gap-3">
            <span className="font-medium text-primary-text">Size</span>
            <span className="text-right text-primary-text">{product.size}</span>
          </div>
          <div className="flex items-start justify-between gap-3">
            <span className="font-medium text-primary-text">Primary use</span>
            <span className="max-w-[65%] text-right text-primary-text">
              {product.primaryUse}
            </span>
          </div>
        </div>
        <div className="mt-5">
          <p className="mb-1 text-md font-semibold text-primary-text">
            {product.priceLabel}
          </p>
          <p className="text-md leading-5 text-primary-text">
            {product.priceRange}
          </p>
          {product.id !== 3 && (
            <p className="mt-2 text-md text-primary-text">
              Confirm current price before ordering.
            </p>
          )}
        </div>
        <div className="mt-auto flex gap-3 pt-6">
          <Button
            text="View Details"
            bgColor="bg-primary-bg"
            textColor="text-white"
          />
          <Button
            text="Enquire Now"
            bgColor="bg-white"
            textColor="text-primary-text"
          />
        </div>
      </div>
    </div>
  );
}
