"use client";
import { usePathname, useParams } from 'next/navigation'; 
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { newsArticles } from '@/utils/constants';

const BlogDetail = () => {
  const { slug } = useParams(); 
  const pathname = usePathname(); 

  if (!slug) {
    return <div>Loading...</div>;
  }

  // Find the blog post based on the slug
  const post = newsArticles.find((article) => article.slug === slug);

  if (!post) {
    return <div>Blog not found</div>; 
  }

  return (
    <Box p={8}>
      <Image
        src={post.image}
        alt={post.title}
        objectFit="cover"
        width="100%"
        height="300px"
        mb={4}
      />
      <Heading as="h1" fontSize="3xl" mb={4}>
        {post.title}
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={4}>
        {post.date}
      </Text>
      <Text fontSize="md">{post.excerpt}</Text>
    </Box>
  );
};

export default BlogDetail;

