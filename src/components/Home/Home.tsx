import React from "react";
import { HomeStack } from "./styledComponents";
import Container from "@mui/material/Container";
// custom components
import Sidebar from "../Leftbar";
import Rightbar from "../Rightbar";
import Feeds from "../Feeds";

function Home() {
  return (
    <HomeStack >
      <Sidebar />
      <Feeds />
      <Rightbar />
    </HomeStack>
  );
}

export default Home;
