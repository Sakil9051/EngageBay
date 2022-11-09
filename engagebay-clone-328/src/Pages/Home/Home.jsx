import React from "react";

import './Home.css';
import {Box} from "@chakra-ui/react";
import AvtivitySolution from "./AvtivitySolution";
import VideoBackGround from "./VideoBackGround.jsx"
function Home() {
  return (
    <>
      <Box id="nav-container" w={"full"}>
      </Box>
      <Box w={"full"} overflow={"hidden"}>
        <VideoBackGround/>
        <AvtivitySolution/>
      </Box>
      
    </>
  );
}

export default Home
