import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Images/logo.png";
const MenuBarBox = styled.div`
  position: fixed;
  font-family: "NanumSquareNeoLight";
`;
const MenuHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 175px;
  background-color: rgba(245, 241, 232, 255, 0.9);
`;
// const MenuHeaderInBox = styled.div`
// cursor: pointer;
// background-color: black;
// display: flex;
// flex-direction: column;
// align-items: flex-end;
// height: 100vh;
// justify-content: center;
// color: whitesmoke;
// width: 143px;
// height: 143px;
// margin-top: 30px;
// margin-left: 8%;
// `;
const MenuHeaderInBox = styled.div`
  cursor: pointer;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100vh;
  justify-content: center;
  width: 143px;
  height: 143px;
  margin-top: 30px;
  margin-left: 8%;
`;
// const MenuHeaderInBoxSpan = styled.span`
//   display: block;
//   margin-right: 24px;
//   padding: 2px 0px;
//   padding-right: 4px;
//   border-right: 1.5px solid whitesmoke;
//   :first-child {
//     padding-top: 6px;
//   }
//   :last-child {
//     padding-bottom: 6px;
//   }
// `;
const MenuHeaderInBoxImg = styled.img`
  width: 100%;
`;
const SideMenuHeaderBox = styled.div`
  position: fixed;
  padding-top: 225px;
  margin-left: 20%;
`;
const SideMenuUl = styled.ul``;
const SideMenuOuterDiv = styled.div`
  position: relative;
`;
const SideMenuOuterLi = styled.li`
  position: relative;
  font-size: 18px;
  padding: 4px 12px;
  height: 28px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;
const SideMenuInnerUl1 = styled.ul`
  pointer-events: none;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  ${({ isActive }) =>
    isActive === "prologue" &&
    css`
      max-height: 500px;
      opacity: 1;
      pointer-events: auto;
    `}

  ${SideMenuOuterDiv}:hover & {
    max-height: 500px;
    opacity: 1;
    pointer-events: auto;
  }
`;
const SideMenuInnerUl2 = styled.ul`
  pointer-events: none;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  ${({ isActive }) =>
    isActive === "tour" &&
    css`
      max-height: 500px;
      opacity: 1;
      pointer-events: auto;
    `}

  ${SideMenuOuterDiv}:hover & {
    max-height: 500px;
    opacity: 1;
    pointer-events: auto;
  }
`;

const SideMenuInnerLi = styled.li`
  font-size: 14px;
  padding-left: 28px;
  height: 28px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    opacity: 1;
  }
`;

function MenuBar() {
  const location = useLocation();
  const [isLink, setIsLink] = useState("");
  useEffect(() => {
    setIsLink(location.pathname);
  }, [location.pathname]);

  const isActive =
    location.pathname === "/story" ||
    location.pathname === "/location" ||
    location.pathname === "/prologue"
      ? "prologue"
      : location.pathname === "/places" ||
        location.pathname === "/restaurants" ||
        location.pathname === "/tour"
      ? "tour"
      : null;
  return (
    <>
      <MenuBarBox>
        <MenuHeader>
          <MenuHeaderInBox>
            {" "}
            <Link to="/">
              <MenuHeaderInBoxImg src={Logo}></MenuHeaderInBoxImg>
            </Link>
          </MenuHeaderInBox>
        </MenuHeader>
        <SideMenuHeaderBox>
          <SideMenuUl>
            <Link to="/">
              <SideMenuOuterLi
                style={{
                  opacity: isLink === "/" ? "1" : "",
                  borderLeft: isLink === "/" ? "1px solid black" : "",
                }}
              >
                Home
              </SideMenuOuterLi>
            </Link>
            <SideMenuOuterDiv>
              <Link to="/prologue">
                <SideMenuOuterLi
                  style={{
                    opacity:
                      isLink === "/prologue" ||
                      isLink === "/story" ||
                      isLink === "/location"
                        ? "1"
                        : "",
                    borderLeft:
                      isLink === "/prologue" ||
                      isLink === "/story" ||
                      isLink === "/location"
                        ? "1px solid black"
                        : "",
                  }}
                >
                  Prologue
                </SideMenuOuterLi>
              </Link>
              <SideMenuInnerUl1 isActive={isActive}>
                <Link to="/story">
                  <SideMenuInnerLi
                    style={{
                      opacity: isLink === "/story" ? "1" : "",
                      borderLeft: isLink === "/story" ? "1px solid black" : "",
                    }}
                  >
                    Story
                  </SideMenuInnerLi>
                </Link>
                <Link to="/location">
                  <SideMenuInnerLi
                    style={{
                      opacity: isLink === "/location" ? "1" : "",
                      borderLeft:
                        isLink === "/location" ? "1px solid black" : "",
                    }}
                  >
                    Locations
                  </SideMenuInnerLi>
                </Link>
              </SideMenuInnerUl1>
            </SideMenuOuterDiv>

            <Link to="/experience">
              <SideMenuOuterLi
                style={{
                  opacity: isLink === "/experience" ? "1" : "",
                  borderLeft: isLink === "/experience" ? "1px solid black" : "",
                }}
              >
                Experience
              </SideMenuOuterLi>
            </Link>
            <Link to="/room">
              <SideMenuOuterLi
                style={{
                  opacity: isLink === "/room" ? "1" : "",
                  borderLeft: isLink === "/room" ? "1px solid black" : "",
                }}
              >
                Room
              </SideMenuOuterLi>
            </Link>
            <Link to="/reservation">
              <SideMenuOuterLi
                style={{
                  opacity: isLink === "/reservation" ? "1" : "",
                  borderLeft:
                    isLink === "/reservation" ? "1px solid black" : "",
                }}
              >
                Reservation
              </SideMenuOuterLi>
            </Link>
            <SideMenuOuterDiv>
              <Link to="/tour">
                <SideMenuOuterLi
                  style={{
                    opacity:
                      isLink === "/tour" ||
                      isLink === "/places" ||
                      isLink === "/restaurants"
                        ? "1"
                        : "",
                    borderLeft:
                      isLink === "/tour" ||
                      isLink === "/places" ||
                      isLink === "/restaurants"
                        ? "1px solid black"
                        : "",
                  }}
                >
                  Tour
                </SideMenuOuterLi>
              </Link>
              <SideMenuInnerUl2 isActive={isActive}>
                <Link to="/places">
                  <SideMenuInnerLi
                    style={{
                      opacity: isLink === "/places" ? "1" : "",
                      borderLeft: isLink === "/places" ? "1px solid black" : "",
                    }}
                  >
                    Places
                  </SideMenuInnerLi>
                </Link>
                <Link to="/restaurants">
                  <SideMenuInnerLi
                    style={{
                      opacity: isLink === "/restaurants" ? "1" : "",
                      borderLeft:
                        isLink === "/restaurants" ? "1px solid black" : "",
                    }}
                  >
                    Restaurants
                  </SideMenuInnerLi>
                </Link>
              </SideMenuInnerUl2>
            </SideMenuOuterDiv>
          </SideMenuUl>
        </SideMenuHeaderBox>
      </MenuBarBox>
    </>
  );
}

export default MenuBar;
