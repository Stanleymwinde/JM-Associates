import { MarginX } from "@/utils/constants";
import {
  Box,
  Input,
  Button,
  Select,
  VStack,
  Text,
  Link,
  HStack,
  Icon,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box bg={"black"} color="white" py={10}>
      <Box marginX={MarginX}>
        <Stack direction={["column", "row"]} gap={4} justify="space-between">
          {/* first column Logo and small writeup */}
          <Box w={["100%", "25%"]}>
            <Box my={2} borderRadius="md" w={40} h={20}>
              <Image src="/Logo.png" alt="JM Associates" objectFit={"cover"} />
            </Box>
            <Text fontSize="md" fontWeight="bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              deserunt veniam dolorum voluptate dolore nesciunt laborum sed
              ullam laudantium odio. Aliquam animi temporibus pariatur harum.
              Eligendi dolor ea placeat voluptatum?
            </Text>
          </Box>
          {/* second column quick links */}
          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold" color={"red.500"}>
              Quick Links
            </Text>

            <Flex direction={"column"} gap={4}>
              <Link href="/about-us" color={"white"}>
                About Us
              </Link>
              <Link href="#" color={"white"}>
                Services
              </Link>
              <Link href="#" color={"white"}>
                Contact Us
              </Link>
            </Flex>
          </VStack>
          {/* third column contacts */}
          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold" color={"red.500"}>
              Contacts
            </Text>
            <Box>
              <Text>+254 733 818 835</Text>
              <Text>+254 722 818 835</Text>
            </Box>
          </VStack>
          {/* fourth column location */}
          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold" color={"red.500"}>
              LOCATION
            </Text>
            <Box>
              <Text>8th Floor, West Park Towers</Text>
              <Text>Mpesi Lane Off, Muthithi Road</Text>
              <Text>Westlands, Nairobi.</Text>
            </Box>
          </VStack>
          {/* fifth column social */}
          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold">
              SOCIAL
            </Text>

            <HStack>
              <Link href="#">
                <Icon size="lg" color="blue.500">
                  <FaFacebookF />
                </Icon>
              </Link>
              <Link href="#">
                <Icon size="lg" color="white">
                  <FaXTwitter />
                </Icon>
              </Link>
              <Link href="#">
                <Icon size="lg" color="red.500">
                  <FaInstagram />
                </Icon>
              </Link>
              <Link href="#">
                <Icon size="lg" color="blue.500">
                  <FaLinkedinIn />
                </Icon>
              </Link>
            </HStack>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
