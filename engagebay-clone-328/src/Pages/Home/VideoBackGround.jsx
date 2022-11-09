import React from 'react'
import "./HomeComponents.css";
import {
  Box,
  Text,
  InputGroup,
  Input,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function VideoBackGround() {
  return (
    <>
      <Box w={"100%"} position={"relative"} h={"max-content"}>
        <video autoPlay muted loop id="landing-video">
          <source
            src="https://cdn5.engagebay.com/new/assets/img/videos/bg-wave.mp4"
            type="video/mp4"
          />
        </video>
        <Box
          w={"full"}
          h={"max-content"}
          textAlign={"center"}
          position={"relative"}
          left={0}
          zIndex={2}
          bottom={0}
          pt={"120px"}
        >
          <Text
            size="4xl"
            noOfLines={2}
            lineHeight={"100px"}
            fontWeight={"500"}
            fontSize={"80px"}
          >
            Market better. Sell faster. <br /> Support smarter.
          </Text>
          <Text
            noOfLines={1}
            lineHeight={"70px"}
            fontSize={"30px"}
            fontWeight={"300"}
            mt={2}
            mb={6}
          >
            One platform for all your Marketing, Sales, and Support teams
          </Text>
          <InputGroup
            size="lg"
            w={"50%"}
            m={"auto"}
            p={"2"}
            border={"2px solid tomato"}
            bg={"#FFFFFF"}
            borderRadius={"50px"}
          >
            <Input
              size={["xs","sm","md"]}
              h="55px"
              placeholder="Your email address"
              type="email"
              fontSize="lg"
              border={"none"}
              borderRadius={"50px"}
            />
            <Button
              size={{base: "xs", md:"sm", xl:"md"}}
              p={"10px"}
              bg={"tomato"}
              color={"white"}
              borderRadius={"50px"}
              
            >
            Get Started  
            </Button>
          </InputGroup>

          <Flex justifyContent={"center"} alignItems={"center"} gap={4} mt={3}>
            <Flex alignItems={"center"} gap={1}>
              <CheckCircleIcon color={"purple.500"} />
              <Text>Free for 15 users</Text>
            </Flex>
            <Flex alignItems={"center"} gap={1}>
              <CheckCircleIcon color={"purple.500"} />
              <Text>No credit card required</Text>
            </Flex>
          </Flex>

          <Box w={"full"} mt={3}>
            <Image
              mx={"auto"}
              boxSize="80%"
              src="https://cdn5.engagebay.com/new/assets/img/banner-image.svg"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Box>
      <Box
        w={"full"}
        py={"60px"}
        paddingLeft={"5rem"}
        bgImage={
         "url('https://cdn5.engagebay.com/new/assets/img/patterns/bg-with-dotted.svg')"
        }
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
      >
        <Box className='Partners'>
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/business.png"
            alt="Engagebay Logo"
          />
        </Box>
      </Box>
    </>
  );
}

export default VideoBackGround
