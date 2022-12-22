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
  
  const handalelogin = ()=>{
    navigate('/login')
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
          <p className={styles.main_content_p}>
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
            <FormControl isRequired mb="10px">
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
          <Button className={styles.container_signup_btn}
            colorScheme="red"
            size="lg"
            onClick={handleSubmit}
          >
            SIGNUP
          </Button>
          <div className={styles.container_google_div}>
            <Box className={styles.container_google_icon}>
              <FcGoogle size="sm" />
            </Box>
            <Box className={styles.container_google_title} onClick={handlegoogleSignup}>
              SIGN IN WITH G SUIT
            </Box>
          </div>

          <div>
            <p className={styles.forget_pas_p}>
              Forgot <span onClick={handleForgetpw} style={{ cursor: "pointer" }}>Password</span>?
            </p>
            <p className={styles.forget_pas_acc}>
              {" "}
              Have Any Account?{" "}
              <span style={{ cursor: "pointer" }} onClick={handalelogin}>Sign in</span>
            </p>
            <p className={styles.container_pri_pol}>
              Private Policy
            </p>
          </div>
        </div>
      </div>
      <div className={styles.img_Container}>
        <div className={styles.row_desc}>
          <div className={styles.desc_avatar}>
            <div className={styles.container_avatar_back}>
              <div className={styles.container_img_back}>
                <img className={styles.container_avatar_style}
                  src="https://cdn5.engagebay.com/img/testimonials/leonard.jpeg"
                  alt="avatar"
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
