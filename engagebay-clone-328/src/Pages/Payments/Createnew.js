import { Box , Button, Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
export const CreateNew = () => {
  const [show, setShow] = useState(true);

  const handleShowCreate = () => {
    setShow(false);
  };
  return (
    <>
      <Box>
        {show ? (
         <Box bgColor="white" p="20px" borderColor="black" mb="150px" mt="150px" ml="250px">
         <Center bgColor="#F6FAFD" borderRadius={10} padding={8}>
             <Flex w="100%" align="left" gap={5}>
                 <Center w="15%">
                     <Image w="100%"  src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/upgrade.svg"alt="Upgrade" />
                 </Center>

                 <Stack spacing={4} w="80%">
                     <Heading 
                     align="left"
                     fontSize="2xl"
                     fontWeight="500" 
                     color="blue.900"
                     >Upgrade</Heading>
                     <Text align="left"
                     color="gray.500"
                     >Sorry, your plan does not support this feature. Please upgrade your account to access.</Text>
                     <Button colorScheme="blue"
                     width="fit-content"
                     onClick={handleShowCreate}
                     >Upgrade</Button>
                 </Stack>
             </Flex>
             
         </Center>
     </Box>
        ) :null}
      </Box>
    </>
  );
};
