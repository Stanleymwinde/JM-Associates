"use client";
import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

const HomeNews = () => {
  const {
    error: newsError,
    loading: newsLoading,
    sectionArray: newsData,
  } = useDefaultSectionArray("blogs");
  const {
    error: insightError,
    loading: insightLoading,
    sectionArray: insightData,
  } = useDefaultSectionArray("insights");

  if (newsLoading) {
    return <Loading />;
  }
  if (newsError) {
    return <Text>Error: {newsError}</Text>;
  }
  if (!newsData || newsData.length === 0) {
    return <Text>No news available</Text>;
  }

  if (insightLoading) {
    return <Loading />;
  }
  if (insightError) {
    return <Text>Error: {insightError}</Text>;
  }
  if (!insightData || insightData.length === 0) {
    return <Text>No insights available</Text>;
  }

  return (
    <>
      <Box textAlign="center" py={10}>
        <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
          RECENT NEWS
        </Heading>
        <Box width="50px" height="2px" bg="red.500" mx="auto" mb={6}></Box>
        <Box marginX={MarginX}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {newsData.slice(0, 3).map((article, blg) => (
              <GridItem
                key={blg}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{
                  boxShadow: "xl",
                  cursor: "pointer",
                  transform: "scale(1.05)",
                  transition: "all 0.3s",
                }}
              >
                <Link href={`/blogs/${article._id}`}>
                  <Image
                    src={
                      article.image
                        ? `https://cms.jmassociates.co.ke/storage/uploads${article.image.path}`
                        : "/Home/about.jpeg"
                    }
                    alt={article.title}
                    objectFit="cover"
                    width="100%"
                    height="200px"
                  />
                  <Box p={4}>
                    <Text fontSize="sm" color="gray.500">
                      {article.start_date}
                    </Text>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold" mt={1}>
                      {article.title}
                    </Heading>
                    <Flex align="center" mt={2}></Flex>
                  </Box>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginX={MarginX}
          py={10}
        >
          <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
            RECENT INSIGHTS
          </Heading>
          <Box width="50px" height="2px" bg="red.500" mx="auto" mb={6}></Box>
        </Box>
        <Box marginX={MarginX}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {insightData.slice(0, 3).map((insight, blx) => (
              <GridItem
                key={blx}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{
                  boxShadow: "xl",
                  cursor: "pointer",
                  transform: "scale(1.05)",
                  transition: "all 0.3s",
                }}
              >
                <Link href={`/blogs/insights/${insight._id}`}>
                  <Image
                    src={
                      insight.image
                        ? `https://cms.jmassociates.co.ke/storage/uploads${insight.image.path}`
                        : "/Home/about.jpeg"
                    }
                    alt={insight.title}
                    objectFit="cover"
                    width="100%"
                    height="200px"
                  />
                  <Box p={4}>
                    <Text fontSize="sm" color="gray.500">
                      {insight.start_date}
                    </Text>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold" mt={1}>
                      {insight.title}
                    </Heading>
                    <Flex align="center" mt={2}>
                      <Text
                        fontSize="sm"
                        color="blue.500"
                        textDecoration="underline"
                      >
                        Read More
                      </Text>
                    </Flex>
                  </Box>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HomeNews;
