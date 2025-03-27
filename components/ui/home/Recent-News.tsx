import { MarginX } from "@/utils/constants";
import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaRegComment } from "react-icons/fa";

const newsArticles = [
  {
    id: 1,
    title: "A digital prescription for the pharma",
    date: "May, 26 2017",
    comments: 0,
    imageUrl: "/images/pharma.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Retail banks wake up to digital lending",
    date: "May, 26 2017",
    comments: 0,
    imageUrl: "/images/digital-lending.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "Seven weeks working ‘pro bono’",
    date: "May, 26 2017",
    comments: 0,
    imageUrl: "/images/pro-bono.jpg", // Replace with actual image path
  },
];

const RecentNews = () => {
  return (
    <Box textAlign="center" py={10}>
      <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
        RECENT NEWS
      </Heading>
      <Box width="50px" height="2px" bg="red.500" mx="auto" mb={6}></Box>
      <Box marginX={MarginX}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {newsArticles.map((article) => (
            <GridItem
              key={article.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
            >
              <Image
                src={article.imageUrl}
                alt={article.title}
                objectFit="cover"
                width="100%"
                height="200px"
              />
              <Box p={4}>
                <Text fontSize="sm" color="gray.500">
                  {article.date}
                </Text>
                <Heading as="h3" fontSize="lg" fontWeight="semibold" mt={1}>
                  {article.title}
                </Heading>
                <Flex alignItems="center" color="blue.500" mt={2}>
                  <Icon>
                    <FaRegComment color="red.500" />
                  </Icon>
                  <Text fontSize="sm">{article.comments} Comments</Text>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RecentNews;
