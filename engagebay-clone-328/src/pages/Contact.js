import { VStack,Box, Flex, Button, Image} from '@chakra-ui/react'
import React from 'react'
import {GrFormRefresh} from "react-icons/gr"
import { ArrowDownIcon } from '@chakra-ui/icons'
import {TbTableImport} from "react-icons/tb"
export const Contact = () => {
  return (
   <>
    <Flex justifyContent="space-between"
        alignItems={"center"}
        py={4}
        maxW="container.lg"
        mx="auto" >
        <Box>
            <h1>Contact{<ArrowDownIcon />}</h1>
        </Box>
        <div>
        <Button>{<GrFormRefresh/>}</Button>
        <Button m="10px">{<TbTableImport />}</Button>
        <Button m="10px">Filter {<ArrowDownIcon />}</Button>
        <Button m="10px">Create New</Button>
        </div>
    </Flex>
    
      <Flex justifyContent="space-between"
      maxW="container.lg"
      mx="auto"
      alignItems={"center"}
        >
        <Image w="30%" src='https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg' alt='easybay'/>
        <Box>
          <h1>Contact</h1><br/>
          <p>Sorry, we could not find any results with the search criteria. Please change the search criteria and try again.</p>
          <Button>Import</Button>
          <Button>Create New</Button>

        </Box>
      </Flex>
  

   </>
  )
}
