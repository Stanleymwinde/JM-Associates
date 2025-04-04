"use client";
import { MarginX } from "@/utils/constants";
import {
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from "@chakra-ui/react";
import {
  FaRegSmile,
  FaRegFileAlt,
  FaUserFriends,
  FaAward,
} from "react-icons/fa";

const CompanyOverview = () => {
  return (
    <Box py={10} bg={"gray.100"}>
      <Box marginX={MarginX}>
        {/* Stats Section */}
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={10} textAlign="center">
          <Box>
            <Icon as={FaAward} boxSize={10} color="red.500" />
            <Heading fontSize="5xl" py={4}>
              10
            </Heading>
            <Text>YEARS OF EXPERIENCE</Text>
          </Box>
          <Box>
            <Icon as={FaRegFileAlt} boxSize={10} color="red.500" />
            <Heading fontSize="5xl" py={4}>
              1240
            </Heading>
            <Text>NUMBER OF PROJECTS</Text>
          </Box>
          <Box>
            <Icon as={FaRegSmile} boxSize={10} color="red.500" />
            <Heading fontSize="5xl" py={4}>
              2187
            </Heading>
            <Text>HAPPY CLIENTS</Text>
          </Box>
          <Box>
            <Icon as={FaUserFriends} boxSize={10} color="red.500" />
            <Heading fontSize="5xl" py={4}>
              2187
            </Heading>
            <Text>CLIENTS' SATISFACTION</Text>
          </Box>
        </SimpleGrid>

        {/* Tabs Section */}
        <Box mt={10}>
          <Heading
            fontSize="5xl"
            py={4}
            borderBottom="3px solid red"
            display="inline-block"
          >
            COMPANY OVERVIEW
          </Heading>

          <Tabs.Root defaultValue="vision">
            <Tabs.List
              mt={5}
              display="flex"
              gap={5}
              borderBottom="2px solid gray"
            >
              <Tabs.Trigger value="mission">
                <Text fontWeight="bold">OUR MISSION</Text>
              </Tabs.Trigger>
              <Tabs.Trigger value="vision">
                <Text fontWeight="bold" color="red.500">
                  OUR VISION
                </Text>
              </Tabs.Trigger>
              <Tabs.Trigger value="strategy">
                <Text fontWeight="bold">OUR STRATEGY</Text>
              </Tabs.Trigger>
              <Tabs.Indicator bg="red.500" height="3px" />
            </Tabs.List>

            <Tabs.Content value="mission">
              <Text mt={3}>
                Our mission is to provide high-quality professional services,
                world-class innovative solutions, and a collaborative culture
                that enables employees to thrive.
              </Text>
            </Tabs.Content>

            <Tabs.Content value="vision">
              <Stack mt={3} gap={2}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vitae leo ell rhoncus quam dapibus.
                </Text>
                <Text>✅ Provide high-quality professional services.</Text>
                <Text>✅ Offer innovative solutions.</Text>
                <Text>✅ Recruit and retain the most knowledgeable staff.</Text>
                <Text>✅ Foster a collaborative culture for growth.</Text>
              </Stack>
            </Tabs.Content>

            <Tabs.Content value="strategy">
              <Text mt={3}>
                Our strategy focuses on continuous innovation, ensuring customer
                satisfaction, and adapting to market changes with agility and
                precision.
              </Text>
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyOverview;
