import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export default function GetAQuote() {
  return (
    <Box
      bgImage="url('/slider/Slide1.jpg')"
      bgSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      py={20}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="red.900"
        opacity={0.7}
      />
      <Container
        maxW="6xl"
        position="relative"
        color="white"
        textAlign="center"
      >
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          GET A QUOTE
        </Text>
        <Text mb={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ultrices consectetur euismod.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Input
            placeholder="Name"
            bg="whiteAlpha.800"
            color="black"
            _placeholder={{ color: "gray.600" }}
          />
          <Input
            placeholder="Company"
            bg="whiteAlpha.800"
            color="black"
            _placeholder={{ color: "gray.600" }}
          />
          <Input
            placeholder="Email"
            bg="whiteAlpha.800"
            color="black"
            _placeholder={{ color: "gray.600" }}
          />
          <Input
            placeholder="Phone"
            bg="whiteAlpha.800"
            color="black"
            _placeholder={{ color: "gray.600" }}
          />
          <Textarea
            placeholder="Message"
            bg="whiteAlpha.800"
            color="black"
            _placeholder={{ color: "gray.600" }}
            height={{ base: "100px", md: "150px" }}
            gridColumn={{ base: "span 1", md: "span 2" }}
          />
        </SimpleGrid>

        <Flex justify="center" mt={6}>
          <Button
            bg="black"
            color="white"
            size="lg"
            _hover={{ bg: "gray.700" }}
          >
            SUBMIT
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
