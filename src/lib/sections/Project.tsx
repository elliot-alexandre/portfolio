import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Post from '../components/Card';

export default function Project() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        justifyContent={{ base: 'center' }}
        spacing={{ base: 8, md: 12 }}
        py={{ base: 20, md: 28 }}
        margin={'0 auto'}
        direction={{ base: 'column', md: 'column' }}
      >
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Short heading
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet
            officiis.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10}>
          <Box>
            <Post source="/projects/ronin-pos" />
          </Box>
          <Box>
            <Post source="/projects/ronin-pos" />
          </Box>
          <Box>
            <Post source="/projects/ronin-pos" />
          </Box>
          <Box>
            <Post source="/projects/ronin-pos" />
          </Box>
          <Box>
            <Post source="/projects/ronin-pos" />
          </Box>
          <Box>
            <Post source="/projects/ronin-pos" />
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
