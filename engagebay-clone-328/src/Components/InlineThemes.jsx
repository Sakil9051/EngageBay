import { Box, Center, Grid, GridItem, Icon, Image, Square, Stack, Text, transition } from "@chakra-ui/react"
import {BiEdit} from "react-icons/bi";

const themesImages = [
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/template_7.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/popup-forms_05.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/template_8.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/template_9.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/popup-forms_08.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/template_5.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/template_6.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/popup-forms_09.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/popup-forms_10.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/popup-forms_11.png"},
    {Img_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/popup-forms_12.png"},
]
export const InlineThemes = ()=>{
    return (
        <Box>
            <Grid
            templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(4, 1fr)"}} 
            gap="20px"
            >
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
                        <Icon fontSize="5xl" as={BiEdit} />
                        <Text fontSize="lg">Create Custom Form</Text>
                    </Stack>    
                    </Center>
                </GridItem>
                {
                    themesImages.map((item, i)=>(
                        <GridItem
                        key={i}
                         boxShadow="2xl"
                         borderRadius="20px"
                         p="10px"
                         cursor="pointer"
                         transition="padding 0.5s"
                        _hover={{
                            p:"0",
                        }}
                         >
                            <Image w="100%" h="250px"  src={item.Img_url} alt="Theme Image" />
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    )
}