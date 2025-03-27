"use client";
import React from "react";
import { Box, Grid, GridItem, Heading, Text, Icon } from "@chakra-ui/react";
import {
  FaCalculator,
  FaChartLine,
  FaWallet,
  FaDatabase,
  FaFileInvoice,
  FaHandshake,
} from "react-icons/fa";
import { MarginX } from "@/utils/constants";
const Services = () => {
  const services = [
    { icon: FaCalculator, title: "Accounting" },
    { icon: FaChartLine, title: "Annual Financial Reports" },
    { icon: FaWallet, title: "Budget Summary" },
    { icon: FaDatabase, title: "Data Management" },
    { icon: FaFileInvoice, title: "Financial Consulting" },
    { icon: FaHandshake, title: "Small Business Loans" },
  ];
  return (
    <>
      <Box bg="gray.50" py={16}>
        <Box marginX={MarginX} textAlign="center">
          <Heading
            as="h2"
            size="xl"
            fontWeight="bold"
            position="relative"
            pb={4}
          >
            OUR SERVICES
            <Box mt={2} w="50px" h="3px" bg="red.500" mx="auto"></Box>
          </Heading>
          <Text color="gray.600" mt={4} mb={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor, risus vel feugiat commodo.
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {services.map((service, index) => (
              <GridItem
                key={index}
                textAlign="left"
                p={6}
                borderRadius="md"
                bg="white"
              >
                <Icon as={service.icon} w={16} h={12} color="red.500" />
                <Heading size="md" mt={3} fontWeight="bold">
                  {service.title}
                </Heading>
                <Text mt={2} color="gray.600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquet egestas odio eu placerat.
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Services;
