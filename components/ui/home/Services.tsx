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
import { AiOutlineAudit } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
const Services = () => {
  const services = [
    {
      icon: AiOutlineAudit,
      title: "Accounting",
      desc: "Our audit services go beyond looking in to the numbers. We endeavor to gain a clear understanding of your business, your goals, the environment, and circumstances in which your business operates.",
    },
    {
      icon: FaChartLine,
      title: "Taxation",
      desc: "Tax is one of the most dynamic issues business face today. The need for compliance is at its very high as revenue authorities world over become more vigilant.",
    },
    {
      icon: FaWallet,
      title: "Forensic Audit",
      desc: "Even with the best laid internal control systems, fraud-proofing mechanisms cannot completely eliminate the possibilities of a fraud happening. ",
    },
    {
      icon: FaDatabase,
      title: "Asset and Inventory Management",
      desc: "Tangible and intangible assets are an invaluable resource in any business. Because of the importance of such assets to the business, the more reason why business must ensure their proper management.",
    },
    {
      icon: FaFileInvoice,
      title: "Outsourced Accounting Services",
      desc: "Book keeping and accounting is the backbone of proper financial management. Every business need to have proper books financial records to be able to make informed decision and know how the business is fairing on.",
    },
    {
      icon: FaHandshake,
      title: "Corporte Finance Services",
      desc: "Through Corporate Consulting, JM Associates looks at the companies’ operations where we undertake assignments that enable a company to maximize profits and minimize costs.",
    },
    {
      icon: GiTakeMyMoney,
      title: "Enterprises Risk Management",
      desc: "We assist clients develop a comprehensive risk management framework that enables them to mitigate business risks.",
    },
  ];
  return (
    <>
      <Box bg="gray.50" py={16}>
        <Box marginX={MarginX} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            position="relative"
            pb={4}
          >
            OUR SERVICES
            <Box mt={2} w="50px" h="3px" bg="red.500" mx="auto"></Box>
          </Heading>
          <Text color="gray.600" mt={4} mb={10} fontSize={["md", "lg"]}>
            Discover the wide range of professional services we offer to help
            your business thrive. From accounting and taxation to risk
            management and corporate finance, we are committed to delivering
            tailored solutions that meet your unique needs.
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {services.map((service, index) => (
              <GridItem
                key={index}
                textAlign="left"
                p={6}
                borderRadius="md"
                bg="white"
                boxShadow={"md"}
                _hover={{ boxShadow: "xl", cursor: "pointer" }}
                transition="all 0.3s"
              >
                <Icon as={service.icon} boxSize={12} color={"red.500"} />
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
