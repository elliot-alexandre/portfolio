'use client';
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { RiHome2Fill, RiHome2Line } from 'react-icons/ri';

const HomeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex gap={1}>
      <Link href={'/'}>
        <IconButton
          aria-label="theme toggle"
          icon={colorMode === 'light' ? <RiHome2Fill /> : <RiHome2Line />}
        />
      </Link>
    </Flex>
  );
};

export default HomeButton;
