import { Flex } from '@chakra-ui/react';
import Hero from '~/lib/sections/Hero';
import Project from '~/lib/sections/Project';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <Hero />
      <Project />
    </Flex>
  );
};

export default Home;
