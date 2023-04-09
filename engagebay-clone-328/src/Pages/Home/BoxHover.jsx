import React, { useEffect } from "react";
import { Text, Image, Grid,SimpleGrid, GridItem, Heading, Box } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

function BoxHover() {
  let Data = [
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/automation.svg",
      "Automation",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/calling.svg",
      "Calling",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/company-management.svg",
      "Company Management",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/contact-management.svg",
      "Contact Management",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/deal-management.svg",
      "Deal Management",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/email-broadcast.svg",
      "Email Broadcast",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/email-sequences.svg",
      "Email Sequence",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/email-template-builder.svg",
      "Email Template Builder",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/forms.svg",
      "Forms",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/help-desk.svg",
      "Help Desk",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/landing-pages.svg",
      "Landing Pages",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/live-chat.svg",
      "Live Chat",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/milestone-tracking.svg",
      "Milestone Tracking",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/calendar.svg",
      "Calender",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/products.svg",
      "Products",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/proposal.svg",
      "Proposal",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/push-notifications.svg",
      "Push Notifications",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/segmentation.svg",
      "Segmentation",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/site-messaging.svg",
      "Site Messaging",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/sms-broadcast.svg",
      "SMS Broadcast",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/social-posts-scheduling.svg",
      "Social Post Scheduling",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/social-suite.svg",
      "Social Suite",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/sticky-bars.svg",
      "Sticky Bars",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/task-management.svg",
      "Task Management",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/team-management.svg",
      "Team Management",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/video-templates.svg",
      "Video Templates",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/web-analytics.svg",
      "Web Analytics",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/ab-landing-pages.svg",
      "A/B Landing Pages",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/custom-reporting.svg",
      "Custom Reporting",
    ],
    [
      "https://cdn5.engagebay.com/assets/img/icons/eb-features/workflows.svg",
      "Workflows",
    ],
  ];

      useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);

  return (
    <Box w={"full"} mt={10} pt={10}>
      <Box w={"70%"} textAlign={"center"} my={10} m={"auto"}>
        <Heading opacity={1} mb={"25px"}>
          Do It All With EngageBay
        </Heading>
        <Text color={"#677294"} fontSize={"1.25rem"}>
          Stop paying thousands of dollars to dozens of marketing, sales, and
          support software. Experience the world's most affordable, unified
          software. EngageBay's all-in-one CRM software is the most
          comprehensive solution for your business.
        </Text>
      </Box>
      <Box w={"full"} m={"auto"} mt={10} pt={10}>
        <SimpleGrid
          m={"auto"}
          w={"90%"}
          mt={10}
          // gap={"10px"}
          spacing={5}
          columns={[2,3,4,6]}
        >
          {Data.map((ele) => (
            <div key={ele[1]} data-aos="fade-up" data-aos-easing="ease-in">
              <GridItem
                textAlign={"center"}
                w={"170px"}
                h={"190px"}
                bg={"#f5f7fb"}
                borderRadius={"10px"}
                p={6}
                transition={"transform .2s"}
                _hover={{
                  border: "2px solid",
                  borderColor: "#335eea;",
                  transform: "scale(1.05)",
                }}
              >
                <Image w={"90px"} src={ele[0]} alt="img" m={"auto"} />
                <Text mt={3} fontSize={17} fontWeight={600}>
                  {ele[1]}
                </Text>
              </GridItem>
            </div>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default BoxHover;
