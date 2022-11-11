import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Button, CheckboxGroup, Flex, VStack } from '@chakra-ui/react'
import {AiOutlineEdit,AiOutlineDelete, AiOutlineRight,AiOutlineLeft} from "react-icons/ai"
import {FcRating} from "react-icons/fc"
import {IoIosOptions} from "react-icons/io"
import React from 'react'
import { TbCopy, TbMessage } from 'react-icons/tb'
import { Contact } from './Contact'
export const Cdetail= () => {
  return (
    <VStack>
        <Flex w="90%" justifyContent="space-between"><h1>{<ArrowBackIcon/>}Contact Detail</h1>
        <Button>ChangeView</Button>
        </Flex>
{Contact.name}

        <Flex w="90%" justifyContent="start">
            <VStack w="400px" mr="250px" border="2px" borderColor="white">
                <Flex w="300px" justifyContent="end">
                    <Button>{<AiOutlineEdit />}</Button>
                    <Button>{<AiOutlineDelete/>}</Button>
                    <Button>{<IoIosOptions/>}</Button>
                    <Button>{<AiOutlineLeft/>}</Button>
                    <Button>{<AiOutlineRight/>}</Button>
                     </Flex>
                     <Flex w="90%" justifyContent="start"><Box>f<br/>l</Box>
                     <Box><h3>name<br/>email</h3>
                     </Box>
                     <Box>{<TbMessage/>}</Box>
                     <Box>{<TbCopy/>}</Box>
                     </Flex>
                     <Box >Company Name</Box>
                     <Flex w="80%" justifyContent="space-between"><Box>{<FcRating/>}</Box><Box>Score</Box></Flex>

            </VStack>
            <VStack w="500px">
                <Flex><Button>Activites</Button>
                <Button>Email</Button>
                <Button>Deal</Button>
                <Button>Task</Button>
                <Button>Notes</Button>
                <Button>Docs</Button>
                <Button>Product</Button>
                <Button>Workflow</Button>
                <Button>Automation</Button>
                <Button>Calls</Button>
                <Button>Sms</Button>
                <Button>Sources</Button>
                </Flex>
            </VStack>
        </Flex>
    </VStack>
  )
}
