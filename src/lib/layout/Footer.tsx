import { Flex, Text, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="center"
      alignContent={"center"}
    >
      <Text fontSize="sm">{new Date().getFullYear()} - Elliot A. Pellerin</Text>
    </Flex>
  );
};

export default Footer;
