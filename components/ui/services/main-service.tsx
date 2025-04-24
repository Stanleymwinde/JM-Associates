"use client";
import { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  HStack,
  Image,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { MarginX, ServiceTabs } from "@/utils/constants";

const MainService = () => {
  const [activeTab, setActiveTab] = useState(ServiceTabs[0]);
  return (
    <Box as="main" mx={{ base: 2, md: MarginX }}>
      {/* Header Section */}
      <Box textAlign="center" mb={8} p={4} borderRadius="md">
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={4}>
          Our Services
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Discover a wide range of professional services tailored to meet the
          unique needs of your business. Our team of experts is dedicated to
          delivering innovative solutions and exceptional results.
        </Text>
      </Box>

      {/* Main Content Container */}
      <Box p={4} bg="white" boxShadow="md">
        <Flex
          direction={{ base: "column", md: "row" }} // Stack vertically on mobile, horizontal on desktop
          align="stretch"
          height={{ base: "auto", md: "100vh" }}
        >
          {/* Sidebar */}
          <VStack
            bg="gray.100"
            align="stretch"
            width={{ base: "100%", md: "250px" }} // Full width on mobile, fixed width on desktop
            gap={2}
            pb={4}
          >
            {ServiceTabs.map((tab) => (
              <Button
                key={tab.name}
                variant="ghost"
                justifyContent="flex-start"
                bg={activeTab.name === tab.name ? "blue.500" : "transparent"}
                color={activeTab.name === tab.name ? "white" : "black"}
                _hover={{ bg: "blue.300", color: "white" }}
                onClick={() => setActiveTab(tab)}
                width="100%" // Make buttons full width for better touch targets on mobile
              >
                {tab.name}
              </Button>
            ))}
          </VStack>

          {/* Content Area */}
          <Box
            flex={1}
            px={{ base: 4, md: 6 }}
            overflowY="auto"
            maxHeight={{ base: "auto", md: "calc(100vh - 100px)" }}
          >
            <Image
              src={activeTab.image}
              alt={activeTab.name}
              width="100%"
              height={{ base: "200px", md: "300px" }} // Smaller image on mobile
              objectFit="cover"
              mb={4}
              borderRadius="md"
            />
            <Heading
              as="h2"
              size={{ base: "xl", md: "3xl" }} // Smaller heading on mobile
              color="red.600"
              textAlign="center"
              py={6}
              mb={2}
            >
              {activeTab.name}
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              whiteSpace="pre-line"
              mt={2}
            >
              {activeTab.content}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainService;
