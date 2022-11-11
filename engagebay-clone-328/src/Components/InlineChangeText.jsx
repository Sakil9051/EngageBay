import { Box, Button, Center, Editable, EditableInput, EditablePreview, Flex, Heading, Icon, Input, InputGroup, InputRightElement, Select, Spacer, Stack, Switch, Text, Textarea } from "@chakra-ui/react"
import {BsLightningChargeFill} from "react-icons/bs";

export const InlineChangeText = ()=>{
    return (
        <Flex gap="20px">
            <Stack w="40%"  
            border="1px dashed gray"
            borderRadius="10px"
            p="20px"
            spacing="1rem"
            >
                <Box align="left">
                    <Text>Form Title</Text>
                    <Editable  
                    bgColor="blackAlpha.100" 
                    p="10px" 
                    borderRadius="5px" 
                    defaultValue="Sign up today for free">
                    <EditablePreview />
                    <EditableInput />
                    </Editable>
                </Box>
                <Box align="left">
                    <Text>Form Description</Text>
                    <Editable
                      bgColor="blackAlpha.100" 
                      p="10px" 
                      borderRadius="5px"
                      defaultValue="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et">
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Box>
                <Box align="left">
                    <Text>Footer Message</Text>
                    <Editable 
                    bgColor="blackAlpha.100" 
                    p="10px" 
                    borderRadius="5px"
                    defaultValue="Incididunt ut labore et dolore magna" >
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Box>
                <Flex align="left">
                    <Text>Form Image</Text>
                    <Spacer />
                    <Switch />
                </Flex>
                <Flex>
                    <Text>Hide Box Shadow</Text>
                    <Spacer />
                    <Switch />
                </Flex>

                <Flex>
                    <Text>Form Background Image</Text>
                    <Spacer />
                    <Switch />
                </Flex>

                <Box align="left">
                    <Button>Choose File</Button>
                </Box>

                <Box align="left">
                    <Text>Background Image Position</Text>
                     <Select>
                        <option>Top Right</option>
                        <option>Top Left</option>
                        <option>Left Center</option>
                        <option>Left Bottom</option>
                        <option>Right Center</option>
                        <option>Right Bottom</option>
                        <option>Top Center</option>
                        <option>Center Center</option>
                        <option>Center Bottom</option>
                     </Select>
                </Box>

                <Flex>
                    <Text>Form Border Image</Text>
                    <Spacer />
                    <Switch />
                </Flex>

                <Flex>
                    <Text>Form Border</Text>
                    <Spacer />
                    <Switch />
                </Flex>

                <Box align="left">
                    <Text>Width</Text>
                    <Editable 
                        bgColor="blackAlpha.100" 
                        p="10px" 
                        borderRadius="5px" 
                        defaultValue="1"
                    >
                    <EditablePreview />
                    <EditableInput />
                    </Editable>
                </Box>
                <Box align="left">
                    <Text>Style</Text>
                    <Select>
                        <option>Solid</option>
                        <option>Dashed</option>
                        <option>Dotted</option>
                    </Select>
                </Box>

                <Box align="left">
                    <Text>Color</Text>
                    <Flex>
                    <Editable w="80%" 
                    bgColor="blackAlpha.100" 
                    p="10px" 
                    borderRadius="5px"
                    defaultValue="#2525">
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                    <Input w="20%" type="color" />
                    </Flex>
                    
                </Box>
                <Box align="left">
                    <Text>Radius</Text>
                    <Input 
                    bgColor="blackAlpha.100" 
                    p="10px" 
                    borderRadius="5px"
                    type="number" 
                    placeholder="Border Radius" />
                </Box>
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