import { Box, Button, Flex, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import {ArrowBackIcon, ChevronDownIcon} from "@chakra-ui/icons";
import {AiOutlineEdit, AiOutlineSetting} from "react-icons/ai";
import {BiBrush, BiEdit, BiHeart} from "react-icons/bi";
import {BsLayoutSplit} from "react-icons/bs";


export const InlineFormContents = ()=>{
    return(
     <Box>
        <Flex padding={5}>
            <Flex alignItems="center">
                <ArrowBackIcon />
                <Heading fontSize="xl">Form - 11/10/2022, 12.04</Heading>
                <Icon as ={AiOutlineEdit}/>
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


        <Box>
            <Tabs variant="soft-rounded" colorScheme="telegram">
                <TabList>
                    <Tab> <Icon as={BiBrush} mr="4px"/> Themes</Tab>
                    <Tab><Icon as={BiEdit} mr="4px"/> Change Text</Tab>
                    <Tab><Icon as={BiHeart} mr="4px"/> Look & Feel</Tab>
                    <Tab><Icon as={BsLayoutSplit} mr="4px"/> Fields</Tab>
                    <Tab><Icon as={AiOutlineSetting} mr="4px"/> Settings</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Text>Themes!</Text>
                    </TabPanel>

                    <TabPanel>
                        <Text>Change Text!</Text>
                    </TabPanel>

                    <TabPanel>
                        <Text>Look & Feel!</Text>
                    </TabPanel>

                    <TabPanel>
                        <Text>Fields!</Text>
                    </TabPanel>

                    <TabPanel>
                        <Text>Settings!</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
     </Box>
    )
}