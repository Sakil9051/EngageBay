import { Box, Button, Center, Flex, Grid, GridItem, Icon, Stack, Text } from "@chakra-ui/react"
import {RiFileListLine} from "react-icons/ri";
import {BsBoxArrowInUpRight, BsBoxArrowInDownLeft, BsBoxArrowInDownRight} from "react-icons/bs";


const content = [
    {icon:BsBoxArrowInUpRight, text:"Popup", textColor:"orange", bgColor:"pink.50"},
    {icon:RiFileListLine, text:"Noty Bar", textColor:"blue", bgColor:"blue.50"},
    {icon:BsBoxArrowInDownLeft, text:"Popup Bottom Left", textColor:"hotpink", bgColor:"pink.100"},
    {icon:BsBoxArrowInDownRight, text:"Popup Bottom Right", textColor:"teal", bgColor:"blue.100"},
]

export const PopupStyle = () => {
    return (
        <Flex 
        w="98%" 
        m="auto" 
        gap="20px"
        minH="100vh"
        direction={{base:"column", lg:"row"}}
        >
            <Box 
            w={{base:"100%", lg:"35%"}} 
            border="1px dashed gray"
            borderRadius="10px"
            p="20px"
            >
                <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(2, 150px)"
                gap="20px"
                >

                {
                    content.map((item, i)=>(
                        <GridItem  
                        boxShadow="xl"
                        p="10px"
                        alignItems="center"
                        bgColor={item.bgColor}
                        borderRadius="5px"
                        cursor="pointer"
                        color={item.textColor}
                        key={i}
                        >
                            <Center h="100%">
                            <Stack align="center">
                                <Icon fontSize="5xl" as={item.icon} />
                                <Text fontSize="lg">{item.text}</Text>
                            </Stack>    
                            </Center>
                        </GridItem>
                    ))
                }
               

                </Grid>
            </Box>
           
            {/* https://s3.amazonaws.com/board-uploads/uploads/1523349187250-form4_border.png */}
           <Box 
            w={{base:"100%", lg:"70%"}} 
            minH="100%"
            border="1px dashed gray"
            borderRadius="10px"
            bgColor="blackAlpha.100"
           >
                <Box
                w="80%"
                minH="80%"
                m="auto"
                my="40px"
                bgColor="#494A4B"
                borderRadius="10px"
                py="40px"
               
                >
                    <Stack 
                    w="70%"
                    m="auto"
                    p="50px"
                    pb="70px"
                    bgImage="https://s3.amazonaws.com/board-uploads/uploads/1523349187250-form4_border.png"
                    bgRepeat="no-repeat"
                    bgSize="100% 100%"
                    textAlign="left"
                    bgColor="white"
                    spacing="5"
                    >
                        <Text fontSize="1.4rem">Signup for email updates</Text>
                        <Button colorScheme="blue">Subscribe now</Button>
                    </Stack>
                </Box>
           </Box>
        </Flex>
    )
}

