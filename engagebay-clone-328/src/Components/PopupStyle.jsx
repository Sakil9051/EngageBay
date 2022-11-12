import { Box, Center, Flex, Grid, GridItem, Icon, Stack, Text } from "@chakra-ui/react"


const content = [
    {icon:"", text:"Popup"},
    {icon:"", text:"Popup"},
    {icon:"", text:"Popup"},
    {icon:"", text:"Popup"},
]
export const PopupStyle = () => {
    return (
        <Flex>
            <Box>
                <Grid>
                <GridItem  
                boxShadow="2xl"
                p="10px"
                alignItems="center"
                bgColor="#FFF4DE"
                borderRadius="20px"
                cursor="pointer"
               
                >
                    <Center h="100%">
                    <Stack align="center" color="orange.400">
                        <Icon fontSize="5xl"  />
                        <Text fontSize="lg">Create Custom Form</Text>
                    </Stack>    
                    </Center>
                </GridItem>
                    <GridItem></GridItem>
                    <GridItem></GridItem>
                    <GridItem></GridItem>
                </Grid>
            </Box>
           
        </Flex>
    )
}

