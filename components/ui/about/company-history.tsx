// components/CompanyHistory.tsx

import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useCompanyHistoryData } from "@/utils/hooks/UseCompanyHistoryData"; // Import the custom hook

const CompanyHistory = () => {
  // No argument is passed here
  const { companyHistory, loading, error } = useCompanyHistoryData(); // Just call the hook without any arguments

  if (loading) {
    return <Text>Loading...</Text>; // Show loading message while fetching
  }

  if (error) {
    return <Text>Error: {error}</Text>; // Show error if something goes wrong
  }

  // If we have company history data, display it
  return (
    <Box py={10}>
      <Container maxW="container.lg" py={10}>
        <Heading size="2xl">{companyHistory?.title}</Heading> {/* Display the title */}
        <Text py={5} fontSize="lg" dangerouslySetInnerHTML={{ __html: companyHistory?.description || "" }} /> {/* Display description */}

        {/* Display image */}
        <Box borderRadius="md" overflow="hidden" boxShadow="md" mb={6}>
          <Image
            src={`https://cms.jmassociates.co.ke/storage/uploads${companyHistory?.image.path}`}
            alt="Company History"
            width={1200}
            height={500}
            objectFit="cover"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyHistory;






