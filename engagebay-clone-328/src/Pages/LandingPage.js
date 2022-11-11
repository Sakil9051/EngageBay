import { Box, Flex, Button, Image,useDisclosure,Drawer,DrawerBody,DrawerContent,DrawerOverlay,DrawerHeader,AspectRatio} from '@chakra-ui/react'
import React, { useState} from 'react'
import { ArrowBackIcon} from '@chakra-ui/icons'
import {BiBrush} from "react-icons/bi"
import {BsCodeSlash} from "react-icons/bs"
import { Grid } from '@chakra-ui/react'


export const LandingPage = () => {

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
    {modal &&(
        <>
        <Flex mb="4px">
        <Button justifyContent="start">{<ArrowBackIcon/>}</Button>
        </Flex>
        <Box mr={{ base: '24px', md: '40px', lg: '1200px' }}>Choose Templates</Box>
        <Flex>
            <Button>{<BiBrush/>} Theme</Button>
            <Button ml="300px">{<BsCodeSlash/>} Code your own</Button>
        </Flex>
        <Grid templateColumns={{lg :'repeat(6, 1fr)',md:"repeat(3,1fr)"}} gap={6} mt="10" mb="12000px">
  <Image w='100%' h='300' src="https://img.freepik.com/free-psd/landing-page-template-design-newsletter_23-2148948010.jpg?w=2000"/>
  <Image w='100%' h='300'  src='https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg' />
  <Image w='100%' h='300' src='https://themeforest.img.customer.envatousercontent.com/files/398139387/appco-preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=c33277bb43692941d698c6abbcc23301'  />
  <Image w='100%' h='300'  src='https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/10/free-bootstrap-landing-page-templates-1000x750.jpg' />
  <Image w='100%' h='300' src='https://www.abtasty.com/wp-content/uploads/boostrap-landing-page-template-coming-soon.png' />
  <Image w='100%' h='300'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBdi09XV3rsJ6aqJdS09CmGIsdzVLkPaocA&usqp=CAU'/>
  <Image w='100%' h='300'  src='https://onepagelove.imgix.net/2022/10/opl-master-5.jpg?w=540&max-h=540&fit=crop&fp-y=0&auto=compress'/>
  <Image w='100%' h='300' src='https://images.template.net/32960/News-App-Landingpage-Download-0.jpg'/>
  <Image w='100%' h='300' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9I8b40DlxbHv9EMRr5-GdxN2s7kfJ0qrCF7z_j6Rh7CJX9hXJ8B9pL0aKvoxJgTAdcg&usqp=CAU'/>
  <Image w='100%' h='300'  src='https://themefisher.com/blog/bootstrap-landing-page-templates.png'/>
  <Image w='100%' h='300'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29l0usDbK6P5b8Y-GpQac3Wto1NSRL8NaYA&usqp=CAU'/>
  <Image w='100%' h='300' src='https://framerusercontent.com/images/YbKBkXvAJ0z6z1Z79XIi7LBVqAk.jpg'/>
  <Image w='100%' h='300'  src='https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg'/>
  <Image w='100%' h='300' src='https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png' />
  <Image w='100%' h='300'  src='https://static.vecteezy.com/system/resources/thumbnails/007/388/098/small/home-landing-page-travel-nature-template-landing-business-page-digital-website-landing-page-design-concept-vector.jpg'/>
  <Image w='100%' h='300' src="https://img.freepik.com/free-psd/landing-page-template-design-newsletter_23-2148948010.jpg?w=2000"/>
  <Image w='100%' h='300'  src='https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg' />
  <Image w='100%' h='300' src='https://themeforest.img.customer.envatousercontent.com/files/398139387/appco-preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=c33277bb43692941d698c6abbcc23301'  />
  <Image w='100%' h='300'  src='https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/10/free-bootstrap-landing-page-templates-1000x750.jpg' />
  <Image w='100%' h='300' src='https://www.abtasty.com/wp-content/uploads/boostrap-landing-page-template-coming-soon.png' />
  <Image w='100%' h='300'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBdi09XV3rsJ6aqJdS09CmGIsdzVLkPaocA&usqp=CAU'/>
  <Image w='100%' h='300'  src='https://onepagelove.imgix.net/2022/10/opl-master-5.jpg?w=540&max-h=540&fit=crop&fp-y=0&auto=compress'/>
  <Image w='100%' h='300' src='https://images.template.net/32960/News-App-Landingpage-Download-0.jpg'/>
  <Image w='100%' h='300' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9I8b40DlxbHv9EMRr5-GdxN2s7kfJ0qrCF7z_j6Rh7CJX9hXJ8B9pL0aKvoxJgTAdcg&usqp=CAU'/>
  <Image w='100%' h='300'  src='https://themefisher.com/blog/bootstrap-landing-page-templates.png'/>
  <Image w='100%' h='300'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29l0usDbK6P5b8Y-GpQac3Wto1NSRL8NaYA&usqp=CAU'/>
  <Image w='100%' h='300' src='https://framerusercontent.com/images/YbKBkXvAJ0z6z1Z79XIi7LBVqAk.jpg'/>
  <Image w='100%' h='300'  src='https://unbounce.com/photos/12-beautiful-landing-page-templates.jpg'/>
  <Image w='100%' h='300' src='https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png' />
  <Image w='100%' h='300'  src='https://static.vecteezy.com/system/resources/thumbnails/007/388/098/small/home-landing-page-travel-nature-template-landing-business-page-digital-website-landing-page-design-concept-vector.jpg'/>
</Grid>
        


</>
  )}
    <Flex justifyContent="space-between"
      maxW="container.lg"
      mx="auto"
      alignItems={"center"}
        >
        <Image w="30%" src='https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg' alt='easybay'/>
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
