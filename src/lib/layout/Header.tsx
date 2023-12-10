import { Box, Flex } from '@chakra-ui/react';

import HomeButton from './Home';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justifyContent={'space-between'}
    >
      <Box marginRight="auto">
        <HomeButton />
      </Box>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
