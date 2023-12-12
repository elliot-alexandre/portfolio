"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Badge,
  Box,
  Button,
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
import { RiGithubFill } from "react-icons/ri";
import Carousel from "~/lib/components/Carousels";

function ProjectPage(data: any) {
  const openTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  function RenderLinks(link: any) {
    switch (link.type) {
      case "Link":
        return (
          <Link isExternal={true} href={link.src}>
            {link.name}
          </Link>
        );
        break;
      case "Button":
        return (
          <Button
            rounded={"full"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            onClick={() => openTab(link.src)}
            leftIcon={<RiGithubFill color={"gray.300"} />}
          >
            {link.name}
          </Button>
        );
        break;
      default:
        return;
        break;
    }
  }

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
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("green.500", "green.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
            >
              ({data.date})
            </Text>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{data.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("green.500", "green.300")}
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

            {data.links.length > 0 ? (
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("green.500", "green.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  References
                </Text>

                {data.links.map((link: any, index: number) =>
                  RenderLinks(link)
                )}
              </Box>
            ) : (
              <></>
            )}
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default ProjectPage;
