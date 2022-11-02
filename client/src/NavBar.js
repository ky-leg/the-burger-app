import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles";

function NavBar({ user, onLogin }) {


  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onLogin(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
          <Link to="/">WKND EATR</Link>
      </Logo>
      <Nav>
          <Button 
          as={Link} to={`/user/${user.id}`}
          >
            {user.username}
          </Button>
          <Button as={Link} to={`/ratings/new`}>
            New Review
          </Button>
          <Button as={Link} to={`/restaurants`}>
            Restaurants
          </Button>
        <Button variant="outline" 
        onClick={handleLogoutClick}
        >
          Logout
        </Button>
      </Nav>
  </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: darkblue;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
