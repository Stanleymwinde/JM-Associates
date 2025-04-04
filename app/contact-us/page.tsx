import CommonHero from "@/components/common-hero";
import Map from "@/components/map";
import { ContactDetails } from "@/components/ui/contact";
import React from "react";

const page = () => {
  return (
    <>
      <CommonHero title="Contact Us" image="/Home/Leverage.png" />
      <Map />
      <ContactDetails />
    </>
  );
};

export default page;
