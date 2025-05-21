import {
  CTAServices,
  ServicesList,
  ServiceApproach,
  IndustriesServed,
  HeroServices,
} from "@/components";

export default function ServicesPage() {
  return (
    <>
      <HeroServices />
      <ServicesList />
      <ServiceApproach />
      {/* <IndustriesServed /> */}
      <CTAServices />
    </>
  );
}
