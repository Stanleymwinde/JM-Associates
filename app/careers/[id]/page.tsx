"use client";
import { CareersData } from "@/utils/constants";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Container,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";

const JobDetailsPage = () => {
  const { id } = useParams();
  const jd = id as string;
  let jobData: any = null; // Initialize jobData to null

  // Find the job data based on the jobId
  jobData = CareersData.find((job) => job.id === Number(jd));

  console.log("jobData", jobData);

  return (
    <Container maxW="3xl" py={10}>
      <VStack gap={8} align="start">
        {/* job title */}
        <Heading size="xl">{jobData?.title}</Heading>

        <Box w="full">
          <Heading size="md" mb={2}>
            Requirements
          </Heading>
          <Text>
            - Proven experience in web development.
            <br />- Strong understanding of React and Next.js.
            <br />- Familiarity with Chakra UI is a plus.
          </Text>
        </Box>

        <Box w="full">
          <Heading size="md" mb={2}>
            Qualifications
          </Heading>
          <Text>
            - Bachelor's degree in Computer Science or related field.
            <br />- Excellent communication skills.
            <br />- Ability to work independently and as part of a team.
          </Text>
        </Box>

        <Box w="full" textAlign="center">
          <Button colorScheme="teal" size="lg">
            Apply Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default JobDetailsPage;
