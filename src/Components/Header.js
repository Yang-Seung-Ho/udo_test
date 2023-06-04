import styled from "styled-components";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
const LogoBox = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 60px;
  height: auto;
`;
const LogoText = styled.span`
  display: block;
`;
const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

const Items = styled.ul`
  margin: 8px 0;
  display: flex;
`;
const Item = styled.li`
  padding: 8px 30px;
  font-size: 18px;
  color: var(--fontColor);
  :hover {
    opacity: 0.6;
    transition: ease-in-out 0.3s;
  }
`;
function Header() {
  return (
    <>
      <LogoBox>
        <Link to="/">
          <Logo src={logo}></Logo>
          <LogoText>기행 紀行</LogoText>
        </Link>
      </LogoBox>
      <Nav>
        <Items>
          <Item>
            <Link to="/prologue">Prologue</Link>
          </Item>
          <Item>
            <Link to="/room">Room</Link>
          </Item>
          <Item>
            <Link to="/gallery">Gallery</Link>
          </Item>
          <Item>
            <Link to="/reservation">Reservation</Link>
          </Item>
        </Items>
      </Nav>
    </>
  );
}
export default Header;
