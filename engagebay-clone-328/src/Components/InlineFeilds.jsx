import { Box, Button, Center, Editable, EditableInput, EditablePreview, Flex, Heading, Icon, Input, InputGroup, InputRightElement, Select, Spacer, Stack, Switch, Text, Textarea } from "@chakra-ui/react"
import {BsLightningChargeFill} from "react-icons/bs";

export const InlineFeilds = ()=>{
    return (
        <Flex gap="20px">
            <Stack w="40%"  
            border="1px dashed gray"
            borderRadius="10px"
            p="20px"
            spacing="1rem"
            >
                <Select placeholder="Add New Feild">
                    <option>First Name</option>
                    <option>Last Name</option>
                    <option>Email</option>
                    <option>Role</option>
                    <option>Tag</option>
                    <option>Phone Number</option>
                    <option>Address Line</option>
                    <option>City</option>
                    <option>State</option>         
                </Select>
                <Box align="left">
                    <Text>Submit Button Text</Text>
                    <Editable  
                    bgColor="blackAlpha.100" 
                    p="10px" 
                    borderRadius="5px" 
                    defaultValue="Get Started">
                    <EditablePreview />
                    <EditableInput />
                    </Editable>
                </Box>

                <Flex align="left">
                    <Text>Reset Button Text</Text>
                    <Spacer />
                    <Switch />
                </Flex>

                <Editable 
                    textAlign="left" 
                    bgColor="blackAlpha.100" 
                    p="10px" 
                    borderRadius="5px" 
                    defaultValue="Reset Form">
                    <EditablePreview />
                    <EditableInput />
                </Editable>


            </Stack>


            <Box 
            w="60%" py="30px" px="12%"                     
            bgColor="blackAlpha.100"
            borderRadius="10px"
            
            >
                <Stack
                shadow="lg"
                borderRadius="10px"
                mt="100px"
                p={5}
                py="10"
                textAlign="left"
                spacing="10px"
                bgColor="white"
                bgImage={"https://s3.amazonaws.com/board-uploads/uploads/1523345017920-greenCurl.png"}
                bgRepeat="no-repeat"
                bgSize="30px contain"
                bgPosition="right top"
                >
                    <Heading 
                    fontSize="2xl"
                    fontWeight="400"

                    >Sign up for FREE</Heading>
                    <Text fontSize="0.9rem">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Text>
                    <InputGroup>
                        <Input 
                        type="email" 
                        placeholder="Enter your email address"
                        border="4px"
                        />
                        <InputRightElement w="fit-content">
                            <Button 
                            color="white"
                            bgColor="orange.500"
                            borderRadius="0px"
                            _hover={{
                                bgColor:"orange.400"
                            }}
                            >
                            Get Started
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <Text 
                    textAlign="center"
                    color="blue.400"
                    >
                    Incididunt ut labore et dolore magna
                    </Text>
                </Stack>
                <Center 
                 
                alignItems="center"
                bgColor="white"
                w="fit-content"
                m="auto" mt="10px"
                px="10px" py="5px"
                borderRadius="50px"
                fontSize="0.8rem"
                >
                    <Icon color="orange.500" as={BsLightningChargeFill} />
                    <Text ml="2px" as={'span'}>by <Text color="blue.400" fontWeight="bold" as={"span"}>EngageBay</Text></Text>
                </Center>
            </Box>
        </Flex>
    )
}