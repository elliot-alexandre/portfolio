'use client';

import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Carousel from '~/lib/components/Carousels';

export default function ProjectPage() {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Carousel />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              Automatic Watch
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
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
