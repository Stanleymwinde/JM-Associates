import CommonHero from "@/components/common-hero";
import Map from "@/components/map";
import { ContactDetails } from "@/components/ui/contact";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Box
        position="relative"
        w="100%"
        h={{ base: "300px", md: "300px", lg: "400px" }}
        bgImage={`url("/Home/Leverage.png")`}
        bgSize="cover"
        bgRepeat={"no-repeat"}
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        pb={5} // Padding at the bottom
      >
        {/* Background Blur & Dark Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
        />

        {/* Title Text */}
        <Heading
          position="relative"
          color="white"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          maxW="90%"
          textShadow="0 4px 8px rgba(0, 0, 0, 0.7)"
        >
          Contact Us
        </Heading>
      </Box>
      <Map />
      <ContactDetails />
    </>
  );
};

export default page;
