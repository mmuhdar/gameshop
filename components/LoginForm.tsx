import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LoginForm() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg={formBackground} p={12} rounded={8}>
        <Heading textAlign="center" color="telegram.400" mb={6}>
          Login
        </Heading>
        <Input
          placeholder="gameshop@mail.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button
          bg="telegram.400"
          color="white"
          _hover={{ bg: "telegram.600" }}
          mb={3}
        >
          Submit
        </Button>
        <Flex justifyContent="space-around">
          <Text
            textAlign="center"
            color="telegram.400"
            cursor="pointer"
            fontWeight="semibold"
            _hover={{ color: "telegram.600" }}
          >
            Sign up
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
