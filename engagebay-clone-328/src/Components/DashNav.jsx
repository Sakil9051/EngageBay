import React, { useState, useEffect } from "react";
import "./DashNav.css";
import {
  Box,
  Flex,
  Image,
  Menu,
  Text,
  Hide,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDownIcon,
  SearchIcon,
  AddIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import { IoEllipsisHorizontal } from "react-icons/io5";
import {
  MdOutlineShoppingCart,
  MdAttachMoney,
  MdPowerSettingsNew,
} from "react-icons/md";
import { AiFillSetting, AiOutlineGroup,AiOutlineContacts,AiOutlineFileAdd,AiOutlineMessage } from "react-icons/ai";
import { useUserAuth } from "../Context/userAuthContext";


import { GiHamburgerMenu } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { CgTemplate } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { TbReportSearch} from "react-icons/tb";

import { MdOutlineCampaign,MdSocialDistance,MdNotificationsActive,MdOutlineWeb,MdOutlineSms } from "react-icons/md";







function DashNavbar() {
  const [navColor, setnavColor] = useState("transparent");
  const {logOut, user } = useUserAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  console.log(user)
  const listenScrollEvent = () => {
    window.scrollY > 15 ? setnavColor("#FFFFFF") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const navigate = useNavigate()

  const handleEmail =()=>{
    navigate('/emailtemplate')
  }
  const handleVideo =()=>{
    navigate('/videotemplate')
  }

  const inline = ()=>{
    navigate ('/inlineform')
  }
  const popup = ()=>{
    navigate ('/popupform')
  }
  const contact = ()=>{
    navigate ('/contact')
  }
  const landingpage = ()=>{
    navigate ('/landing')
  }

  const handleLogout =()=>{
    return logOut()
  }

  const {
    isOpen: isOpenMarketing,
    onOpen: onOpenMarketing,
    onClose: onCloseMarketing,
  } = useDisclosure();

  const {
    isOpen: isOpenContacts,
    onOpen: onOpenContacts,
    onClose: onCloseContacts,
  } = useDisclosure();
  const {
    isOpen: isOpenForms,
    onOpen: onOpenForms,
    onClose: onCloseForms,
  } = useDisclosure();
  const {
    isOpen: isOpenTemplates,
    onOpen: onOpenTemplates,
    onClose: onCloseTemplates,
  } = useDisclosure();
  const {
    isOpen: isOpenCampaigns,
    onOpen: onOpenCampaigns,
    onClose: onCloseCampaigns,
  } = useDisclosure();
  const {
    isOpen: isOpenEtc,
    onOpen: onOpenEtc,
    onClose: onCloseEtc,
  } = useDisclosure();

  return (
    // <Box
    //   px={"3"}
    //   h={"60px"}
    //   style={{
    //     backgroundColor: "transparent",
    //   }}
    //   w={"full"}
    //   borderBottom={"1px solid lightgrey"}
    // >
    //   <Flex
    //     w={"full"}
    //     direction={"row"}
    //     justify={"space-around"}
    //     alignItems={"center"}
    //     h={"full"}
    //   >
    //     <Flex w={"15%"} gap={2} h={"full"} alignItems={"center"}>
    //       <Link to="/dashboard">
    //         <Image
    //           w={"12"}
    //           h={"10"}
    //           mt={1}
    //           src="https://cdn5.engagebay.com/images/256x256.png"
    //           alt="Engagebay Logo"
    //         />
    //       </Link>
    //       <Image
    //         h={"90%"}
    //         src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/menu-icons/menu-divider.png"
    //       />
    //       <Box color={"black"}>
    //         <Menu isOpen={isOpenMarketing}>
    //           <MenuButton
    //             transition="all 0.2s"
    //             as={Button}
    //             aria-label="Courses"
    //             color={"rgb(222, 116, 31)"}
    //             onMouseEnter={onOpenMarketing}
    //             onMouseLeave={onCloseMarketing}
    //             py={2}
    //             px={5}
    //             rightIcon={<ChevronDownIcon />}
    //           >
    //             Marketing
    //           </MenuButton>

    //           <MenuList
    //             bgColor={"white"}
    //             borderRadius={3}
    //             zIndex={100}
    //             onMouseEnter={onOpenMarketing}
    //             onMouseLeave={onCloseMarketing}
    //           >
    //             <MenuItem _hover={{ bgColor: "lightgrey" }}>Marketing</MenuItem>
    //             <MenuItem _hover={{ bgColor: "lightgrey" }}>Sales</MenuItem>
    //             <MenuItem _hover={{ bgColor: "lightgrey" }}>Service</MenuItem>
    //             <MenuItem _hover={{ bgColor: "lightgrey" }}>Livechat</MenuItem>
    //           </MenuList>
    //         </Menu>
    //       </Box>
    //     </Flex>

    //     <Box pl={10} w={"70%"} h={"full"} color={"white"}>
    //       <Flex
    //         direction={"row"}
    //         alignItems={"center"}
    //         h={"full"}
    //         fontSize={14}
    //         gap={6}
    //       >
    //         <Box h={"full"}>
    //           <Menu isOpen={isOpenContacts} h={"full"}>
    //             <MenuButton
    //               transition="all 0.2s"
    //               _hover={{ bgColor: "lightgrey", color: "blue" }}
    //               fontWeight={"500"}
    //               aria-label="Courses"
    //               onMouseEnter={onOpenContacts}
    //               onMouseLeave={onCloseContacts}
    //               h={"full"}
    //               p={2}
    //               color={"black"}
    //               zIndex={2}
    //             >
    //               Contacts <ChevronDownIcon />
    //             </MenuButton>
    //             <MenuList
    //               mt={"-9px"}
    //               bgColor={"white"}
    //               borderRadius={0}
    //               zIndex={0}
    //               onMouseEnter={onOpenContacts}
    //               onMouseLeave={onCloseContacts}
    //             >
    //               <MenuItem color={"black"} onClick={contact} _hover={{ bgColor: "lightgrey" }}>
    //                 Contacts
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Lists
    //               </MenuItem>
    //             </MenuList>
    //           </Menu>
    //         </Box>
    //         <Box h={"full"}>
    //           <Menu h={"full"} isOpen={isOpenForms}>
    //             <MenuButton
    //               transition="all 0.2s"
    //               _hover={{ bgColor: "lightgrey", color: "blue" }}
    //               fontWeight={"500"}
    //               aria-label="Courses"
    //               h={"full"}
    //               p={2}
    //               color={"black"}
    //               zIndex={2}
    //               onMouseEnter={onOpenForms}
    //               onMouseLeave={onCloseForms}
    //             >
    //               Forms <ChevronDownIcon />
    //             </MenuButton>
    //             <MenuList
    //               mt={"-9px"}
    //               bgColor={"white"}
    //               borderRadius={0}
    //               zIndex={0}
    //               onMouseEnter={onOpenForms}
    //               onMouseLeave={onCloseForms}
    //             >
    //               <MenuItem onClick={inline} color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Inline Forms
    //               </MenuItem>
    //               <MenuItem onClick={popup} color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Popup Forms
    //               </MenuItem>
    //             </MenuList>
    //           </Menu>
    //         </Box>
    //         <Flex color={"white"} align={"center"}>
    //           <Text
    //             h={"full"}
    //             _hover={{ bgColor: "lightgrey", color: "blue" }}
    //             color={"black"}
    //             fontWeight={"500"}
    //             onClick={landingpage}
    //           >
    //             Landing Pages
    //           </Text>
    //         </Flex>
    //         <Box h={"full"}>
    //           <Menu h={"full"} isOpen={isOpenTemplates}>
    //             <MenuButton
    //               transition="all 0.2s"
    //               _hover={{ bgColor: "lightgrey", color: "blue" }}
    //               fontWeight={"500"}
    //               aria-label="Courses"
    //               h={"full"}
    //               p={2}
    //               color={"black"}
    //               zIndex={2}
    //               onMouseEnter={onOpenTemplates}
    //               onMouseLeave={onCloseTemplates}
    //             >
    //               Templates
    //               <ChevronDownIcon />
    //             </MenuButton>
    //             <MenuList
    //               mt={"-9px"}
    //               bgColor={"white"}
    //               borderRadius={0}
    //               zIndex={0}
    //               onMouseEnter={onOpenTemplates}
    //               onMouseLeave={onCloseTemplates}
    //             >
    //               <MenuItem onClick={handleEmail} color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Email Templates
    //               </MenuItem>
    //               <MenuItem onClick={handleVideo} color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Video Templates
    //               </MenuItem>
    //             </MenuList>
    //           </Menu>
    //         </Box>
    //         <Box h={"full"}>
    //           <Menu h={"full"} isOpen={isOpenCampaigns}>
    //             <MenuButton
    //               transition="all 0.2s"
    //               _hover={{ bgColor: "lightgrey", color: "blue" }}
    //               fontWeight={"500"}
    //               aria-label="Courses"
    //               h={"full"}
    //               p={2}
    //               color={"black"}
    //               zIndex={2}
    //               onMouseEnter={onOpenCampaigns}
    //               onMouseLeave={onCloseCampaigns}
    //             >
    //               Campaigns
    //               <ChevronDownIcon />
    //             </MenuButton>
    //             <MenuList
    //               mt={"-9px"}
    //               bgColor={"white"}
    //               borderRadius={0}
    //               zIndex={0}
    //               onMouseEnter={onOpenCampaigns}
    //               onMouseLeave={onCloseCampaigns}
    //             >
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Email Brodcasts
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 SMS Brodcasts
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Sequences
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Automation
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Workflows
    //               </MenuItem>
    //             </MenuList>
    //           </Menu>
    //         </Box>
    //         <Box h={"full"}>
    //           <Menu h={"full"} isOpen={isOpenEtc}>
    //             <MenuButton
    //               transition="all 0.2s"
    //               _hover={{ bgColor: "lightgrey", color: "blue" }}
    //               fontWeight={"500"}
    //               aria-label="Courses"
    //               h={"full"}
    //               p={2}
    //               color={"black"}
    //               zIndex={2}
    //               onMouseEnter={onOpenEtc}
    //               onMouseLeave={onCloseEtc}
    //             >
    //               <IoEllipsisHorizontal fontSize="1.25rem" bg={"none"} />
    //             </MenuButton>
    //             <MenuList
    //               mt={"-9px"}
    //               bgColor={"white"}
    //               borderRadius={0}
    //               zIndex={0}
    //               onMouseEnter={onOpenEtc}
    //               onMouseLeave={onCloseEtc}
    //             >
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Social Suits
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 File Repository
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Push Notifications
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Site Messages
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Sticky Bars
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Web Rules
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 {" "}
    //                 Trash
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Activities
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 {" "}
    //                 SMS Logs
    //               </MenuItem>
    //               <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
    //                 Reports
    //               </MenuItem>
    //             </MenuList>
    //           </Menu>
    //         </Box>
    //       </Flex>
    //     </Box>
    //     <Box w={"15%"}>
    //       <Flex gap={5} alignItem={"center"} justify={"space-around"}>
    //         <SearchIcon color={"black"} h={"full"} mt={3} />
    //         <AddIcon color={"black"} h={"full"} mt={3} />
    //         <PhoneIcon color={"black"} h={"full"} mt={3} />
    //         <Menu>
    //           <MenuButton aria-label="Options" variant="outline">
    //             {" "}
    //             <img
    //               width={"40px"}
    //               height={"40px"}
    //               src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/avatar/user-avatar-v2.png"
    //               alt="user"
    //             />
    //           </MenuButton>
    //           <MenuList p={0}>
    //             <MenuItem p={0}>
    //               <Stack p={2} color={"black"}>
    //                 <Text>{user.displayName}</Text>
    //                 <Text>{user.email}</Text>
    //                 {/* <Text>username</Text> */}
    //               </Stack>
    //             </MenuItem>
    //             <MenuItem icon={<MdOutlineShoppingCart />}> Billing</MenuItem>
    //             <MenuItem icon={<AiFillSetting />}>Preferences</MenuItem>
    //             <MenuItem icon={<AiOutlineGroup />}>Account Settings</MenuItem>
    //             <MenuItem icon={<MdAttachMoney />}>Refer & Earn</MenuItem>
    //             <MenuItem onClick={handleLogout} icon={<MdPowerSettingsNew />}>
    //               Logout
    //             </MenuItem>
    //           </MenuList>
    //         </Menu>
    //       </Flex>
    //     </Box>
    //   </Flex>
    // </Box>
    <Box
      px={"3"}
      h={"60px"}
      style={{
        backgroundColor: "transparent",
      }}
      w={"full"}
      borderBottom={"1px solid lightgrey"}
    >
      <Flex
        w={"full"}
        direction={"row"}
        justify={"space-between"}
        alignItems={"center"}
        h={"full"}
      >
        <Box>
        <Flex  gap={2} h={"full"} alignItems={"center"} className="dashnav-left">
        <Hide breakpoint='(min-width: 1000px)'><GiHamburgerMenu onClick={onOpen} ref={btnRef} className="dashmenu"/></Hide>
          <Link to="/dashboard">
            <Image
              w={"12"}
              h={"10"}
              mt={1}
              src="https://cdn5.engagebay.com/images/256x256.png"
              alt="Engagebay Logo"
            />
          </Link>
          <Image
            h={"90%"}
            src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/menu-icons/menu-divider.png"
          />
          <Box color={"black"}>
            <Menu isOpen={isOpenMarketing}>
              <MenuButton
                transition="all 0.2s"
                as={Button}
                aria-label="Courses"
                color={"rgb(222, 116, 31)"}
                onMouseEnter={onOpenMarketing}
                onMouseLeave={onCloseMarketing}
                py={2}
                px={5}
                rightIcon={<ChevronDownIcon />}
              >
                Marketing
              </MenuButton>

              <MenuList
                // mt={"-9px"}
                bgColor={"white"}
                borderRadius={3}
                zIndex={100}
                // border={"1px solid #522a77"}
                onMouseEnter={onOpenMarketing}
                onMouseLeave={onCloseMarketing}
              >
                <MenuItem _hover={{ bgColor: "lightgrey" }}>Marketing</MenuItem>
                <MenuItem _hover={{ bgColor: "lightgrey" }}>Sales</MenuItem>
                <MenuItem _hover={{ bgColor: "lightgrey" }}>Service</MenuItem>
                <MenuItem _hover={{ bgColor: "lightgrey" }}>Livechat</MenuItem>
              </MenuList>
            </Menu>
          </Box>


        <Box pl={10} w={"75%"} h={"full"} color={"white"} className="Dashnav-menu">
          
            <Box h={"full"}  >
              <Menu isOpen={isOpenContacts} h={"full"}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "lightgrey", color: "blue" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenContacts}
                  onMouseLeave={onCloseContacts}
                  h={"full"}
                  p={2}
                  color={"black"}
                  zIndex={2}
                >
                  Contacts <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"white"}
                  borderRadius={0}
                  zIndex={0}
                  onMouseEnter={onOpenContacts}
                  onMouseLeave={onCloseContacts}
                >
                  <MenuItem color={"black"} onClick={contact} _hover={{ bgColor: "lightgrey" }}>
                    Contacts
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Lists
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box h={"full"} >
              <Menu h={"full"} isOpen={isOpenForms}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "lightgrey", color: "blue" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  h={"full"}
                  p={2}
                  color={"black"}
                  zIndex={2}
                  onMouseEnter={onOpenForms}
                  onMouseLeave={onCloseForms}
                >
                  Forms <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"white"}
                  borderRadius={0}
                  zIndex={0}
                  onMouseEnter={onOpenForms}
                  onMouseLeave={onCloseForms}
                >
                  <MenuItem color={"black"} onClick={inline} _hover={{ bgColor: "lightgrey" }}>
                    Inline Forms
                  </MenuItem>
                  <MenuItem color={"black"} onClick={popup} _hover={{ bgColor: "lightgrey" }}>
                    Popup Forms
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            
              <Text
                h={"full"}
                _hover={{ bgColor: "lightgrey", color: "blue" }}
                color={"black"}
                fontWeight={"500"} 
                onClick={landingpage}
              >
                Landing Pages
              </Text>
  
            <Box h={"full"} >
              <Menu h={"full"} isOpen={isOpenTemplates}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "lightgrey", color: "blue" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  h={"full"}
                  p={2}
                  color={"black"}
                  zIndex={2}
                  onMouseEnter={onOpenTemplates}
                  onMouseLeave={onCloseTemplates}
                >
                  Templates
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"white"}
                  borderRadius={0}
                  zIndex={0}
                  onMouseEnter={onOpenTemplates}
                  onMouseLeave={onCloseTemplates}
                >
                  <MenuItem color={"black"} onClick={handleEmail} _hover={{ bgColor: "lightgrey" }}>
                    Email Templates
                  </MenuItem>
                  <MenuItem color={"black"} onClick={handleVideo} _hover={{ bgColor: "lightgrey" }}>
                    Video Templates
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box h={"full"} >
              <Menu h={"full"} isOpen={isOpenCampaigns}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "lightgrey", color: "blue" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  h={"full"}
                  p={2}
                  color={"black"}
                  zIndex={2}
                  onMouseEnter={onOpenCampaigns}
                  onMouseLeave={onCloseCampaigns}
                >
                  Campaigns
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"white"}
                  borderRadius={0}
                  zIndex={0}
                  onMouseEnter={onOpenCampaigns}
                  onMouseLeave={onCloseCampaigns}
                >
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Email Brodcasts
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    SMS Brodcasts
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Sequences
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Automation
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Workflows
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box h={"full"} >
              <Menu h={"full"} isOpen={isOpenEtc}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "lightgrey", color: "blue" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  h={"full"}
                  p={2}
                  color={"black"}
                  zIndex={2}
                  onMouseEnter={onOpenEtc}
                  onMouseLeave={onCloseEtc}
                >
                  <IoEllipsisHorizontal fontSize="1.25rem" bg={"none"} />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"white"}
                  borderRadius={0}
                  zIndex={0}
                  onMouseEnter={onOpenEtc}
                  onMouseLeave={onCloseEtc}
                >
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Social Suits
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    File Repository
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Push Notifications
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Site Messages
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Sticky Bars
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Web Rules
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    {" "}
                    Trash
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Activities
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    {" "}
                    SMS Logs
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Reports
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          </Flex>
        </Box>
        <Box  className="dashnav-right">
          <Flex gap={5} alignItem={"center"} justify={"space-between"}>
            <SearchIcon color={"black"} h={"full"} mt={3} />
            <AddIcon color={"black"} h={"full"} mt={3} />
            <PhoneIcon color={"black"} h={"full"} mt={3} />
            <Menu>
              <MenuButton aria-label="Options" variant="outline">
                {" "}
                <img
                  width={"40px"}
                  src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/avatar/user-avatar-v2.png"
                  alt="user"
                />
              </MenuButton>
              <MenuList p={0}>
                <MenuItem p={0}>
                <Stack p={2} color={"black"}>
                  <Text>{user.displayName}</Text>
                 <Text>{user.email}</Text>
               </Stack>
                </MenuItem>
                <MenuItem icon={<MdOutlineShoppingCart />}> Billing</MenuItem>
                <MenuItem icon={<AiFillSetting />}>Preferences</MenuItem>
                <MenuItem icon={<AiOutlineGroup />}>Account Settings</MenuItem>
                <MenuItem icon={<MdAttachMoney />}>Refer & Earn</MenuItem>
                <MenuItem onClick={handleLogout} icon={<MdPowerSettingsNew />}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt={"3rem"} color={"gray.400"}>Marketing</DrawerHeader>

          <DrawerBody>
            <Flex flexDirection={"column"} color={"blue.400"} justify="center" gap={"2rem"} >
            <Box>Dashboard</Box>
            <Flex color={"black"} alignItems="center" gap="5">
              <AiOutlineContacts/>
              Contact us
              </Flex>
            <Flex color={"black"} alignItems="center" gap="5">
              <FaWpforms/>
              Forms</Flex>
            <Flex alignItems="center" gap="5">
              <RiPagesLine color={"black"}/>
              Landing Pages</Flex>
            <Flex color={"black"} alignItems="center" gap="5">
              <CgTemplate/>
              Templates</Flex>
            <Flex color={"black"} alignItems="center" gap="5">
              <MdOutlineCampaign/>
              Campaigns</Flex>
            <Flex  alignItems="center" gap="5" >
            <MdSocialDistance color={"black"}/>
              Social Suite</Flex>
            <Flex alignItems="center" gap="5">
              <AiOutlineFileAdd color={"black"}/>
              File Repository</Flex>
            <Flex alignItems="center" gap="5">
              <MdNotificationsActive color={"black"}/>
              Push Notifications</Flex>
            <Flex alignItems="center" gap="5">
              <AiOutlineMessage color={"black"}/>
              Site Messaging</Flex>
            <Flex alignItems="center" gap="5">
              <MdOutlineWeb color={"black"}/>
              Web Rules</Flex>
            <Flex alignItems="center" gap="5">
              <BsTrash color={"black"}/>
              Trash</Flex>
            <Flex alignItems="center" gap="5">
              <FiActivity color={"black"}/>
              Activities</Flex>
            <Flex alignItems="center" gap="5">
              <MdOutlineSms color={"black"}/>
              SMS Logs</Flex>
            <Flex alignItems="center" gap="5">
              <TbReportSearch color={"black"}/>
              Reports</Flex>
            
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Box>
  );
}

export default DashNavbar;
