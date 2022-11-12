import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { CreateForm } from "../../Components/CreateForm";
import DashNavbar from "../../Components/DashNav";
import { InlineFormContents } from "../../Components/InlineFormContents";

const form_content = {
  image_url:
    "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-8.svg",
  form_name: "Inline Forms",
  description:
    "Create responsive and beautiful forms in minutes. Capture leads, grow email lists and engage web visitors without having to deal with any coding. Choose from a wide range of ready-made templates and customize them to suit your needs. Simply embed the form code into the web pages to start capturing leads.",
  btn_txt: "Create Inline Form",
};

export const InlineForm = () => {
  const [show, setShow] = useState(true);

  const handleShowCreate = () => {
    setShow(false);
  };

  const handleShowContents = () => {
    setShow(true);
  };
  return (
    <>
    <DashNavbar/>
      <Box>
        {show ? (
          <CreateForm handleShow={handleShowCreate} {...form_content} />
        ) : (
          <InlineFormContents handleShow={handleShowContents} />
        )}
        {/* <InlineFormContents /> */}
      </Box>
    </>
  );
};
