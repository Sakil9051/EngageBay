import { Box, Flex, Button, Image,useDisclosure,Drawer,DrawerBody,DrawerContent,Center,Icon,Stack,Text,GridItem,DrawerOverlay,DrawerHeader,AspectRatio} from '@chakra-ui/react'
import React, { useState} from 'react'
import { ArrowBackIcon} from '@chakra-ui/icons'
import {BiBrush,BiEdit} from "react-icons/bi"
import {BsCodeSlash} from "react-icons/bs"
import { Grid } from '@chakra-ui/react'
import DashNavbar from '../Components/DashNav'


export const LandingPage = () => {
  let img=[
    {url:"https://img.freepik.com/free-psd/landing-page-template-design-newsletter_23-2148948010.jpg?w=2000"},
    {url:"https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg"},
    {url:"https://themeforest.img.customer.envatousercontent.com/files/398139387/appco-preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=c33277bb43692941d698c6abbcc23301"},
    {url:"https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/10/free-bootstrap-landing-page-templates-1000x750.jpg"},
    {url:"https://www.abtasty.com/wp-content/uploads/boostrap-landing-page-template-coming-soon.png"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBdi09XV3rsJ6aqJdS09CmGIsdzVLkPaocA&usqp=CAU"},
    {url:"https://themefisher.com/blog/bootstrap-landing-page-templates.png"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29l0usDbK6P5b8Y-GpQac3Wto1NSRL8NaYA&usqp=CAU"},
    {url:"https://framerusercontent.com/images/YbKBkXvAJ0z6z1Z79XIi7LBVqAk.jpg"},
    {url:"https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg"},
    {url:"https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png"},
    {url:"https://static.vecteezy.com/system/resources/thumbnails/007/388/098/small/home-landing-page-travel-nature-template-landing-business-page-digital-website-landing-page-design-concept-vector.jpg"},
    {url:"https://img.freepik.com/free-psd/landing-page-template-design-newsletter_23-2148948010.jpg?w=2000"},
    {url:"https://img.freepik.com/free-psd/landing-page-template-design-newsletter_23-2148948010.jpg?w=2000"},
    {url:"https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg"},
    {url:"https://themeforest.img.customer.envatousercontent.com/files/398139387/appco-preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=c33277bb43692941d698c6abbcc23301"},
    {url:"https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/10/free-bootstrap-landing-page-templates-1000x750.jpg"},
    {url:"https://www.abtasty.com/wp-content/uploads/boostrap-landing-page-template-coming-soon.png"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBdi09XV3rsJ6aqJdS09CmGIsdzVLkPaocA&usqp=CAU"},
    {url:"https://themefisher.com/blog/bootstrap-landing-page-templates.png"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29l0usDbK6P5b8Y-GpQac3Wto1NSRL8NaYA&usqp=CAU"},
    {url:"https://framerusercontent.com/images/YbKBkXvAJ0z6z1Z79XIi7LBVqAk.jpg"},
    {url:"https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg"},
    {url:"https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png"},
    {url:"https://static.vecteezy.com/system/resources/thumbnails/007/388/098/small/home-landing-page-travel-nature-template-landing-business-page-digital-website-landing-page-design-concept-vector.jpg"},
    {url:"https://img.freepik.com/free-psd/landing-page-template-design-newsletter_23-2148948010.jpg?w=2000"},
    {url:"https://img.freepik.com/free-psd/landing-page-template-design-newsletter_23-2148948010.jpg?w=2000"},
    {url:"https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg"},
    {url:"https://themeforest.img.customer.envatousercontent.com/files/398139387/appco-preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=c33277bb43692941d698c6abbcc23301"},
    {url:"https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/10/free-bootstrap-landing-page-templates-1000x750.jpg"},
    {url:"https://www.abtasty.com/wp-content/uploads/boostrap-landing-page-template-coming-soon.png"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBdi09XV3rsJ6aqJdS09CmGIsdzVLkPaocA&usqp=CAU"},
    {url:"https://themefisher.com/blog/bootstrap-landing-page-templates.png"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29l0usDbK6P5b8Y-GpQac3Wto1NSRL8NaYA&usqp=CAU"},
    {url:"https://framerusercontent.com/images/YbKBkXvAJ0z6z1Z79XIi7LBVqAk.jpg"},
    {url:"https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg"},
    {url:"https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png"},
    {url:"https://static.vecteezy.com/system/resources/thumbnails/007/388/098/small/home-landing-page-travel-nature-template-landing-business-page-digital-website-landing-page-design-concept-vector.jpg"},
    {url:"https://img.freepik.com/free-psd/landing-page-template-design-newsletter_23-2148948010.jpg?w=2000"},
   
  ]
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
  return (
   <>
   <DashNavbar/>
    {modal &&(
        <>
        <Flex mb="4px"  mt="10px">
        <Button justifyContent="start">{<ArrowBackIcon/>}</Button>
        </Flex>
        <Box mr={{ base: '24px', md: '600px', lg: '800px' }} align="left">Choose Templates</Box>
        <Flex w="80%">
            <Button bg="blue.100">{<BiBrush/>} Theme</Button>
            <Button ml="300px">{<BsCodeSlash/>} Code your own</Button>
        </Flex>
        <Box mt="20px">
            <Grid
            templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(4, 1fr)"}} 
            gap="20px"
            >
                <GridItem  
                boxShadow="2xl"
                p="10px"
                alignItems="center"
                bgColor="blue.100"
                borderRadius="20px"
                cursor="pointer"
               
                >
                    <Center h="100%">
                    <Stack align="center" color="blue.400">
                        <Icon fontSize="5xl" as={BiEdit} />
                        <Text fontSize="lg">Blank Template</Text>
                    </Stack>    
                    </Center>
                </GridItem>
                {
                    img.map((item, i)=>(
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
                            <Image w="100%" h="250px"  src={item.url} alt="Theme Image" />
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
        


</>
  )}
    <Flex bg="blue.100" mt="20px" justifyContent="space-between"
      maxW="container.lg"
      mx="auto"
      alignItems={"center"}
        >
        <Image  w="30%" src='https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg' alt='easybay'/>
        <Box>
          <h1>Landing Pages</h1><br/>
          <p>Create beautiful, responsive and high converting landing pages in minutes without writing any code.

Choose from our wide range of landing page templates and increase your conversion rates instantly. Creating landing pages has never been this easy.</p>
          <Flex justifyContent="space-between" ><Button onClick={toggleModal}>Create Landing Page</Button>
           <h1>   OR </h1> <Button onClick={onOpen}>Watch help video</Button>
           <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Landing pages</DrawerHeader>
          <DrawerBody>
            <AspectRatio maxW='560px' ratio={1}>
                <iframe 
                title='Landing Pages in EngageBay'
                src='https://www.youtube.com/embed/9zSJT1rkHVk'
                />
            </AspectRatio>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
           </Flex>
           
        </Box>
      </Flex>
    </>
  )
}
