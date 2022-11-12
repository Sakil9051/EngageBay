import { Box, Button, Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";


export const CreateForm = (props)=>{
    const {image_url, form_name, description, btn_txt, handleShow} = props;

   
    
    return (
        <Box bgColor="white" p="20px" borderColor="black">
            <Center bgColor="#F6FAFD" borderRadius={10} padding={8}>
                <Flex w="70%" align="left" gap={5}>
                    <Center w="15%">
                        <Image w="100%"  src={image_url} alt={form_name} />
                    </Center>

                    <Stack spacing={4} w="80%">
                        <Heading 
                        align="left"
                        fontSize="2xl"
                        fontWeight="500" 
                        color="blue.900"
                        >{form_name}</Heading>
                        <Text align="left"
                        color="gray.500"
                        >{description}</Text>
                        <Button colorScheme="blue"
                        width="fit-content"
                        onClick={handleShow}
                        >{btn_txt}</Button>
                    </Stack>
                </Flex>
                
            </Center>
        </Box>
    )
}

