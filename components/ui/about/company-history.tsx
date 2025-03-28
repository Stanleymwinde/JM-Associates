import { MarginX } from "@/utils/constants";
import { Box, Container, Heading, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";

const CompanyHistory = () => {
  return (
    <Box py={10} marginX={MarginX}>
      <Box marginX={MarginX}>
        <Image
          src="/Home/about.jpeg" // Change this to your actual image path
          alt="Company Building"
          w="100%"
          h={{ base: "250px", md: "400px", lg: "500px" }}
          objectFit="cover"
        />
      </Box>

      {/* History Section */}
      <Container maxW="container.lg" py={10} textAlign="center">
        <Box
          divideY={"2px"}
          divideColor={"red.500"}
          borderBottomWidth={"3px"}
          mx={"auto"}
        >
          <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={3}>
            COMPANY HISTORY{" "}
            {/* <Divider
            w="50px"
            mx="auto"
            borderBottomWidth="3px"
            borderColor="blue.600"
          /> */}
          </Heading>
          <Text color="gray.600" fontSize={{ base: "sm", md: "md" }} mb={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
            amet odio vel dui elementum aliquam non eu metus. Nunc urna diam,
            ornare vitae risus et, vulputate porta velit. Quisque eros felis,
            varius a nulla sed, pretium bibendum ipsum. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Sed finibus, leo nec pulvinar efficitur, justo sem consectetur mi,
            in maximus libero enim sit amet neque. Nunc id finibus risus,
            molestie iaculis elit. Suspendisse est massa, auctor vel dapibus
            sed, aliquet nec elit. Proin egestas nec enim nec feugiat. Mauris eu
            libero fringilla, viverra ante at, ultrices nulla. Aliquam in auctor
            quam. Etiam bibendum congue efficitur phasellus auctor vel dapibus.
          </Text>
        </Box>

        {/* Timeline */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-around"
          align="center"
        >
          {[
            { year: "1988", event: "JM Associates was founded" },
            { year: "2000", event: "Listed on the Stock Market" },
            { year: "2010", event: "New CEO JM-Associates" },
            { year: "Today", event: "Reached 1K +  Clients" },
          ].map((item, index) => (
            <Box key={index} textAlign="center">
              <Heading fontSize="lg" fontWeight="bold">
                {item.year}
              </Heading>
              <Text color="gray.500">{item.event}</Text>
              {index !== 3 && (
                <Box w="50px" h="4px" bg="gray.300" mx="auto" my={4} />
              )}
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default CompanyHistory;
