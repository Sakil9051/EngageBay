import { Box, Button, Center, Editable, EditableInput, EditablePreview, Flex, Heading, Icon, Input, InputGroup, InputRightElement, Select, Spacer, Stack, Switch, Text, Textarea } from "@chakra-ui/react"
import {BsLightningChargeFill} from "react-icons/bs";

export const PopupDesign = ()=>{
    return (
        <Flex gap="20px"
        direction={{base:"column", lg:"row"}}
        >
            <Stack w={{base:"100%", lg:"40%" }} 
            border="1px dashed gray"
            borderRadius="10px"
            p="20px"
            spacing="1rem"
            >
                <Box align="left">
                    <Text>Font Family</Text>
                    <Select>
                        <option>Arial</option>
                        <option>Times New Roman</option>
                        <option>Tahoma</option>
                        <option>Verdana</option>
                        <option>Monospace</option>
                        <option>Impact</option>
                        <option>Arial Black</option>
                        <option>Courier New</option>
                        <option>Raleway</option>
                        <option>Open Sans</option>
                    </Select>
                </Box>

                <Box align="left">
                    <Text>Form Color</Text>
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
                    <Text>Form Background</Text>
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
                    <Text>Size</Text>
                    <Select>
                        <option>Extra Small</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>large</option>
                        <option>Full</option>
                       
                    </Select>
                </Box>

                <Box align="left">
                    <Text>Submit Button Background</Text>
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
                    <Text>Reset Button Background</Text>
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
     
              
            </Stack>


            <Box 
            w={{base:"100%", lg:"60%"}} 
            py="30px" px="12%"                     
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
                bgImage={"https://s3.amazonaws.com/board-uploads/uploads/1523349187250-form4_border.png "}
                bgRepeat="no-repeat"
                bgSize="100% 100%"
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