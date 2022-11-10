import React from 'react'
import {Box,Text, Flex, InputGroup, Input,Button} from '@chakra-ui/react'
import {CheckCircleIcon} from '@chakra-ui/icons'

function GetStartedBox() {
  return (
    <>
      <Box
        w={"full"}
        h={"max-content"}
        textAlign={"center"}
        mt={"120px"}
        py={"120px"}
        bgColor={"#f8f9fa"}
      >
        <Text fontWeight={"600"} fontSize={"30px"}>
          Simplify Marketing, Sales, & Support with the best free
        </Text>
        <Text
          fontSize={"30px"}
          fontWeight={"700"}
          mt={1}
          mb={6}
          color={"purple.600"}
        >
          All-In-One CRM software
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
            width="75%"
            h="55px"
            placeholder="Your email address"
            type="email"
            fontSize="lg"
            border={"none"}
            borderRadius={"50px"}
          />
          <Button
            width="25%"
            h="55px"
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
      </Box>
    </>
  );
}

export default GetStartedBox
