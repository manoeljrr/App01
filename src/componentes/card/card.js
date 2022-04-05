import React from "react";
import {Cart,Row1,Row2,Paragrafo,Titulo,Info,Icone} from "./style";

export default function Card() {
  return (
    <Cart>
        <Row1>
            <Info>29 de mar, 2022</Info>
            <Icone><i class="far fa-heart"></i></Icone>
        </Row1>
        <Row2>
            <Titulo>lorem ipsum</Titulo>
            <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius molestiae. Unde qui aliquid, animi at porro, culpa, aperiam quisquam nostrum nulla maxime et neque incidunt accusantium! Magnam, animi tempore.</Paragrafo>
        </Row2>
    </Cart>
  );
}
