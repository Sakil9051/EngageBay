import React from "react";

import './Home.css';
import {Box} from "@chakra-ui/react";
import AvtivitySolution from "./AvtivitySolution";
import VideoBackGround from "./VideoBackGround.jsx"
import ReviewsTab from "./ReviewsTab.jsx";
import CreateOwnViews from "./CreateOwnViews.jsx";
import ClinetTestimonial from "./ClinetTestimonial.jsx";
import BoxHover from "./BoxHover.jsx";
import GetStartedBox from "./GetStartedBox.jsx";
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
        <ReviewsTab/>
        <CreateOwnViews/>
        <ClinetTestimonial/>
        <BoxHover/>
        <GetStartedBox/>
      </Box>
      
    </>
  );
}

export default Home
