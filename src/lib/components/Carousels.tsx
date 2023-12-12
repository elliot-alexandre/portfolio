"use client";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 250,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settingsFocus = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 250,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel(props: any) {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const { colorMode } = useColorMode();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const topToggle = useBreakpointValue({ base: "80%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const cards: [string] = props.images;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        w="full"
        position={"relative"}
        style={{ cursor: "pointer" }}
      >
        <Box
          rounded={"md"}
          position={"relative"}
          h={{ base: "300px", sm: "400px", lg: "500px" }}
          width={"full"}
          overflow={"hidden"}
        >
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {cards.length > 1 ? (
            <>
              <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
                opacity={"60%"}
              >
                <BiLeftArrowAlt />
              </IconButton>
              <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
                opacity={"60%"}
              >
                <BiRightArrowAlt />
              </IconButton>
            </>
          ) : (
            <></>
          )}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((url: string, index: number) => (
              <Box
                rounded={"md"}
                key={index}
                height={"6xl"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                backgroundImage={`url(${url})`}
                w={"100%"}
                h={{ base: "300px", sm: "400px", lg: "500px" }}
                onClick={onOpen}
              />
            ))}
          </Slider>
        </Box>
        {/* <IconButton
        position={"absolute"}
        right={0}
        aria-label="theme toggle"
        icon={colorMode === "light" ? <RiZoomInFill /> : <RiZoomInLine />}
        onClick={() => console.log("test")}
      /> */}
      </Flex>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={12}>
            <Box
              rounded={"md"}
              position={"relative"}
              h={{ base: "80vh", sm: "80vh", lg: "80vh" }}
              width={"full"}
              overflow={"hidden"}
            >
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              {cards.length > 1 ? (
                <>
                  <IconButton
                    aria-label="left-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    left={side}
                    top={topToggle}
                    transform={"translate(0%, -50%)"}
                    zIndex={4}
                    onClick={() => slider?.slickPrev()}
                    opacity={"60%"}
                  >
                    <BiLeftArrowAlt />
                  </IconButton>
                  <IconButton
                    aria-label="right-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    right={side}
                    top={topToggle}
                    transform={"translate(0%, -50%)"}
                    zIndex={4}
                    onClick={() => slider?.slickNext()}
                    opacity={"60%"}
                  >
                    <BiRightArrowAlt />
                  </IconButton>
                </>
              ) : (
                <></>
              )}
              <Slider {...settingsFocus} ref={(slider) => setSlider(slider)}>
                {cards.map((url: string, index: number) => (
                  <Box
                    rounded={"md"}
                    key={index}
                    height={"6xl"}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"
                    backgroundImage={`url(${url})`}
                    w={"100%"}
                    h={{ base: "80vh", sm: "80vh", lg: "80vh" }}
                  />
                ))}
              </Slider>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
