"use client";
import { Image } from "@chakra-ui/react";
import { Carousel as NukaCarousel } from "nuka-carousel";

import React from "react";

const CarouselComponent = () => {
  return (
    <NukaCarousel autoplay={true} autoplayInterval={1000} wrapMode="wrap">
      <Image
        src="/slider/Slide1.jpg"
        alt="1"
        width={"100%"}
        objectFit={"contain"}
      />
      <Image
        src="/slider/Slide2.jpg"
        alt="2"
        width={"100%"}
        objectFit={"contain"}
      />
      <Image
        src="/slider/Slide3.jpeg"
        alt="3"
        width={"100%"}
        objectFit={"contain"}
      />
      <Image
        src="/slider/Slide2.jpg"
        alt="4"
        width={"100%"}
        objectFit={"contain"}
      />
    </NukaCarousel>
  );
};

export default CarouselComponent;
