"use client";

import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/slider/Slide1.jpg",
    title: "Explore Our Services",
    description: "Discover the best consulting solutions tailored for you.",
    buttonText: "Learn More",
    link: "/services",
  },
  {
    image: "/slider/Slide2.jpg",
    title: "Innovative Solutions",
    description: "We provide top-notch financial and audit consulting.",
    buttonText: "See More",
    link: "/about-us",
  },
  {
    image: "/slider/Slide3.jpeg",
    title: "Join Our Team",
    description: "Become part of a thriving consulting community.",
    buttonText: "Apply Now",
    link: "/careers",
  },
];

const CarouselComponent = () => {
  const router = useRouter();

  return (
    <Box width="100%" height="85vh">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box position="relative" width="100%" height="75vh">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
              />

              {/* Text Overlay with Blur */}
              <Box
                position="absolute"
                top="50%" /* Center vertically */
                left="50%" /* Center horizontally */
                transform="translate(-50%, -50%)" /* Perfect centering */
                width="95%"
                maxW="900px"
                bg="blackAlpha.500"
                backdropFilter="blur(12px)"
                borderRadius="lg"
                p={{ base: 6, md: 16 }}
                textAlign="center"
                color="white"
              >
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  mb={4}
                >
                  {slide.title}
                </Text>
                <Text fontSize={{ base: "lg", md: "xl" }} mb={6}>
                  {slide.description}
                </Text>
                <Button
                  size="lg"
                  bg={"red.500"}
                  color="white"
                  onClick={() => router.push(slide.link)}
                >
                  {slide.buttonText}
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CarouselComponent;
