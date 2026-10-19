import Image from 'next/image';
import { footerData } from '../../../data';

export default function Footer() {
  return (
    <footer className="w-full bg-[#102A56] px-5 pt-10 text-white sm:px-8 sm:pt-12 lg:px-[5.2%]">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-8 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-[1.4fr_0.9fr_0.7fr_1.3fr_0.8fr] lg:gap-8 lg:pb-10">
        <div className="col-span-2 min-w-0 sm:col-span-3 lg:col-span-1">
          <div className="inline-flex max-w-full items-center gap-2 bg-white px-2 py-2 text-primary-text">
            <Image
              src={footerData.logo.src}
              alt={footerData.logo.alt}
              width={48}
              height={40}
              className="h-10 w-12 shrink-0 object-contain"
            />
            <span className="text-base font-bold sm:text-lg">
              {footerData.logo.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
            {footerData.logo.description}
          </p>
        </div>
        <div className="min-w-0">
          <h3 className="mb-4 text-sm font-semibold">Products</h3>
          <ul className="flex flex-col gap-3">
            {footerData.productLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="wrap-break text-sm leading-5 text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="mb-4 text-sm font-semibold">Company</h3>
          <ul className="flex flex-col gap-3">
            {footerData.companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="wrap-break text-sm leading-5 text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 min-w-0 sm:col-span-1">
          <h3 className="mb-4 text-sm font-semibold">
            {footerData.contact.heading}
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/75">
            <li>
              <a
                href={footerData.contact.phoneLink}
                className="wrap-break transition-colors hover:text-white"
              >
                {footerData.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={footerData.contact.emailLink}
                className="break-all transition-colors hover:text-white"
              >
                {footerData.contact.email}
              </a>
            </li>
            <li className="leading-6">{footerData.contact.address}</li>
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="mb-4 text-sm font-semibold">Social links</h3>
          <ul className="flex flex-col gap-3">
            {footerData.socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="wrap-break text-sm leading-5 text-white/75 transition-colors hover:text-white"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-white/15 py-6 sm:py-7 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-xs leading-5 text-white/75">
          {footerData.copyright}
        </p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-white/75">
          {footerData.bottomLinks.map((link, index) => (
            <span key={link.label} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              <a
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
