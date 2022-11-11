import React, { useEffect } from "react";
import {
  Text,
  Flex,
  Image,
  Grid,
  Box
} from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

 
function ReviewsTab() {
      useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);

  return (
    <>
      <Box
        backgroundColor={"#2c4fbf"}
        bgImage={
          "url('https://cdn5.engagebay.com/new/assets/img/patterns/action-shape-right.svg')"
        }
        bgPosition={"right"}
        bgRepeat={"no-repeat"}
      >
        <Grid
          mt={"40px"}
          w={"full"}
          py={"30px"}
          h={"300px"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text pt={8} fontSize={"25px"} fontWeight={"400"} color={"white"}>
            HAPPY CUSTOMERS SHARE GREAT REVIEWS ON G2
          </Text>
          <div data-aos="fade-right" data-aos-easing="ease-in">
            <Flex w={"90%"} m={"auto"} justify={"space-around"} px={15}>
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_AsiaPacific_HighPerformer.svg"
                alt="Dan Abramov"
              />
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Europe_HighPerformer.svg"
                alt="Dan Abramov"
              />
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_HighPerformer.svg"
                alt="Dan Abramov"
              />
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Small-Business_HighPerformer.svg"
                alt="Dan Abramov"
              />
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_MomentumLeader_Leader.svg"
                alt="Dan Abramov"
              />
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_HighPerformer.svg"
                alt="Dan Abramov"
              />
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Mid-Market_HighPerformer.svg"
                alt="Dan Abramov"
              />
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Small-Business_HighPerformer.svg"
                alt="Dan Abramov"
              />
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/HelpDesk_EasiestAdmin_EaseOfAdmin.svg"
                alt="Dan Abramov"
              />
              <Image
                w={"8vw"}
                src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/OnlineFormBuilder_FastestImplementation_Small-Business_GoLiveTime.svg"
                alt="Dan Abramov"
              />
            </Flex>
          </div>
        </Grid>
      </Box>
    </>
  );
}

export default ReviewsTab
