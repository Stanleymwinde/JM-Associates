import CommonHero from "@/components/common-hero";
import { MainService } from "@/components/ui/services";
import React from "react";

const page = () => {
  return (
    <>
      <CommonHero title="Services" image="/Home/Consultancy.jpg" />
      <MainService />
    </>
  );
};

export default page;
