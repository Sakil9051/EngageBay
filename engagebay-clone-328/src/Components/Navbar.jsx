import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Navbar() {
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
    isOpen: isOpenProducts,
    onOpen: onOpenProducts,
    onClose: onCloseProducts,
  } = useDisclosure();
  const {
    isOpen: isOpenResources,
    onOpen: onOpenResources,
    onClose: onCloseResources,
  } = useDisclosure();
  const {
    isOpen: isOpenFreeTools,
    onOpen: onOpenFreeTools,
    onClose: onCloseFreeTools,
  } = useDisclosure();

  return (
    <Box
      px={"80px"}
      py={"20px"}
      style={{
        backgroundColor: navColor,
      }}
      w={"full"}
    >
      <Flex w={"full"} direction={"row"} justify={"space-around"}>
        <Link to="/">
          <Image
            w={"600px"}
            h={"80px"}
            mt={-4}
            ml={-10}
            src="https://i.ibb.co/PQSQZyc/Engagebay-1-a-clipdrop-enhance-clipdrop-enhance.png"
            alt="Engagebay Logo"
          />
        </Link>
        <Box fontWeight={"500"} pl={10} w={"full"}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justify={"space-around"}
            mt={2}
          >
            <Box>
              <Menu isOpen={isOpenProducts}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenProducts}
                  onMouseLeave={onCloseProducts}
                >
                  Products <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenProducts}
                  onMouseLeave={onCloseProducts}
                >
                  <MenuItem>Marketing Automation</MenuItem>
                  <MenuItem>Email Marketing</MenuItem>
                  <MenuItem>Email Sequences</MenuItem>
                  <MenuItem>Landing Pages</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Link _hover={{ color: "purple.400", textDecoration: "none" }}>
                Pricing
              </Link>
            </Box>
            <Box>
              <Menu isOpen={isOpenResources}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenResources}
                  onMouseLeave={onCloseResources}
                >
                  Resources
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenResources}
                  onMouseLeave={onCloseResources}
                >
                  <MenuItem>The Basics</MenuItem>
                  <MenuItem>How To Choose</MenuItem>

                  <MenuItem>Templates</MenuItem>
                  <MenuItem>Traffic Generation Tips</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu isOpen={isOpenFreeTools}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenFreeTools}
                  onMouseLeave={onCloseFreeTools}
                >
                  Free Tools
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenFreeTools}
                  onMouseLeave={onCloseFreeTools}
                >
                  <MenuItem>UTM Builder</MenuItem>
                  <MenuItem>Email Signature</MenuItem>
                  <MenuItem>Email Tracker</MenuItem>
                  <MenuItem>Email Validator</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Link _hover={{ color: "purple.400", textDecoration: "none" }}>
                Blog
              </Link>
            </Box>
            <Box>
              <Link
                to="/login"
                _hover={{ color: "purple.400", textDecoration: "none" }}
              >
                Login
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex gap={2}>
            <Button
              borderRadius={"3px"}
              bg={"purple.600"}
              color={"#FFFFFF"}
              _hover={{ backgroundColor: "purple.700" }}
              px={5}
            >
              Free Demo
            </Button>
            <Link to="/signup">
              <Button
                borderRadius={"3px"}
                bg={"orange.500"}
                color={"#FFFFFF"}
                _hover={{ backgroundColor: "orange.600" }}
                px={5}
              >
                Free Signup
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
