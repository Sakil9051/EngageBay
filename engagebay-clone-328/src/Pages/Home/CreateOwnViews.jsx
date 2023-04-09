import React, { useEffect } from 'react'
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  Divider,
  Heading,
  Grid,
  GridItem,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  border,
} from "@chakra-ui/react";
import { CheckCircleIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Aos from "aos";
import "aos/dist/aos.css";

function CreateOwnViews() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Box w={"full"} m={"auto"} mt={"10"} pt={"10"}>
        <Box textAlign={"center"}>
          <Heading mb={"5"}>Create Your Own Views</Heading>
          <Text fontSize={20}>
            From identifying new opportunities to delivering customer happiness
          </Text>
        </Box>

        <Tabs w={"100%"} m={"auto"} mt={9}>
          <TabList w={"90%"} m={"auto"}>
            <Box m={"auto"} w={"100%"} className="plans">
              <Tab
                fontSize={"25px"}
                fontWeight={"700"}
                _selected={{
                  borderColor: "purple.400",
                }}
              >
                Marketing Software
              </Tab>
              <Tab
                fontSize={"25px"}
                fontWeight={"700"}
                _selected={{
                  borderColor: "purple.400",
                }}
              >
                Free CRM Features
              </Tab>
              <Tab
                fontSize={"25px"}
                fontWeight={"700"}
                _selected={{
                  borderColor: "purple.400",
                }}
              >
                Sales Software
              </Tab>
              <Tab
                fontSize={"25px"}
                fontWeight={"700"}
                _selected={{
                  borderColor: "purple.400",
                }}
              >
                Help Desk Software
              </Tab>
            </Box>
          </TabList>

          <TabPanels mt={10} pt={10} w={"full"}>
            <TabPanel w={"full"}>
              <Box
                w={"100%"}
                m={"auto"}
                px={10}
                className="plans-content"
              >
                <div
                  style={{ width: "70%", margin: "auto" }}
                  data-aos="fade-right"
                >
                  <Box m={"auto"} p={5}>
                    <Heading noOfLines={3} size={["sm", "md", "lg", "2xl"]}>
                      Market Your Business Like the World’s Best Companies
                    </Heading>
                    <Divider mt={"2"} />
                    <Text mt={"3"} noOfLines={6}>
                      With our comprehensive set of Marketing tools, including
                      Email Marketing, Marketing Automation, Email Template
                      Builder, Landing Page Builder, Lead Generation tools,
                      Social Suite & more, your marketing team can take things
                      to the next level.
                    </Text>
                  </Box>
                  <Grid
                    px={5}
                    pt={5}
                    templateRows="repeat(4, 1fr)"
                    templateColumns="repeat(2,1fr)"
                    gap={1}
                    justifyContent="center"
                  >
                    <GridItem rowSpan={1} colSpan={2}>
                      <Text>POPULAR MARKETING FEATURES</Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Email Marketing</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Lead Generation tools</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Marketing Automation</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Landing Pages</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1} >
                      <Button
                        boxShadow="2xl"
                        p="6"
                        rounded="md"
                        bg="white"
                        color={"purple.600"}
                        _hover={{ color: "purple.700" }}
                        py={6}
                        size={["sm", "md"]}
                      >
                        <Flex gap={"40px"} alignItems={"center"}>
                          <Text>Explore Marketing Software </Text>
                          <ArrowForwardIcon />
                        </Flex>
                      </Button>
                    </GridItem>
                  </Grid>
                </div>
                <div
                  style={{ width: "50%", margin: "auto" }}
                  data-aos="fade-left"
                  className='planings-container-right-side-container'
                >
                  <Box position={"relative"}>
                    <video autoPlay muted loop id="tab-video">
                      <source
                        src="https://cdn5.engagebay.com/assets/img/videos/bubble-1.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <Box
                      position={"relative"}
                      zIndex={2}
                      top={0}
                      left={0}
                      mx={"auto"}
                      w={"full"}
                    >
                      <Image
                        w={"70%"}
                        mx={"auto"}
                        src="https://cdn5.engagebay.com/assets/img/tabs/home/marketing_software.png"
                        alt="Dan Abramov"
                      />
                    </Box>
                  </Box>
                </div>
              </Box>
            </TabPanel>
            <TabPanel w={"full"}>
              <Box
                w={"100%"}
                px={10}
                m={"auto"}
                gap={5}
                className="plans-content"
              >
                <div
                  style={{ width: "50%", margin: "auto" }}
                  data-aos="fade-right"
                >
                  <Box m={"auto"} px={5}>
                    <Heading noOfLines={3} size={["sm", "md", "lg", "2xl"]}>
                      Build Lasting Customer Relationships
                    </Heading>
                    <Divider mt={2} />
                    <Text mt={"3"} noOfLines={6}>
                      Along with a full stack of software for marketing, sales,
                      and customer service, EngageBay also offers a completely
                      free CRM at its core. While they’re powerful when used
                      individually, they are at their best when used together.
                    </Text>
                  </Box>
                  <Grid
                    px={5}
                    pt={5}
                    templateRows="repeat(4, 1fr)"
                    templateColumns="repeat(2,1fr)"
                    gap={1}
                    justifyContent="center"
                  >
                    <GridItem rowSpan={1} colSpan={2}>
                      <Text>POPULAR FEATURES</Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Contact Management</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Tasks</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Deal Pipeline</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Appointment Scheduling</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                      <Button
                        boxShadow="2xl"
                        p={6}
                        rounded="md"
                        bg="white"
                        color={"purple.600"}
                        _hover={{ color: "purple.700" }}
                        size={["sm", "md"]}
                      >
                        <Flex gap={"40px"} alignItems={"center"}>
                          <Text>Explore Marketing Software </Text>
                          <ArrowForwardIcon />
                        </Flex>
                      </Button>
                    </GridItem>
                  </Grid>
                </div>
                <div
                  style={{ width: "50%", margin: "auto" }}
                  data-aos="fade-left"
                  className='planings-container-right-side-container'
                >
                  <Box position={"relative"}>
                    <video autoPlay muted loop id="tab-video">
                      <source
                        src="https://cdn5.engagebay.com/assets/img/videos/bubble-2.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <Box
                      position={"relative"}
                      zIndex={2}
                      top={0}
                      left={0}
                      mx={"auto"}
                      w={"full"}
                    >
                      <Image
                        w={"70%"}
                        mx={"auto"}
                        src="https://cdn5.engagebay.com/assets/img/tabs/home/free_crm_features.png"
                        alt="Dan Abramov"
                      />
                    </Box>
                  </Box>
                </div>
              </Box>
            </TabPanel>
            <TabPanel w={"full"}>
              <Box
                w={"100%"}
                px={10}
                m={"auto"}
                gap={5}
                className="plans-content"
              >
                <div
                  style={{ width: "50%", margin: "auto" }}
                  data-aos="fade-right"
                >
                  <Box m={"auto"} px={5}>
                    <Heading noOfLines={2} size={["sm", "md", "lg", "2xl"]}>Sell Like the Pros </Heading>
                    <Divider mt={2} />
                    <Text mt={"3"} noOfLines={6} >
                      With our exhaustive set of Sales tools such as Contact
                      Management, Email Tracking, Telephony, Appointment
                      Scheduling, Project Management, Gamification.
                    </Text>
                  </Box>
                  <Grid
                    px={5}
                    pt={5}
                    templateRows="repeat(4, 1fr)"
                    templateColumns="repeat(2,1fr)"
                    gap={1}
                    justifyContent="center"
                  >
                    <GridItem rowSpan={1} colSpan={2}>
                      <Text>POPULAR SALES AUTOMATION FEATURES</Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Telephony</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Sales Automation</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Multiple Deal Pipelines</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Email Sequences</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                      <Button
                        boxShadow="2xl"
                        p={6}
                        rounded="md"
                        bg="white"
                        color={"purple.600"}
                        _hover={{ color: "purple.700" }}
                        size={["sm", "md"]}
                      >
                        <Flex gap={"40px"} alignItems={"center"}>
                          <Text>Explore Marketing Software </Text>
                          <ArrowForwardIcon />
                        </Flex>
                      </Button>
                    </GridItem>
                  </Grid>
                </div>
                <div
                  style={{ width: "50%", margin: "auto" }}
                  data-aos="fade-left"
                  className='planings-container-right-side-container'
                >
                  <Box position={"relative"}>
                    <video autoPlay muted loop id="tab-video">
                      <source
                        src="https://cdn5.engagebay.com/assets/img/videos/bubble-3.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <Box
                      position={"relative"}
                      zIndex={2}
                      top={0}
                      left={0}
                      mx={"auto"}
                      w={"full"}
                    >
                      <Image
                        w={"70%"}
                        mx={"auto"}
                        src="https://cdn5.engagebay.com/assets/img/tabs/home/sales_software.png"
                        alt="Dan Abramov"
                      />
                    </Box>
                  </Box>
                </div>
              </Box >
            </TabPanel>{" "}
            <TabPanel w={"full"}>
              <Box
                w={"100%"}
                px={10}
                m={"auto"}
                gap={5}
                className="plans-content"
              >
                <div
                  style={{ width: "50%", margin: "auto" }}
                  data-aos="fade-right"
                >
                  <Box m={"auto"} px={5}>
                    <Heading noOfLines={3} size={["sm", "md", "lg", "2xl"]}>
                      Provide Awesome Support to Your Customers</Heading>
                    <Divider mt={2} />
                    <Text mt={"3"} noOfLines={6}>
                      With our seamless stack of Service tools such as
                      Ticketing, Helpdesk, Customer Feedback Forms, Knowledge
                      Base, Canned Responses and your support team can now
                      connect better, resolve faster, and retain your customers
                      for a lifetime.
                    </Text>
                  </Box>
                  <Grid
                    px={5}
                    pt={5}
                    templateRows="repeat(4, 1fr)"
                    templateColumns="repeat(2,1fr)"
                    gap={1}
                    justifyContent="center"
                  >
                    <GridItem rowSpan={1} colSpan={2}>
                      <Text>POPULAR TICKETING FEATURES</Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Multiple Ticketing Groups</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Macros</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Ticket Views</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Help Desk Automation</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                      <Button
                        boxShadow="2xl"
                        p={6}
                        rounded="md"
                        bg="white"
                        color={"purple.600"}
                        _hover={{ color: "purple.700" }}
                        size={["sm", "md"]}
                        marginTop="1rem"
                      >
                        <Flex gap={"40px"} alignItems={"center"}>
                          <Text>Explore Marketing Software </Text>
                          <ArrowForwardIcon />
                        </Flex>
                      </Button>
                    </GridItem>
                  </Grid>
                </div>
                <div
                  style={{ width: "50%", margin: "auto" }}
                  data-aos="fade-left"
                  className='planings-container-right-side-container'
                >
                  <Box position={"relative"}>
                    <video autoPlay muted loop id="tab-video">
                      <source
                        src="https://cdn5.engagebay.com/assets/img/videos/bubble-4.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <Box
                      position={"relative"}
                      zIndex={2}
                      top={0}
                      left={0}
                      mx={"auto"}
                      w={"full"}
                    >
                      <Image
                        w={"70%"}
                        mx={"auto"}
                        src="https://cdn5.engagebay.com/assets/img/tabs/home/helpdesk_software.png"
                        alt="Dan Abramov"
                      />
                    </Box>
                  </Box>
                </div>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default CreateOwnViews
