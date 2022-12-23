import { Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import DashNavbar from "../../Components/DashNav";
import { InlineFormContents } from "../../Components/InlineFormContents";
import styles from "../Templetes/Vedio.module.css";
const Emailtemplete = () => {
  const [show,setShow]=useState(false)
  const handleEmailTemplete=()=>{
    setShow(true);
  }
  const handleShowContents=()=>{
    setShow(false);
  }
  
    if(show===true)
    {
      return(
        <InlineFormContents handleShow={handleShowContents} />
      )
    }
  return (
    <>
    <DashNavbar/>
      <div className={styles.main_Container}>Email</div>
      <div className={styles.inner_Container}>
        <div
          style={{
            height: "50vh",
            width: "96%",
            borderRadius: "10px",
            margin: "auto",
            display: "flex",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.desc_div}>
            <div className={styles.Imgbox}>
              <img
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-16.svg"
                alt="img"
                width={150}
              />
            </div>
            <div className={styles.description}>
              <p className={styles.description_p}>
                Email Templetes
              </p>
              <p className={styles.description_desc}>
                Create beautiful, responsive, and high-converting email
                templates in minutes without writing any code.
                <br />
                Create the templates once and
                re-use them in broadcasts, sequences, and marketing automation
                emails throughout EngageBay.
              </p>
              <div className={styles.emailOption}>
                <Button colorScheme="blue" color="white" onClick={handleEmailTemplete}>
                  CREATE EMAIL TEMPLATE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emailtemplete;
