import React, { useState } from "react";
import styles from "./Resetpassword.module.css";
import logo from "../Images/Engagebay_Logo.png";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useUserAuth } from "../../Context/userAuthContext";
const Resetpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();
  const handleSubmit = async () => {
    setError("");
    try {
      await resetPassword(email);
      alert("password sent");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className={styles.main_Container}>
      <div className={styles.reset_Container}>
        <div className={styles.main_Content}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" width={250} />
          </div>

          <p
            style={{
              fontSize: "28px",
              fontWeight: "normal",
              marginTop: "20px",
            }}
          >
            Reset Password
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
              <FormLabel>Username</FormLabel>
              <Input
                type="email"
                size="lg"
                focusBorderColor="blue.00"
                onChange={(e) => setEmail(e.target.value)}
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
            Reset Password
          </Button>
          <div>
            <p style={{ marginTop: "17%", fontSize: "14px" }}>
              Already have an account ?{" "}
              <span style={{ cursor: "pointer" }}>Sign In</span>
            </p>
            <p style={{ marginTop: "2%", fontSize: "14px" }}>
              {" "}
              Don't Have Any Account?{" "}
              <span style={{ cursor: "pointer" }}>Sign Up</span>
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
              offered by ActiveCampaign is not easy to find until I got
              Engagebay.
            </p>
            <p className={styles.writer}>
              - Leonardo W, Founder, Wolff Consultoria
            </p>
          </div>
        </div>
        <div className={styles.reset_img}></div>
      </div>
    </div>
  );
};

export default Resetpassword;
