'use client';

import {
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsArrowUpRight } from 'react-icons/bs';

export default function Post(props: any) {
  const router = useRouter();

  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image src={''} fill alt="Example" />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            Blog
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            Boost your conversion rate
          </Heading>
          <Stack
            align={'center'}
            justify={'flex-start'}
            direction={'row'}
            mt={2}
            mb={2}
          >
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #music
            </Badge>
          </Stack>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          <Button
            w={'auto'}
            mt={5}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{
              bg: 'blue.500',
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            color={'white'}
            rounded={'md'}
            onClick={() => router.push(`${props.source}`)}
            rightIcon={<BsArrowUpRight />}
          >
            View More
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
