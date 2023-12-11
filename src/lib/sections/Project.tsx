import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import Post from "../components/Card";
import { projects } from "../data";
export default function Project() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        justifyContent={{ base: "center" }}
        spacing={{ base: 8, md: 12 }}
        py={{ base: 20, md: 28 }}
        margin={"0 auto"}
        direction={{ base: "column", md: "column" }}
      >
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Projects
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            Here a small list of some of the projects I've worked on.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10}>
          {projects.map((data, index) => (
            <Box key={index}>
              <Post {...data} />
            </Box>
          ))}
          <></>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
