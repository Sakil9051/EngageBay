import React from 'react'
import "./HomeComponents.css"
import {Box,Flex,Heading,Image} from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function ClinetTestimonial() {
  return (
    <Box id="container_Client" pt={10} mt={"80px"}>
      <Box
        id="main_Client"
        bgImage={
          "url('https://appon.radiantthemes.com/wp-content/uploads/2019/01/testmonial-back.png?id=1537')"
        }
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
      >
        <Heading noOfLines={3} size={["sm", "md", "lg"]}>
                      Client Testimonials
                    </Heading>
<Carousel autoPlay infiniteLoop stopOnHover showArrows  showIndicators={"false"} showStatus={"false"}>
                <div >
                   <Image id="crauser-img" src={"https://cdn5.engagebay.com/img/testimonials/santiago.jpeg"} m={"auto"} />
        <Flex mb={5}>
          <Box noOfLines={3}>
            <p id="crauser-para">A full-featured marketing platform. With this, you have all you need to get started and succeed. Having all in one platform make any marketer job much easier.</p>
          </Box>
        </Flex>
        <h4 id="crauser-title">{"Santiago B."}</h4>
        <p id="crauser-desin">{"Southern Europe Director, Triptease"}</p>
                </div>
                <div>
                   <Image id="crauser-img" src={"https://cdn5.engagebay.com/img/testimonials/hongkiat.jpeg"} m={"auto"} />
        <Flex mb={5}>
          <Box noOfLines={3}>
            <p id="crauser-para">EngageBay has everything I need when it comes to managing customer relations and sales activities. The features I most frequently use are automation for sending emails, managing sales, and marketing automation. Plus, having a built-in live chat and help desk tool makes it really easy to engage with customers.</p>
          </Box>
        </Flex>
        <h4 id="crauser-title">{"Hongkiat L."}</h4>
        <p id="crauser-desin">{"Editor-in-chief"}</p>
                </div>
                <div>
                      <Image id="crauser-img" src={"https://cdn5.engagebay.com/img/testimonials/leonard.jpeg"} m={"auto"} />
        <Flex mb={5}>
          <Box noOfLines={3}>
            <p id="crauser-para">Engagebay works pretty well with my business. I was using ActiveCampaign but the costs were adding up quite quickly. I tried other platforms but the automation sequence offered by ActiveCampaign is not easy to find, until, I got Engagebay. The platforms offer an awesome automation platform for emails, plus landing pages and forms. It works quite well and can be a perfect substitute.</p>
          </Box>
        </Flex>
        <h4 id="crauser-title">{"Leonardo W."}</h4>
        <p id="crauser-desin">{"Founder, Wolff Consultoria"}</p>
                </div>
                <div>
                      <Image id="crauser-img" src={"https://cdn5.engagebay.com/img/testimonials/shawn.jpeg"} m={"auto"} />
        <Flex mb={5}>
          <Box noOfLines={6}>
            <p id="crauser-para">The software is easy to set up and implement. I feel EngageBay is quickly becoming a marketing automation competitor to the premium SAAS offerings. EngageBay's customer support has been very responsive and helped me resolve an implementation issue almost immediately.</p>
          </Box>
        </Flex>
        <h4 id="crauser-title">{"Shawn L."}</h4>
        <p id="crauser-desin">{"Marketing Manager, List Biological Laboratories, Inc"}</p>
                </div>
            </Carousel>

      </Box>
    </Box>
  );
}

export default ClinetTestimonial

