import React, { useState } from "react";
import * as FiIcon from "react-icons/fi";
import { api } from "../services/api";
import {
  ButtonSearch,
  ContainerInput,
  Input,
  Title,
} from "../style/BuscaCepStyled";
import { MainTitle, ResultData, Subtitle } from "./AppStyled";

export const BuscaCep = () => {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum cep!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("erro ao buscar");
      setInput("");
    }
  }

  return (
    <>
      <div className="container">
        <Title className="title">Buscar Cep</Title>

        <ContainerInput>
          <Input
            type="text"
            placeholder="Digite seu cep..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <ButtonSearch className="buttonSearch" onClick={handleSearch}>
            <FiIcon.FiSearch size={25} color="#fff" />
          </ButtonSearch>
        </ContainerInput>
      </div>

      {Object.keys(cep).length > 0 && (
        <ResultData>
          <MainTitle>CEP: {cep.cep}</MainTitle>
          <Subtitle>Rua: {cep.logradouro}</Subtitle>
          <Subtitle>Bairro: {cep.bairro}</Subtitle>
          <Subtitle>Localidade: {cep.localidade}/{cep.uf}</Subtitle>
          <Subtitle>DDD dessa área: {cep.ddd}</Subtitle>
        </ResultData>
      )}
    </>
  );
};
