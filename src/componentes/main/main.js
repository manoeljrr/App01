import React from "react";
import Card from "../card/card";
import {ContainerMain,ContainerCards} from "./style";

export default function Main() {
  return (
    <ContainerMain>
        <ContainerCards>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ContainerCards>
    </ContainerMain>
  );
}
