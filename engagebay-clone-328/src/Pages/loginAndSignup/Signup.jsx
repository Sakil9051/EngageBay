import React, { useState } from "react";
import styles from "./Signup.module.css";
import logo from "../Images/Engagebay_Logo.png";
import { FcGoogle } from "react-icons/fc";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useUserAuth } from "../../Context/userAuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp,googleSignin } = useUserAuth();

  const navigate = useNavigate()

  const handleForgetpw = ()=>{
    navigate('/forgetpassword')
  }

  const home = ()=>{
    navigate('/')
  }

  const handleSubmit = async () => {
    // e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      alert("Signup Successfull");
      // navigate to login page
      navigate("/login");
    } catch (err) {
      setError(err.message);
      // alert(err.message)
    }
  };
  const handlegoogleSignup=async()=>{
    try {
      await googleSignin();
      alert("Login  Succesfully!");
      // navigate to dash board
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      alert("Log In With Google Failed");
    }
  }
  return (
    <div className={styles.main_Container}>
      <div className={styles.signup_Container}>
        <div className={styles.main_Content}>
          <div className={styles.logo}>
            <img onClick={home} src={logo} alt="logo" width={250} />
          </div>
          {/* <br/> */}
          <p
            style={{
              fontSize: "20px",
              fontWeight: "100",
            }}
          >
            Get Started For FREE
          </p>
          <br />
          <br />
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}

          <VStack>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                size="lg"
                focusBorderColor="blue.00"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Work Email"
                size="lg"
                focusBorderColor="blue.00"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Website URL</FormLabel>
              <Input
                size="lg"
                type="text"
                placeholder="Website URL"
                focusBorderColor="blue.00"
              />
            </FormControl>
            <FormControl mb="10px" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                size="lg"
                type="password"
                placeholder="Password"
                focusBorderColor="blue.00"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </VStack>
          <Button
            colorScheme="red"
            width="100%"
            size="lg"
            mt={2}
            onClick={handleSubmit}
          >
            SIGNUP
          </Button>
          <div
            border="1px solid blue"
            style={{ display: "flex", boxSizing: "border-box", height: "60px" }}
          >
            <Box
              bg="white.600"
              w="15%"
              mt="10px"
              border="1px solid blue"
              p={2}
              color="black"
              cursor: pointer
            >
              <FcGoogle size="sm" />
            </Box>
            <Box bg="blue.600" w="85%" mt="10px" p={3.5} color="white" onClick={handlegoogleSignup}>
              SIGN IN WITH G SUIT
            </Box>
          </div>

          <div>
            <p style={{ marginTop: "10%", fontSize: "14px" }}>
              Forgot <span onClick={handleForgetpw} style={{ cursor: "pointer" }}>Password</span>?
            </p>
            <p style={{ marginTop: "2%", fontSize: "14px" }}>
              {" "}
              Don't Have Any Account?{" "}
              <span style={{ cursor: "pointer" }}>Sign in</span>
            </p>
            <p style={{ marginTop: "2%", fontSize: "14px", cursor: "pointer" }}>
              Private Policy
            </p>
          </div>
        </div>
      </div>
      <div className={styles.img_Container}>
        <div className={styles.row_desc}>
          <div className={styles.desc_avatar}>
            <div
              style={{
                height: "60%",
                width: "80%",
                marginTop: "20%",
                borderRadius: "50%",
                backgroundColor: "#5F7EB7",
                marginLeft: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "85%",
                  width: "85%",
                  margin: "auto",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://cdn5.engagebay.com/img/testimonials/leonard.jpeg"
                  alt="avatar"
                  style={{ width: "100%", borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.desc_desc}>
            <p className={styles.desc}>
              {" "}
              I was using ActiveCampaign but the costs were adding up quite
              quickly. I tried other platforms but the automation sequence
              offered by ActiveCampaign is not easy to find, until I got
              Engagebay.
            </p>
            <p className={styles.writer}>
              - Leonardo W, Founder, Wolff Consultoria
            </p>
          </div>
        </div>
        <div className={styles.signup_img}></div>
      </div>
    </div>
  );
};

export default Signup;
