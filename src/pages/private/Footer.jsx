import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.200" py={8} px={4}>
      <Flex maxW="container.lg" mx="auto" direction={{ base: "column", lg: "row" }}>
        <Box flex="1" mr={{ lg: 8 }}>
          <Heading size="md" mb={4}>About Us</Heading>
          <Text mb={2}>Chainfluence inc.</Text>
        </Box>
        <Box flex="1" mr={{ lg: 8 }}>
          <Heading size="md" mb={4}>Links</Heading>
          <Link href="#" mb={2}>Home</Link>
          <Link href="#" mb={2}>About Us</Link>
          <Link href="#" mb={2}>Contact Us</Link>
        </Box>
        <Box flex="1">
          <Heading size="md" mb={4}>Contact Us</Heading>
          <Text mb={2}>123 Main Street</Text>
          <Text mb={2}>City, State 12345</Text>
          <Text mb={2}>Email: info@company.com</Text>
          <Text mb={2}>Phone: 123-456-7890</Text>
        </Box>
      </Flex>
      <Box mt={8}>
        <Text textAlign="center" fontSize="sm" color="gray.500">&copy; {new Date().getFullYear()} Company. All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default Footer