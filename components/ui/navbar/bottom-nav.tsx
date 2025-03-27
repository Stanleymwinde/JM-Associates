import { HomeLinks, MarginX } from "@/utils/constants";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const BottomNav = () => {
  return (
    <>
      <Box bg="#aa1f30" p={4} w="100%" textAlign="center">
        <Box marginX={MarginX}>
          <Flex gap={7} marginEnd={"auto"}>
            {HomeLinks.map((home, index) => (
              <Box key={index}>
                <Link href={home.link}>
                  <Text fontSize={"2xl"} color={"white"} fontFamily={"initial"}>
                    {home.text}
                  </Text>
                </Link>
              </Box>
            ))}{" "}
            <Button bg="white" color="#aa1f30" ml={"auto"}>
              Get a Quote
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default BottomNav;
