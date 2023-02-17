import { useState } from "react";
import { Form } from "../../components/Form";
import { BackgroundInputs, CardInputs } from "../S.stylesPages";
import instagram from "../../assets/instagram.svg";
import { TitleLogo } from "../../components/TitleLogo";
import { Button } from "../../components/Button";
import { DivButtonInputs } from "./S.login";
import { TextLink } from "../../components/Text/S.text";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <BackgroundInputs>
      <CardInputs>
        <TitleLogo src={instagram} width="40%" textAlign="center" />
        <Form
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
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
            onClick={() => props.onClickNavigate("home")}
          >
            Entrar
          </Button>
        </DivButtonInputs>

        <TextLink size="small" onClick={() => props.onClickNavigate("singUp")}>
          Não está cadastrado?
        </TextLink>
      </CardInputs>
    </BackgroundInputs>
  );
};
