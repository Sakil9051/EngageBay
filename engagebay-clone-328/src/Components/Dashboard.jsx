import { CheckCircleIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DashNavbar from "./DashNav";

function Dashboard() {
  return (
    <div>
      <DashNavbar/>
      <Box>
        <Flex py={"10px"} px={"25px"} justify={"space-between"}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Marketing Dashboard
            </MenuButton>
            <MenuList>
              <MenuItem>Manage Dashboard</MenuItem>
              <MenuItem>Agency Dashboard</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              bg={"rgb(47, 106, 217)"}
              color={"white"}
              rightIcon={<ChevronDownIcon />}
            >
              Add Dashboard
            </MenuButton>
            <MenuList>
              <MenuItem>Email Stats</MenuItem>
              <MenuItem>Calls Stats</MenuItem>
              <MenuItem>My Contacts</MenuItem>
              <MenuItem>Forms</MenuItem>
              <MenuItem>Web Popups</MenuItem>
              <MenuItem>Top Landing Pages</MenuItem>
              <MenuItem>Landing Page Performance</MenuItem>
              <MenuItem>Landing Page</MenuItem>
              <MenuItem>Contacts Created by Day</MenuItem>
              <MenuItem>Contacts by Source</MenuItem>
              <MenuItem>Top Broadcast with click Rate</MenuItem>
              <MenuItem>Top Broadcast with Open Rate</MenuItem>
              <MenuItem>Sequence List</MenuItem>
              <MenuItem>Contacts Taag Growth</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        {/* <Divider /> */}
        <SimpleGrid mt={3} px={10} columns={[1, null, 2]}  gap={5}>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Email Stats
              </Text>
              <Text color={"rgb(31, 42, 104)"}>Date Range: This month</Text>
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={15}>
                <GridItem>
                    <Text color={"rgb(255, 168, 0)"} fontSize={"60px"}>0</Text>
                    <Text color={"rgb(255, 168, 0)"}>Sent</Text>
                </GridItem>
                <GridItem>
                    <Text color={"rgb(137, 80, 252)"} fontSize={"60px"}>0</Text>
                    <Text color={"rgb(137, 80, 252)"}>Hard Bounces</Text>
                </GridItem>
                <GridItem>
                    <Text color={"rgb(246, 78, 96)"} fontSize={"60px"}>0</Text>
                    <Text color={"rgb(246, 78, 96)"}>Soft Bounces</Text>
                </GridItem>
                <GridItem>
                    <Text color={"rgb(52, 195, 143)"} fontSize={"60px"}>0</Text>
                    <Text color={"rgb(52, 195, 143)"}>Spams</Text>
                </GridItem>
                <GridItem>
                    <Text color={"rgb(253, 126, 20)"} fontSize={"60px"}>0</Text>
                    <Text color={"rgb(253, 126, 20)"}>Unsubscribes</Text>
                </GridItem>

            </Grid>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Contacts Created by Day
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
                Duration : This Month | Frequency : Weeekly
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-7.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                My Contacts ( 0 )
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
                
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-5.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Top Landing Page
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
                
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Forms
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
              Date Range: This month| Frequency : Weeekly
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-11.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Landing Pages
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
              Date Range: This month| Frequency : Weeekly
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-3.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Landing Page Performance
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
                Duration : This Month | Frequency : Weeekly
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-4.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Sequence List
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
                Duration : This Month | Frequency : Weeekly
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-10.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>     
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Contacts by Source
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
                Duration : This Month | Frequency : Weeekly
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-8.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Web Popups
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
                Duration : This Month | Frequency : Weeekly
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-9.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Top Broadcast with Click Rate
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
                Duration : This Month | Frequency : Weeekly
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-4.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Top Broadcast with Open Rate
              </Text>
              <Text color={"rgb(31, 42, 104)"}>
                Duration : This Month | Frequency : Weeekly
              </Text>
            </Box>
            <Box>
              <Image
                ml={"auto"}
                mr={"auto"}
                h={250}
                w={250}
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg"
                alt="Contact created"
              />
              <Text fontSize={"13px"} color={"rgb(31, 42, 104)"}>No Data is available for this report</Text>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="460"
            borderRadius={5}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box mt={-4} textAlign={"left"}>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={500}
                color={"rgb(31, 42, 104)"}
              >
                Getting Started with Marketing
              </Text>
              <Box   mt={"25px"} >
                <Text fontWeight={"500"} pt={3} color={"#377dff"} fontSize={"13px"}><CheckCircleIcon mr={"20px"} fontSize={"20px"} color={"rgb(55, 125, 255)"}/>Copy & paste the Script on your website to engage your web visitors and increase your lead pool.</Text>
                <Text fontWeight={"500"} pt={8} color={"#377dff"} fontSize={"13px"}><CheckCircleIcon mr={"20px"}  fontSize={"20px"} color={"lightgrey"}/>Manage all your contacts from one place and engage by adding them to sequences, broadcast, etc.,</Text>
                <Text fontWeight={"500"} pt={8} color={"#377dff"} fontSize={"13px"}><CheckCircleIcon mr={"20px"}  fontSize={"20px"} color={"lightgrey"}/>Credte your broddcast to send newsletters, announcements, offers etC.,</Text>
                <Text fontWeight={"500"} pt={8} color={"#377dff"} fontSize={"13px"}><CheckCircleIcon mr={"20px"}  fontSize={"20px"} color={"lightgrey"}/>create & share engaging landing pages with your audience using our easy designer tool.</Text>
                <Text fontWeight={"500"} pt={8} color={"#377dff"} fontSize={"13px"}><CheckCircleIcon mr={"20px"}  fontSize={"20px"} color={"lightgrey"}/>Create web pop ups or embed forms to generate leads from your website & landing pages</Text>
              </Box>
              
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default Dashboard;
