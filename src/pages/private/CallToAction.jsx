import { Box, Button, Heading, Text } from "@chakra-ui/react";

function CallToAction() {
  return (
    <Box bg="teal.500" py={16} px={8}>
      <Heading size="xl" color="white" mb={4}>Ready to start a challenge?</Heading>
      <Text color="white" mb={8}>It will only takes you a few minutes.</Text>
      <Button colorScheme="white" size="lg">Get started</Button>
    </Box>
  );
}

export default CallToAction