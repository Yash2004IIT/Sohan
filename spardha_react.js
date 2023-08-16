import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
`;

function LoginForm() {
  return (
    <FormContainer>
      <h2>Login for spardha</h2>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </FormContainer>
  );
}

function SignUpForm() {
  return (
    <FormContainer>
      <h2>Sign Up here for spardha fest</h2>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button>Sign Up</Button>
    </FormContainer>
  );
}

function App() {
  return (
    <div>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default App;