import { Box, Flex, Button, Image, Input, FormLabel, Select, VStack,Stack ,Tab,TabList,TableContainer, Table, Thead, Tr, Checkbox,Th, Tabs} from '@chakra-ui/react'
import React, { useState} from 'react'
import {GrFormRefresh} from "react-icons/gr"
import { ArrowDownIcon,CloseIcon} from '@chakra-ui/icons'
import "./coantact.css"
import DashNavbar from '../Components/DashNav'
import EmailImport from './ImportCon'


export const Contact=()=> {
  const [name , setName] = useState('');
  const [lname,setLname]=useState("");
  const [role , setRole] = useState('');
  const [email , setEmail] = useState('');
  const [address,setAddress] = useState('');
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  const [xountry,setCountrty] = useState('');

  const [tabledata,setTabledata]=useState([]);
  const [show,setShow]=useState(true);
  

  const handleChange =(e)=>{
    setName(e.target.value);
  }
  const handleLchange=(e)=>{
    setLname(e.target.value)
  }
  const handleRoleChange =(e)=>{
    setRole(e.target.value);
  }
  const handleAddChange =(e)=>{
    setAddress(e.target.value);
  }
  const handleCityChange =(e)=>{
    setCity(e.target.value);
  }
  const handleCountryChange =(e)=>{
    setCountrty(e.target.value);
  }
  const handleStateChange =(e)=>{
    setState(e.target.value);
  }
  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }

  const handleSubmit=(e)=>{

    e.preventDefault();
    let data={
      name:name,
      last:lname,
      address:address,
      email:email,
      country:xountry,
      role:role,
      id:new Date()
    }
    
    setTabledata([...tabledata,data])
    setShow(false);
    alert("Stats: Confirmed")
    console.log(tabledata)
    toggleModal()
    }
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }



  return (
    <>
    <DashNavbar/>
    <Box w="98%" m="auto" mt="4" borderRadius="25px" p="5" bgColor="white" bg="blue.200" >
            <Tabs  variant="soft-rounded" colorScheme="telegram">
                <TabList >
                <Tab textAlign="left">
            <h1>Contact{<ArrowDownIcon />}</h1>
        </Tab>
                    <Tab ml={{base:"50px",md:"100px", lg:"700px"}}>{<GrFormRefresh/>}</Tab>
                 
                    <Select ml="40px" mt="20px" w="8%" placeholder='Action'>
                       <option>Country</option>
                        <option>Name</option>
                        <option>Last Name</option>
                        <option>Email</option>
                    </Select>
                 
                    <Tab m="10px" ><EmailImport/></Tab>
                    <Tab m="10px">Filter {<ArrowDownIcon />}</Tab>
                    <Tab m="10px" onClick={toggleModal}>Create New</Tab>
                </TabList>
                </Tabs>
       </Box>

   
      <Stack w={{base:"100%", lg:"100%"}}  
            borderRadius="10px"
            p="20px"
            spacing="2rem">
        <Box textAlign="left">
            <h1>Contact{<ArrowDownIcon />}</h1>
        </Box>
        </Stack>

  <TableContainer>
    <Table><Thead>
      <Tr>
        <Th>
          <Checkbox>Name</Checkbox>
        </Th>
        <Th>Email</Th>
        <Th>Role</Th>
        <Th>Adress</Th>
        <Th>Country</Th>
        
      </Tr>
     {tabledata.map(el=>{
      return (
        <Tr key={el.id}>
      <Th><Checkbox></Checkbox>{el.name}</Th>
      <Th>{el.email}</Th>
      <Th>{el.role}</Th>
      <Th>{el.address}</Th>
      <Th>{el.country}</Th>
      </Tr>
      )
     }) 
}
      </Thead></Table>
  </TableContainer>
     {modal && (
        <VStack className='modal1'  w={{ base: '100%', md: '30%', lg: '50%' }} ml={{ base: '24px', md: '300px', lg: '300px' }} borderRadius="2px">
          <form onSubmit={(e) => {handleSubmit(e)}}>
            <Flex justifyContent="space-between"><h1>Contact</h1>
            <Button  onClick={toggleModal}>{<CloseIcon/>}</Button>

            </Flex>
            
          <FormLabel>First Name</FormLabel>
         <Input type="text" value={name} required onChange={(e)=>{handleChange(e)}} placeholder="First Name" />

         <FormLabel>Last Name</FormLabel>
         <Input type="text" value={lname} required onChange={(e)=>{handleLchange(e)}} placeholder='Last Name' />
         <FormLabel>Email</FormLabel>
         <Flex>
          <Select>
            <option>Primary</option>
            <option>Secondary</option>
          </Select>
          <Input type="email" value={email} required onChange={(e)=>{handleEmailChange(e)}} placeholder="Email"></Input>
         </Flex>
         <FormLabel>Role</FormLabel>
         <Input type="text" value={role} required onChange={(e)=>{handleRoleChange(e)}} placeholder='Role'/>
         <FormLabel>Address</FormLabel>
         <Input type="text" value={address} required onChange={(e)=>{handleAddChange(e)}} placeholder='Address'/>
         <FormLabel>City</FormLabel>
         <Input type="text" value={city} required onChange={(e)=>{handleCityChange(e)}} placeholder='City'/>
         <FormLabel>State</FormLabel>
         <Input type="text" value={state} required onChange={(e)=>{handleStateChange(e)}} placeholder='State'/>
         <FormLabel>Country</FormLabel>
         <Select value={xountry} required onChange={(e)=>{handleCountryChange(e)}}>
          <option>India</option>
          <option>Bangladesh</option>
          <option>Sri-Lanka</option>
          <option>Israel</option>
          <option>Russia</option>
          <option>USA</option>
         </Select>
         <Button onClick={toggleModal}>Cancel</Button>
         <Button  type='submit' >Create</Button>
          </form>
        </VStack>
      )}
      
    
      {show?<Flex bg="rgb(246, 250, 253)" justifyContent="space-between"
      maxW="container.lg"
      mx="auto"
      alignItems={"center"}
        >
        <Image w="30%" src='https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg' alt='easybay'/>
        <Box>
          <h1>Contact</h1><br/>
          <p>Sorry, we could not find any results with the search criteria. Please change the search criteria and try again.</p>
          <Button bg="rgb(47, 106, 217)" color={"white"}>Import<EmailImport/></Button>
       <Button  ml="10px" onClick={toggleModal}>Create New</Button>
        </Box>
      </Flex>:null}


   </>
  )
    }