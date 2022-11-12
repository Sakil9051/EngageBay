import React from "react";
import DashNavbar from "../../Components/DashNav";
import styles from "../Templetes/Vedio.module.css";
import  VideoDrawer  from "./Drawer";
import RecordVideo from "./Modal";
const Vediotemplete = () => {
  return (
    <>
    <DashNavbar/>
      <div className={styles.main_Container}>Video</div>
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
          <div
           className={styles.desc_div}
          >
            <div
            className={styles.Imgbox}
            >
              <img
                src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-11.svg"
                alt="img"
                width={150}
              />
            </div>
            <div
            className={styles.description}
            >
              <p style={{ fontSize: "21px" ,fontWeight:"500" }}>Video Marketing</p>
              <p style={{ marginTop: "15px",color:"1C2A00",padding:"0px 10%",fontSize:"14px", fontWeight:"300" ,textAlign:"justify" }}>
                Record a video or upload existing videos, include them in your
                broadcasts,<br/> sequences and automations to promote your product
                more efficiently.
              </p>
              <div className={styles.vedioOption}>
                <div>
                  <RecordVideo/>
                </div>
                <div>
                <VideoDrawer/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vediotemplete;
