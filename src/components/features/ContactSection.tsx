import Button from '../shared/Button';
import { contactSectionIcons, categories } from '../../../data';
import Svg from '@/src/components/shared/Svg';

export default function ContactSection() {
  return (
    <section className="flex w-full flex-col gap-10 bg-secondary-bg px-5 py-12 text-primary-text sm:px-8 sm:py-16 lg:flex-row lg:items-start lg:gap-16 lg:px-[5.2%] lg:py-20">
      <div className="flex min-w-0 w-full flex-col pt-1 lg:flex-1">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-0.5 w-5 shrink-0 bg-primary-bg" />
          <span className="text-xs font-semibold uppercase text-secondary-text sm:text-sm">
            Let&apos;s Talk Cables
          </span>
        </div>
        <h2 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
          Tell us what you’re
          <br className="hidden sm:block" />
          {' '}looking for.
        </h2>
        <p className="mt-4 text-sm leading-6 sm:mt-5 sm:text-base sm:leading-7">
          Share the wire category, size and quantity you need. For product
          details and enquiries, contact RS Ever Bound.
        </p>
        <div className="mt-8 flex flex-col gap-6 sm:mt-10">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 text-secondary-text">
              <Svg
                paths={contactSectionIcons.phone}
                width={20}
                height={20}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-primary-text/75">Call us</p>
              <a
                href="tel:+918349112391"
                className="mt-1 block break-words text-base font-medium hover:text-secondary-text"
              >
                +91 8349112391
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 text-secondary-text">
              <Svg
                paths={contactSectionIcons.email}
                width={20}
                height={20}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-primary-text/75">Email us</p>
              <a
                href="mailto:rseverbound@gmail.com"
                className="mt-1 block break-all text-base font-medium hover:text-secondary-text"
              >
                rseverbound@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 text-secondary-text">
              <Svg
                paths={contactSectionIcons.location}
                width={20}
                height={20}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-primary-text/75">Find us</p>
              <p className="mt-1 text-base leading-6">
                Shahgarh, Sagar, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-w-0 rounded-lg bg-white p-5 shadow-[0_4px_18px_rgba(16,42,86,0.08)] sm:p-7 lg:flex-1">
        <h3 className="mb-5 text-xl font-semibold sm:text-2xl">
          Product enquiry
        </h3>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="h-11 w-full rounded-sm border border-[#E5EDF7] px-3 text-sm outline-none placeholder:text-primary-text/60 focus:border-primary-bg"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label htmlFor="contact" className="text-sm font-medium">
                Phone or email
              </label>

              <input
                id="contact"
                name="contact"
                type="text"
                autoComplete="email"
                placeholder="Phone or email"
                className="h-11 w-full rounded-sm border border-[#E5EDF7] px-3 text-sm outline-none placeholder:text-primary-text/60 focus:border-primary-bg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-sm font-medium">
              Product category
            </label>

            <select
              id="category"
              name="category"
              defaultValue=""
              className="h-11 w-full rounded-sm border border-[#E5EDF7] bg-white px-3 text-sm outline-none focus:border-primary-bg"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us the wire type, size and quantity you need..."
              className="min-h-28 w-full resize-y rounded-sm border border-[#E5EDF7] px-3 py-3 text-sm leading-6 outline-none placeholder:text-primary-text/60 focus:border-primary-bg"
            />
          </div>
          <div className="mt-1">
            <Button
              text="Submit Enquiry"
              bgColor="bg-primary-bg"
              textColor="text-white"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
