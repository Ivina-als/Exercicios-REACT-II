import { useState } from "react";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { TitleLogo } from "../../components/TitleLogo";
import { DivButtonInputs } from "../Login/S.login";
import { BackgroundInputs, CardInputs } from "../S.stylesPages";
import instagram from "../../assets/instagram.svg";

export const SingUp = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  return (
    <BackgroundInputs>
      <CardInputs>
        <TitleLogo src={instagram} width="40%" textAlign="center" />
        <Form
          placeholder="Nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <Form
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
        />
        <Form
          placeholder="Idade"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="text"
        />
        <Form
          placeholder="Senha"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
        />

        <DivButtonInputs>
          <Button
            background=" #1071b1"
            width="100%"
            onClick={() =>
              console.log({
                Nome: name,
                Email: email,
                Idade: age,
                senha: pass,
              })
            }
          >
            Entrar
          </Button>
        </DivButtonInputs>
      </CardInputs>
    </BackgroundInputs>
  );
};
