import React from "react";

import './Home.css';
import {Box} from "@chakra-ui/react";
import AvtivitySolution from "./AvtivitySolution";
import VideoBackGround from "./VideoBackGround.jsx"
import Navbar from "../../Components/Navbar";
function Home() {
  return (
    <>
      <Box id="nav-container" w={"full"}>
        <Navbar/>
      </Box>
      <Box w={"full"} overflow={"hidden"}>
        <VideoBackGround/>
        <AvtivitySolution/>
      </Box>
      
    </>
  );
}

export default Home
