import { Box, Button, Flex, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import {ArrowBackIcon, ChevronDownIcon} from "@chakra-ui/icons";
import {AiOutlineEdit, AiOutlineSetting} from "react-icons/ai";
import {BiBrush, BiEdit, BiHeart} from "react-icons/bi";
import {BsLayoutSplit} from "react-icons/bs";
import { PopupThemes } from "./PopupThemes";
import { PopupSettings } from "./PopupSettings";
import { PopupDesign } from "./PopupDesign";
import { PopupCallToAction } from "./PopupCallToAction";
import { PopupStyle } from "./PopupStyle";


export const PopupFormContents = ({handleShow})=>{
    return(
     <Box bgColor="blue.50">
        <Flex padding={5} bgColor="white">
            <Flex alignItems="center" gap={4}>
                <ArrowBackIcon fontSize="1.2rem" onClick={handleShow} />
                <Heading fontSize="xl" fontWeight="500">Form - 11/10/2022, 12.04</Heading>
                <Icon fontSize="1.2rem" as ={AiOutlineEdit}/>
            </Flex>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="blue">
                        Save 
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Save & Exit</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>


        <Box w="98%" m="auto" mt="4" borderRadius="10px" p="5" bgColor="white">
            <Tabs  variant="soft-rounded" colorScheme="telegram">
                <TabList>
                    <Tab><Icon as={BiHeart} mr="4px"/> Style</Tab>
                    <Tab><Icon as={BiEdit} mr="4px"/> Call to Action</Tab>
                    <Tab> <Icon as={BiBrush} mr="4px"/> Themes</Tab>
                    <Tab><Icon as={BsLayoutSplit} mr="4px"/>Design</Tab>
                    <Tab><Icon as={AiOutlineSetting} mr="4px"/> Settings</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <PopupStyle />
                    </TabPanel>

                    <TabPanel>
                        <PopupCallToAction />
                    </TabPanel>
                        
                    <TabPanel>
                        <PopupThemes />
                    </TabPanel>

                    <TabPanel>
                       <PopupDesign />
                    </TabPanel>

                    <TabPanel>
                        <PopupSettings />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
     </Box>
    )
}