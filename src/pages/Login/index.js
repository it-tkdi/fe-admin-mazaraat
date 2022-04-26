import React from 'react'
import {
  FormContent,
  FormTitle,
  LoginBox,
  LoginContainer,
} from "./LoginElements";
import { useNavigate } from "react-router-dom";
import { Button, Label, Logo, TextInput } from "../../components";
import { bgLogin, logo } from '../../assets';

const LoginPage = ({authenticate}) => {
  const navigate = useNavigate();
  const onSubmit = () => {
    authenticate();
    navigate("/admin/dashboard");
  };
  return (
    <LoginContainer bgUrl={bgLogin}>
      <LoginBox>
        <Logo logoUrl={logo} />
        <FormContent>
          <FormTitle>LOGIN</FormTitle>
          <Label label="Username" />
          <TextInput placeholder="username" />
          <div style={{ marginBottom: 30 }}></div>
          <Label label="Password" />
          <TextInput placeholder="password" />
          <div style={{ marginBottom: 30 }}></div>
          <Button
            width={"100%"}
            height={40}
            color="#F08618"
            text="Login"
            hover="#F39E46"
            onClick={onSubmit}
          />
        </FormContent>
      </LoginBox>
    </LoginContainer>
  );
}

export default LoginPage