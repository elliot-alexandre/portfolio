import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex gap={1}>
      <IconButton
        aria-label="theme toggle"
        icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default ThemeToggle;
