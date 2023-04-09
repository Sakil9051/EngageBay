import React,{useEffect} from 'react'
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  Divider,
  Stack,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Aos from "aos";
import "aos/dist/aos.css";

function AvtivitySolution() {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <>
      <Divider
        orientation="horizontal"
        w={"90%"}
        mx={"auto"}
        borderColor={"#A0AEC0"}
        bg={"#A0AEC0"}
        borderWidth={"1px"}
      />
      <Box mt={"50px"} m={"auto"} w={"94%"}>
        <Stack>
          <div data-aos="fade-up" data-aos-easing="ease-in">
            <Box m={"auto"} textAlign={"center"} p={6}>
              <Heading>Single Solution for All Your Activities</Heading>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={100}
                color={"#718096"}
              >
                Identify new opportunities, convert visitors, deliver customer
                happiness, and more!
              </Text>
            </Box>
          </div>
          <Box pt={10} gap={4} w={"100%"} m={"auto"}>
            <SimpleGrid columns={[null,1,2]} px={6} py={4} gap={6} >
              <div  data-aos="fade-right">
                <Box
                  w="100%"
                  p={10}
                  border={"1px solid #CBD5E0"}
                  borderRadius={10}
                >
                  <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(3,1fr)"
                    
                    gap={6}
                    p={4}
                  >
                    <GridItem rowSpan={1} colSpan={2} my={"auto"}>
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        CRM Software
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={3}>
                      <Image
                        src="https://cdn5.engagebay.com/assets/img/icons/crm.svg"
                        alt="Engagebay Logo"
                      />
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={2}>
                      <Text w={"80%"}>
                        Store unlimited contacts and build stronger
                        relationships by keeping track of all your customer
                        details in one place
                      </Text>
                    </GridItem>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    w={"100%"}
                    mx={"auto"}
                    bg={"#A0AEC0"}
                  />
                  <Box p={4}>
                    <Grid
                      templateRows="repeat(4, 1fr)"
                      templateColumns="repeat(2,1fr)"
                      gap={4}
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
                          <Text>Deal Management</Text>
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
                          <Text>Appointment Scheduling</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button
                          borderRadius={"3px"}
                          bg={"purple.600"}
                          color={"#FFFFFF"}
                          _hover={{ backgroundColor: "purple.700" }}
                          px={10}
                          py={6}
                        >
                          Get startes
                        </Button>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
              </div>
              <div  data-aos="fade-left">
                <Box
                  w="100%"
                  p={10}
                  border={"1px solid #CBD5E0"}
                  borderRadius={10}
                >
                  <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(3,1fr)"
                    gap={6}
                    p={4}
                  >
                    <GridItem rowSpan={1} colSpan={2} my={"auto"}>
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        Marketing Automation
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={3}>
                      <Image
                        src="https://cdn5.engagebay.com/assets/img/icons/marketing-automation.svg"
                        alt="Engagebay Logo"
                      />
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={2}>
                      <Text w={"89%"}>
                        Save time by automating your marketing processes and
                        sending personalized messages to target audiences
                      </Text>
                    </GridItem>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    w={"100%"}
                    mx={"auto"}
                    bg={"#A0AEC0"}
                  />
                  <Box p={4}>
                    <Grid
                      templateRows="repeat(4, 1fr)"
                      templateColumns="repeat(2,1fr)"
                      gap={4}
                    >
                      <GridItem rowSpan={1} colSpan={2}>
                        <Text>POPULAR FEATURES</Text>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Forms & Landing Pages</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Email Sequences</Text>
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
                          <Text>Email Template Builder</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button
                          borderRadius={"3px"}
                          bg={"purple.600"}
                          color={"#FFFFFF"}
                          _hover={{ backgroundColor: "purple.700" }}
                          px={10}
                          py={6}
                        >
                          Get startes
                        </Button>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
              </div>
            
              <div  data-aos="fade-right">
                <Box
                  w="100%"
                  p={10}
                  border={"1px solid #CBD5E0"}
                  borderRadius={10}
                >
                  <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(3,1fr)"
                    gap={6}
                    p={4}
                  >
                    <GridItem rowSpan={1} colSpan={2} my={"auto"}>
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        Helpdesk Software
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={3}>
                      <Image
                        src="https://cdn5.engagebay.com/assets/img/icons/helpdesk.svg"
                        alt="Engagebay Logo"
                      />
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={2}>
                      <Text w={"80%"}>
                        Resolve queries faster and deliver exceptional support
                        to delight your customers
                      </Text>
                    </GridItem>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    w={"100%"}
                    mx={"auto"}
                    bg={"#A0AEC0"}
                  />
                  <Box p={4}>
                    <Grid
                      templateRows="repeat(4, 1fr)"
                      templateColumns="repeat(2,1fr)"
                      gap={4}
                    >
                      <GridItem rowSpan={1} colSpan={2}>
                        <Text>POPULAR FEATURES</Text>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Ticket Management</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Views</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Macro</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Ticket Automation</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button
                          borderRadius={"3px"}
                          bg={"purple.600"}
                          color={"#FFFFFF"}
                          _hover={{ backgroundColor: "purple.700" }}
                          px={10}
                          py={6}
                        >
                          Get startes
                        </Button>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
              </div>
              <div  data-aos="fade-left">
                <Box
                  w="100%"
                  p={10}
                  border={"1px solid #CBD5E0"}
                  borderRadius={10}
                >
                  <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(3,1fr)"
                    gap={6}
                    p={4}
                  >
                    <GridItem rowSpan={1} colSpan={2} my={"auto"}>
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        Live Chat Software
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={3}>
                      <Image
                        src="https://cdn5.engagebay.com/assets/img/icons/livechat.svg"
                        alt="Engagebay Logo"
                      />
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={2}>
                      <Text w={"100%"}>
                        Boost customer happiness and increase conversions by
                        offering instant help when your customers
                      </Text>
                    </GridItem>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    w={"100%"}
                    mx={"auto"}
                    bg={"#A0AEC0"}
                  />
                  <Box p={4}>
                    <Grid
                      templateRows="repeat(4, 1fr)"
                      templateColumns="repeat(2,1fr)"
                      gap={4}
                    >
                      <GridItem rowSpan={1} colSpan={2}>
                        <Text>POPULAR FEATURES</Text>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Instant Support</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Chat Form Customisation</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Shortcuts</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Notifications</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button
                          borderRadius={"3px"}
                          bg={"purple.600"}
                          color={"#FFFFFF"}
                          _hover={{ backgroundColor: "purple.700" }}
                          px={10}
                          py={6}
                        >
                          Get startes
                        </Button>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
              </div>
            </SimpleGrid>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default AvtivitySolution
