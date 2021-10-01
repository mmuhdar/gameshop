import { Button, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems="center" px={20} py={5}>
      <Heading color="telegram.400">Gameshop</Heading>
      <Spacer />
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? (
          <MoonIcon color="telegram.400" />
        ) : (
          <SunIcon color="telegram.400" />
        )}
      </Button>
    </Flex>
  );
}
