import React from "react";
import Header from "./header/header";
import Main from "./main/main";
import {Container } from "./style";

export default function App() {
  return (
    <Container>
        <Header/>
        <Main/>
    </Container>
  );
}
