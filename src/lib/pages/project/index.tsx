"use client";

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
} from "@chakra-ui/react";
import Carousel from "~/lib/components/Carousels";

function ProjectPage(data: any) {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        {data.images.length !== 0 ? (
          <Flex>
            <Carousel images={data.images} />
          </Flex>
        ) : (
          <></>
        )}

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data?.title}
            </Heading>
            <Stack
              align={"center"}
              justify={"flex-start"}
              direction={"row"}
              mt={2}
              mb={2}
            >
              {data.tags.map((tag: any, index: number) => (
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                  key={index}
                >
                  {tag}
                </Badge>
              ))}
            </Stack>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{data.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Technologies
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  {data.tech.map((item: string, index: number) =>
                    index % 2 === 0 ? (
                      <ListItem key={index}>{item}</ListItem>
                    ) : (
                      <></>
                    )
                  )}
                </List>

                <List spacing={2}>
                  {data.tech.map((item: string, index: number) =>
                    index % 2 !== 0 ? (
                      <ListItem key={index}>{item}</ListItem>
                    ) : (
                      <></>
                    )
                  )}
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default ProjectPage;
