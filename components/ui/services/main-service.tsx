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
} from "@chakra-ui/react";
import { MarginX, ServiceTabs } from "@/utils/constants";

const MainService = () => {
  const [activeTab, setActiveTab] = useState(ServiceTabs[0]);
  return (
    <Box as="main" marginX={MarginX}>
      <Box textAlign="center" mb={8} p={4} borderRadius="md">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Our Services
        </Text>
        <Text fontSize="lg" color="gray.600">
          Discover a wide range of professional services tailored to meet the
          unique needs of your business. Our team of experts is dedicated to
          delivering innovative solutions and exceptional results.
        </Text>
      </Box>
      <Box p={4} bg="white" boxShadow="md">
        <HStack gap={0} align="stretch" height="100vh">
          {/* Sidebar */}
          <VStack bg="gray.100" align="stretch">
            {ServiceTabs.map((tab) => (
              <Button
                key={tab.name}
                variant="ghost"
                justifyContent="flex-start"
                bg={activeTab.name === tab.name ? "blue.500" : "transparent"}
                color={activeTab.name === tab.name ? "white" : "black"}
                _hover={{ bg: "blue.300", color: "white" }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.name}
              </Button>
            ))}
          </VStack>

          {/* Content Area */}
          <Box
            flex={1}
            px={6}
            overflowY={"auto"}
            maxHeight="calc(100vh - 100px)"
          >
            <Image
              src={activeTab.image}
              alt={activeTab.name}
              width="100%"
              height="300px"
              objectFit="cover"
              mb={4}
            />
            <Heading
              as="h2"
              size="3xl"
              color="red.600"
              textAlign={"center"}
              py={6}
              mb={2}
            >
              {activeTab.name}
            </Heading>
            <Text whiteSpace="pre-line" mt={2}>
              {activeTab.content}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default MainService;
