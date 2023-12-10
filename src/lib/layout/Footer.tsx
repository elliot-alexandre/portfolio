import { Flex, Link, Text, useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="center"
      alignContent={'center'}
    >
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link href="" isExternal rel="noopener noreferrer">
          Elliot A. Pellerin
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
