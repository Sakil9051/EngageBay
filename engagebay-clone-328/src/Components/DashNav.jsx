import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
import { AiFillSetting, AiOutlineGroup } from "react-icons/ai";

function DashNavbar() {
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 15 ? setnavColor("#FFFFFF") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

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
        justify={"space-around"}
        alignItems={"center"}
        h={"full"}
      >
        <Flex w={"15%"} gap={2} h={"full"} alignItems={"center"}>
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
        </Flex>

        <Box pl={10} w={"70%"} h={"full"} color={"white"}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            h={"full"}
            fontSize={14}
            gap={6}
          >
            <Box h={"full"}>
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
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Contacts
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Lists
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box h={"full"}>
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
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Inline Forms
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Popup Forms
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Flex color={"white"} align={"center"}>
              <Text
                h={"full"}
                _hover={{ bgColor: "lightgrey", color: "blue" }}
                color={"black"}
                fontWeight={"500"}
              >
                Landing Pages
              </Text>
            </Flex>
            <Box h={"full"}>
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
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Email Templates
                  </MenuItem>
                  <MenuItem color={"black"} _hover={{ bgColor: "lightgrey" }}>
                    Video Templates
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box h={"full"}>
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
            <Box h={"full"}>
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
          </Flex>
        </Box>
        <Box w={"15%"}>
          <Flex gap={5} alignItem={"center"} justify={"space-around"}>
            <SearchIcon color={"black"} h={"full"} mt={3} />
            <AddIcon color={"black"} h={"full"} mt={3} />
            <PhoneIcon color={"black"} h={"full"} mt={3} />
            <Menu>
              <MenuButton aria-label="Options" variant="outline">
                {" "}
                <img
                  width={"40px"}
                  height={"40px"}
                  src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/avatar/user-avatar-v2.png"
                  alt="user"
                />
              </MenuButton>
              <MenuList p={0}>
                <MenuItem p={0}>
                  <Stack p={2} color={"black"}>
                    <Text>Arpit</Text>
                    <Text>username</Text>
                  </Stack>
                </MenuItem>
                <MenuItem icon={<MdOutlineShoppingCart />}> Billing</MenuItem>
                <MenuItem icon={<AiFillSetting />}>Preferences</MenuItem>
                <MenuItem icon={<AiOutlineGroup />}>Account Settings</MenuItem>
                <MenuItem icon={<MdAttachMoney />}>Refer & Earn</MenuItem>
                <MenuItem icon={<MdPowerSettingsNew />}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default DashNavbar;
