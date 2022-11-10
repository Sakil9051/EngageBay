import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

function Dashboard() {
  return (
    <div>
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
        <Divider />
        <Grid mt={3} px={10} templateColumns="repeat(2, 1fr)" gap={5}>
          <GridItem w="100%" h="460"  borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            
          </GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
          <GridItem w="100%" h="460" borderRadius={5} boxShadow='dark-lg' p='6' rounded='md' bg='white'></GridItem>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
