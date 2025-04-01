import CommonHero from "@/components/common-hero";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <CommonHero title="Careers" image="/Home/career.jpg" />
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mb={4} color="teal.500">
          No Vacant Positions
        </Heading>
        <Text fontSize="lg" color="gray.600">
          We currently have no vacant positions available. Please check back
          later.
        </Text>
      </Box>
    </>
  );
};

export default page;
