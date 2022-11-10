import { Box, Flex, Button, Image, Input, FormLabel, Select, VStack} from '@chakra-ui/react'
import React, { useState } from 'react'
import {GrFormRefresh} from "react-icons/gr"
import { ArrowDownIcon,CloseIcon} from '@chakra-ui/icons'
import {TbTableImport} from "react-icons/tb"
import {TiStar} from "react-icons/ti"

export const Contact=()=> {
  const [name , setName] = useState('');
  const [lname,setLname]=useState("");
  const [role , setRole] = useState('');
  const [email , setEmail] = useState('');
  const [address,setAddress] = useState('');
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  const [xountry,setCountrty] = useState('');


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
      alert('A form was submitted with Name :"' + name +
      '" ,Age :"'+'" and Email :"' + email + '"'+xountry);
    
    e.preventDefault();

  }


  const styles = {
    labelAsterisk: {
      color: "red"
    }
  };
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
    {modal && (
        <VStack borderColor="black" border="1px" w="40%" ml="400px">
          <div onClick={toggleModal} ></div>
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
         <Button onClick={toggleModal}>Cancel</Button><Button type='submit'>Create</Button>
          </form>
        </VStack>
      )}
    
      <Flex justifyContent="space-between"
      maxW="container.lg"
      mx="auto"
      alignItems={"center"}
        >
        <Image w="30%" src='https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg' alt='easybay'/>
        <Box>
          <h1>Contact</h1><br/>
          <p>Sorry, we could not find any results with the search criteria. Please change the search criteria and try again.</p>
          <Button >Import</Button>
       <Button onClick={toggleModal}>Create New</Button>
        </Box>
      </Flex>


   </>
  )}