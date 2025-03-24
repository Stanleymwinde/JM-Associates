import { MarginX, socialIcons } from "@/utils/constants";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <Box bg={"gray.200"}>
      <Flex
        gap={4}
        justify={"space-between"}
        marginX={MarginX}
        alignContent={"center"}
        py={4}
      >
        <Flex>
          <Text pr={2} color={"blue.400"} fontWeight={"bold"}>
            Opening:
          </Text>
          <Text>Mon- Sat 8:00 - 18:00. Sunday CLOSED</Text>
        </Flex>
        <Box>
          <Flex gap={6}>
            {socialIcons.map((icon, index) => (
              <Box key={index}>
                <Link href={icon.link} target="_blank">
                  <Icon color={icon.color} size={"md"}>
                    {icon.icon}
                  </Icon>
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopNav;
