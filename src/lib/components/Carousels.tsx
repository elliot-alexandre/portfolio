"use client";

import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
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

export default function Carousel(props: any) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const cards: [string] = props.images;
  // These are the images used in the slide
  return (
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
          />
        ))}
      </Slider>
    </Box>
  );
}
