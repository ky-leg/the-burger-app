import { useState } from "react"; 
import styled from "styled-components";
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm";
import Button from '@mui/material/Button'



function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
      
    return (
      <Wrapper>
        <h1>WKND EATER</h1>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <p>
              Don't have an account? &nbsp;
              <Button variant="contained" onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <p>
              Already have an account? &nbsp;
              <Button variant="contained" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
            </p>
          </>
        )}
      </Wrapper>
    );
  }



const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;