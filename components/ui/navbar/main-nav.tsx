"use client";
import { homectas, MarginX } from "@/utils/constants";
import { Box, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const MainNav = () => {
  return (
    <>
      <Box>
        <Flex
          justify={"space-between"}
          align={"center"}
          marginX={MarginX}
          py={5}
        >
          <Box>
            <Image
              src={"/Logo.png"}
              alt={"logo"}
              width={useBreakpointValue({ base: "100", md: "200", lg: "200" })}
              height={200}
            />
          </Box>
          <Flex gap={5}>
            {homectas.map((cta, index) => (
              <Box
                key={index}
                display={{ base: "column", md: "flex", lg: "flex" }}
                alignContent={"center"}
                justifyContent={"center"}
                gap={5}
              >
                <Box
                  border={{ base: "none", md: "1px solid red" }}
                  p={5}
                  borderRadius={"100%"}
                >
                  <Icon
                    size={{ base: "md", md: "md", lg: "lg" }}
                    alignContent={"center"}
                    alignItems={"center"}
                    color="red"
                  >
                    {cta.icon}
                  </Icon>
                </Box>
                <Flex
                  direction={"column"}
                  align={"start"}
                  justify={{ base: "center", md: "start", lg: "center" }}
                  textAlign={{ base: "center", md: "start", lg: "center" }}
                >
                  <Text>{cta.text}</Text>
                  <Text>{cta.desc}</Text>
                </Flex>{" "}
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default MainNav;
