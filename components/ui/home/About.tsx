import { MarginX } from "@/utils/constants";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <Box marginX={MarginX} py={16}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={2}>
          <Box
            bg={"red"}
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            width={""}
          >
            <Image
              src="/home/about.jpeg"
              alt="About"
              width={500}
              height={500}
              objectFit="contain"
              layout="responsive"
            />
          </Box>
        </GridItem>

        <GridItem
          colSpan={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          px={5}
        >
          <Box textAlign="start" width="100%">
            <Heading size="5xl" fontFamily={"initial"}>
              About JM Associates
            </Heading>

            <Box
              width="10%"
              divideY={"2px"}
              divideColor={"red.500"}
              divideStyle={"solid"}
              py={2}
            >
              <Box></Box>
              <Box></Box>
            </Box>
            {/* second divider */}
            <Box
              pl={5}
              width="12%"
              divideY={"2px"}
              divideColor={"red.500"}
              divideStyle={"solid"}
            >
              <Box></Box>
              <Box></Box>
            </Box>
            <Text
              py={10}
              fontFamily={"initial"}
              fontSize={["md", "xl"]}
              maxW="100%"
              textAlign="justify"
            >
              JM Associates is a leading provider of professional services in
              the areas of accounting, audit, tax, business advisory, and
              consulting services. We are a full-service accounting firm that
              provides a wide range of services to clients in various
              industries. Our team of experienced professionals is committed to
              providing high-quality services to our clients and helping them
              achieve their financial goals.
            </Text>
          </Box>
          <Link href={"/about"} passHref>
            <Box
              width="100%"
              _groupHover={{ color: "black", cursor: "pointer" }}
            >
              <Text
                fontWeight="bold"
                color="red.500"
                display="inline-flex"
                fontSize={["md", "xl"]}
                alignItems="center"
                _hover={{
                  color: "black",
                  transform: "scale(1.1)",
                  transition: "all 0.3s",
                }}
              >
                Learn more about us
                <Box as="span" ml={2} fontSize={["md", "xl"]} fontWeight="bold">
                  →
                </Box>
              </Text>
            </Box>
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
