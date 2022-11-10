import { Box } from "@chakra-ui/react"
import React from "react"
import { CreateForm } from "../../Components/CreateForm";
import { InlineFormContents } from "../../Components/InlineFormContents"

const form_content = {
    image_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-8.svg",
    form_name:"Inline Forms",
    description:"Create responsive and beautiful forms in minutes. Capture leads, grow email lists and engage web visitors without having to deal with any coding. Choose from a wide range of ready-made templates and customize them to suit your needs. Simply embed the form code into the web pages to start capturing leads.", 
    btn_txt : "Create Inline Form"
}

export const InlineFormCreate = ()=>{
    return (
        <Box>
            {/* <CreateForm {...form_content} /> */}
            <InlineFormContents />
        </Box>
    )
}