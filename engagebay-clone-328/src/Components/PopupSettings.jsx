import { Box, Checkbox, CheckboxGroup, Editable, EditableInput, EditablePreview, Flex, Heading, Icon, Input, Radio, RadioGroup, Select, Stack, Switch, Text } from "@chakra-ui/react"
import {AiOutlineMail} from "react-icons/ai";
import {TbMailForward} from "react-icons/tb";
import {RiFileListLine} from "react-icons/ri";
import { useState } from "react";

export const PopupSettings = ()=>{
    const [value, setValue] = useState(1);

    return (
        <Flex gap="20px"
        direction={{base:"column", lg:"row"}}
        >
            <Stack 
            border="1px dashed gray" 
            borderRadius="10px"
            padding="20px"
            w={{base:"100%", lg:"30%"}}
            shadow="lg"
            >
                <Flex
                gap="3"
                p="10px"
                fontSize="1.1rem"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    bgColor:"blackAlpha.100",
                    color:"teal",
                }}
                >
                    <Icon as={RiFileListLine} />
                    <Text>Main Settings</Text>
                </Flex>

                <Flex 
                gap="3"
                p="10px"
                fontSize="1.1rem"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    bgColor:"blackAlpha.100",
                    color:"teal",
                }}
                >
                    <Icon as={AiOutlineMail}/>
                    <Text>Double Opt-in Email</Text>
                </Flex>

                <Flex
                gap="3"
                p="10px"
                fontSize="1.1rem"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    bgColor:"blackAlpha.100",
                    color:"teal",
                }}
                >
                    <Icon as={TbMailForward}/>
                    <Text>Autoresponder</Text>
                </Flex>
            </Stack>




            <Stack 
            width={{base:"100%", lg:"70%"}}
            border="1px dashed gray"
            borderRadius="10px"
            padding="20px"
            textAlign="left"
            spacing="10"
            shadow="lg"
            >
                <Box>
                    <Heading color="blue.900" fontSize="xl" fontWeight="semibold">What should happen a visitor subscribers?</Heading>
                    <Stack
                    px="40px"
                    pt="20px"
                    spacing="5"
                    >
                        <Box>
                        <Radio>Show success message</Radio>
                        <Editable
                        defaultValue="Success! Now check your email to confirm your submission." 
                        bgColor="blackAlpha.100"
                        p="10px"
                        mt="5px"
                        >
                            <EditablePreview />
                            <EditableInput />
                        </Editable>  
                        </Box>

                        <Box>
                            <Radio>Redirect to another page</Radio>
                            <Editable 
                            bgColor="blackAlpha.100"
                            p="10px"
                            mt="5px"
                            placeholder="Redirection URL"
                            >
                                <EditablePreview />
                                <EditableInput  />
                            </Editable>
                        </Box>
                        <Checkbox>Push contact information to the given URL</Checkbox>
                    </Stack>
                </Box>
                
                <Box>
                    <Heading color="blue.900" fontSize="xl" fontWeight="semibold">Send Email Notification</Heading>
                    <Stack px="40px" pt="20px"
                    spacing="4"
                    >
                        <Box>
                            <Text>By enabling send email option, you will be emailed with all the form details when a new user submits the form</Text>
                            <RadioGroup>
                                <Stack direction={{base:"column", md:"row"}}>
                                    <Radio value={value}>Enable</Radio>
                                    <Radio value={value}>Disable</Radio>
                                </Stack>  
                            </RadioGroup>
                        </Box>
                       
                        <Box>
                        <Text>Pick users to receive notification</Text>
                        <Checkbox>Priyanka Shahane</Checkbox>
                        </Box>
                       
                        <Box>
                            <Text>From Email</Text>
                            <Flex gap="4" direction={{base:'column', md:'row'}}>
                                <Input type="text" placeholder="Priyanka Shahane" />
                                <Select>
                            <option>priyanka@gmail.com</option>
                            <option>+ Add Email</option>
                        </Select> 
                            </Flex>
                            
                        </Box>  
                    </Stack>
                </Box>

                <Box>
                    <Heading color="blue.900" fontSize="xl" fontWeight="semibold">Other</Heading>
                    <Stack px="40px" pt="20px" spacing="4">
                        <Flex gap="10" alignItems="center">
                            <Text>Enable Recaptcha</Text>
                            <Switch />
                        </Flex>
                        <Checkbox>Add country name as tag</Checkbox>
                        <Checkbox>Add city name as tag</Checkbox>
                        <Box>
                            <Text>Email Domains to Block</Text>
                            <Input bgColor="blackAlpha.100" type="text" placeholder="Enter domain"/>
                        </Box>
                        

                        <Checkbox>Block free email domain providers (View List)</Checkbox>

                        <Box>
                            <Text>Exclude IP Addresses</Text>
                            <Editable
                            padding="10px" bgColor="blackAlpha.100"

                            defaultValue="63.139.127.5, 63.139.127.23" >
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        </Box>
                       
                        <Box>
                            <Text>Autofill</Text>
                            <Checkbox>Disable form feilds autofill</Checkbox>
                        </Box>
                       
                       <Box>
                            <Text>Contact</Text>
                            <Checkbox>Always create a contact for new unique feild data</Checkbox>
                       </Box>

                       
                    </Stack>
                </Box>

            </Stack>
        </Flex>
    )
}