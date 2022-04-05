import React from "react";
import {ContainerHeader,Row1,Row2,Paragrafo,Input,Cabecalho,Icone} from "./style";

export default function Header() {
  return (
    <ContainerHeader>
        <Cabecalho>
          <Row1>
              <Paragrafo>codelândia</Paragrafo>
              <Paragrafo>blog</Paragrafo>
          </Row1>
          <Row2>
              <Icone class="fas fa-search">
                <i class="fas fa-search"></i>
              </Icone>
              <Input className="pesquisa" type="search" placeholder="Pesquisar no blog"/>
          </Row2>
        </Cabecalho>
    </ContainerHeader>
  );
}
