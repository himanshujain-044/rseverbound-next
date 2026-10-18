import Image from 'next/image';
import { footerData } from '../../../data';

export default function Footer() {
  return (
    <footer className="bg-[#102A56] px-[5.2%] pt-12 text-white">
      <div className="flex items-start justify-between gap-10 pb-8">
        <div className="w-[20%]">
          <div className="inline-flex items-center gap-2 bg-white px-2 py-2 text-primary-text">
            <Image
              src={footerData.logo.src}
              alt={footerData.logo.alt}
              width={48}
              height={40}
              className="h-10 w-12 object-contain"
            />
            <span className="whitespace-nowrap text-lg font-bold">
              {footerData.logo.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-5.25 text-white/80">
            {footerData.logo.description}
          </p>
        </div>
        <div className="w-[17%]">
          <h3 className="mb-4 text-sm font-semibold">Products</h3>
          <ul className="flex flex-col gap-3">
            {footerData.productLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm leading-5 text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[12%]">
          <h3 className="mb-4 text-sm font-semibold">Company</h3>
          <ul className="flex flex-col gap-3">
            {footerData.companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[23%]">
          <h3 className="mb-4 text-sm font-semibold">
            {footerData.contact.heading}
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/75">
            <li>
              <a
                href={footerData.contact.phoneLink}
                className="hover:text-white"
              >
                {footerData.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={footerData.contact.emailLink}
                className="hover:text-white"
              >
                {footerData.contact.email}
              </a>
            </li>
            <li className="leading-5">{footerData.contact.address}</li>
          </ul>
        </div>
        <div className="w-[14%]">
          <h3 className="mb-4 text-sm font-semibold">Social links</h3>
          <ul className="flex flex-col gap-3">
            {footerData.socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
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
      <div className="flex items-center justify-between border-t border-white/15 py-7">
        <p className="text-xs text-white/75">{footerData.copyright}</p>
        <div className="flex items-center gap-2 text-xs text-white/75">
          {footerData.bottomLinks.map((link, index) => (
            <span key={link.label} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              <a href={link.href} className="hover:text-white">
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
