import Button from '../shared/Button';
import { contactSectionIcons, categories } from '../../../data';
import Svg from '@/src/components/shared/Svg';

export default function ContactSection() {
  return (
    <section className="flex items-start gap-16 bg-secondary-bg px-[5.2%] py-16 text-primary-text">
      <div className="flex flex-1 flex-col pt-1">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-0.5 w-5 bg-primary-bg" />
          <span className="text-sm font-semibold uppercase text-secondary-text">
            Let&apos;s Talk Cables
          </span>
        </div>
        <h2 className="text-5xl font-bold leading-tight">
          Tell us what you’re
          <br />
          looking for.
        </h2>
        <p className="mt-5 text-base leading-4.25">
          Share the wire category, size and quantity you need. For product
          details and enquiries, contact RS Ever Bound.
        </p>
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-secondary-text">
              <Svg
                paths={contactSectionIcons.phone}
                width={20}
                height={20}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <div>
              <p className="text-sm">Call us</p>
              <p className="mt-1 text-base">+91 8349112391</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-secondary-text">
              <Svg
                paths={contactSectionIcons.email}
                width={20}
                height={20}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <div>
              <p className="text-sm">Email us</p>
              <p className="mt-1 text-base">rseverbound@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-secondary-text">
              <Svg
                paths={contactSectionIcons.location}
                width={20}
                height={20}
                stroke="currentColor"
                strokeWidth={1.8}
                fill="none"
              />
            </div>
            <div>
              <p className="text-sm">Find us</p>
              <p className="mt-1 text-base">
                Shahgarh, Sagar, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-sm bg-white p-7 shadow-[0_4px_18px_rgba(16,42,86,0.08)]">
        <h3 className="mb-5 text-2xl font-semibold">Product enquiry</h3>
        <form className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="h-10 w-full rounded-sm border border-[#E5EDF7] px-3 text-sm outline-none placeholder:text-primary-text/70 focus:border-primary-bg"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="contact" className="text-sm font-medium">
                Phone or email
              </label>
              <input
                id="contact"
                type="text"
                placeholder="Phone or email"
                className="h-10 w-full rounded-sm border border-[#E5EDF7] px-3 text-sm outline-none placeholder:text-primary-text/70 focus:border-primary-bg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-sm font-medium">
              Product category
            </label>
            <select
              id="category"
              defaultValue=""
              className="h-10 w-full rounded-sm border border-[#E5EDF7] bg-white px-3 text-sm outline-none focus:border-primary-bg"
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
              rows={4}
              placeholder="Tell us the wire type, size and quantity you need..."
              className="h-29 w-full resize-none rounded-sm border border-[#E5EDF7] px-3 py-3 text-sm outline-none placeholder:text-primary-text/70 focus:border-primary-bg"
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
