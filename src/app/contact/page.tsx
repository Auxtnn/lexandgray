import {
  PageHeader,
  ContactForm,
  ContactInfo,
  LocationMap,
  ContactHero,
} from "@/components";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container mx-auto pt-4 md:pt-0 pb-0 md:pb-10 px-4 lg:w-11/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <LocationMap />
    </>
  );
}
