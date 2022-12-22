import React, { useState } from "react";
import styles from "./Login.module.css";
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
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignin } = useUserAuth();

  const navigate = useNavigate()

  const handleSubmit = async () => {
    setError("");
    try {
      await logIn(email, password);
      alert("Login Successfull");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgetpw = ()=>{
    navigate('/forgetpassword')
  }

  const handlesignup = ()=>{
    navigate('/signup')
  }

  const home = ()=>{
    navigate('/')
  }
  
  const handleGooleSignIn = async () => {
    try {
      await googleSignin();
      alert("Login  Succesfully!");
      // navigate to dash board
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      alert("Log In With Google Failed");
    }
  };
  return (
    <div className={styles.main_Container}>
      <div className={styles.login_Container}>
        <div className={styles.main_Content}>
          <div className={styles.logo}>
            <img onClick={home} src={logo} alt="logo" width={250} />
          </div>
          {/* <br/> */}
          <p className={styles.main_content_p}>Login</p>
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <VStack>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                size="lg"
                focusBorderColor="blue.00"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired mb="10px">
              <FormLabel>Password</FormLabel>
              <Input
                size="lg"
                type="password"
                focusBorderColor="blue.00"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </VStack>
          <Button className={styles.login_btn}
            colorScheme="red"
            size="lg"
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
          <div
          className={styles.container_google_div}
          onClick={handleGooleSignIn}
          >
            <Box className={styles.container_google_box}>
              <FcGoogle size="sm" />
            </Box>
            <Box className={styles.container_google_title} >
              SIGN IN WITH G SUIT
            </Box>
          </div>
          <div>
            <p  className={styles.forget_pas_p}>
              Forgot <span onClick={handleForgetpw}>Password</span>?
            </p>
            <p className={styles.forget_pas_text}>
              {" "}
              Don't Have Any Account?{" "}
              <span onClick={handlesignup} style={{ cursor: "pointer" }}>Sign Up</span>
            </p>
            <p className={styles.forget_pas_text} style={{cursor: "pointer" }}>
              <a href="https://www.engagebay.com/legal/privacy-policy" target="_blank" rel="noreferrer">Private Policy</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.img_Container}>
        <div className={styles.row_desc}>
          <div className={styles.desc_avatar}>
            <div
            className={styles.desc_avatar_back}>
              <div className={styles.desc_img_back}>
                <img
                  className={styles.avatar_style}
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
              offered by ActiveCampaign is not easy to find until I got
              Engagebay.
            </p>
            <p className={styles.writer}>
              - Leonardo W, Founder, Wolff Consultoria
            </p>
          </div>
        </div>
        <div className={styles.login_img}></div>
      </div>
    </div>
  );
};

export default Login;
