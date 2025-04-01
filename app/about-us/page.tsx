import CommonHero from "@/components/common-hero";
import { CompanyHistory, Mission_Vission } from "@/components/ui/about";
import React from "react";

const page = () => {
  return (
    <>
      <CommonHero title="About Us" image="/Home/10-Years.jpg" />
      <CompanyHistory />
      <Mission_Vission />
    </>
  );
};

export default page;
