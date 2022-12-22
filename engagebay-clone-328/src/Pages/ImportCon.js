import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { TbTableImport } from "react-icons/tb";
function EmailImport() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" px="20%" onClick={onOpen}>
      {<TbTableImport />}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay  />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Upload Contact</DrawerHeader>

          <DrawerBody>
            <FormControl isRequired >
              <FormLabel>Name</FormLabel>
              <Input type="text"  />
            </FormControl>
            <br/>
            <br/>
            <FormControl isRequired >
              <FormLabel>File</FormLabel>
              <Input type="file" size="lg" p={1} />
            </FormControl>


          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Upload</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default EmailImport;
