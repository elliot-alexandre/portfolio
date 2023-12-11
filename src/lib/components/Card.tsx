"use client";

import {
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowUpRight } from "react-icons/bs";

export default function Post(data: any) {
  const router = useRouter();

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            objectFit="cover"
            src={data.preview.url}
            fill
            alt={data.preview.alt}
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {data.category}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {data.title}
          </Heading>
          <Wrap
            align={"center"}
            justify={"flex-start"}
            direction={"row"}
            mt={2}
            mb={2}
          >
            {data.tags.map((tag: any, index: number) => (
              <WrapItem>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                  key={index}
                >
                  {tag}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
          <Text color={"gray.500"} noOfLines={5}>
            {data.shortDescription}
          </Text>
          <Button
            w={"auto"}
            mt={5}
            colorScheme={"blue"}
            bg={"blue.400"}
            _hover={{
              bg: "blue.500",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            color={"white"}
            rounded={"md"}
            onClick={() => router.push(`${data?.source.url}`)}
            rightIcon={<BsArrowUpRight />}
          >
            View More
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
