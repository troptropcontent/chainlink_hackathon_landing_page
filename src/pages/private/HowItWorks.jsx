import { Box, Heading, Text, Flex, Image, Container } from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";

function HowItWorks() {
  return (
    <Box py={16} px={8}>
      <Heading size="xl" mb={8} align="center">How It Works</Heading>
      <Flex maxW="container.lg" mx="auto" direction={{ base: "column", lg: "row-reverse" }} align="center">
        <Box flex="1" ml={{ lg: 8 }}>
          <Flex mb={8}>
            <Box as={BsCheckCircle} color="teal.500" size="32px" mr={4} />
            <Box>
              <Heading size="md" mb={2}>Create the Challenge</Heading>
              <Text>Craft the challenge that exactly fits your needs. Set your rules.</Text>
            </Box>
          </Flex>
          <Flex mb={8}>
            <Box as={BsCheckCircle} color="teal.500" size="32px" mr={4} />
            <Box>
              <Heading size="md" mb={2}>Launch the campaign</Heading>
              <Text>Release the challenge, based on your rules and the rewards, challengers are free to take a chance.</Text>
            </Box>
          </Flex>
          <Flex mb={8}>
            <Box as={BsCheckCircle} color="teal.500" size="32px" mr={4} />
            <Box>
              <Heading size="md" mb={2}>Crystal clear winner selection</Heading>
              <Text>All events that must be recorded to win are recorded and counted. No possible cheats, your winner is your winner, he worth what you paid for.</Text>
            </Box>
          </Flex>
          <Flex mb={8}>
            <Box as={BsCheckCircle} color="teal.500" size="32px" mr={4} />
            <Box>
              <Heading size="md" mb={2}>Everything Recorded in the Blockchain</Heading>
              <Text>No possible complains, everything is recorded.</Text>
            </Box>
          </Flex>
        </Box>
        <Box flex="1">
          <Image src="https://via.placeholder.com/500x500" alt="placeholder" />
        </Box>
      </Flex>
    </Box>
  );
}

export default HowItWorks