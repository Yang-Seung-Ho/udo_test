import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMediaQueries } from "../MediaQuery";

// 로고
import Logo_Text from "../Image/logo/text.png";

function MenuBar() {
  const { isMobile, isDesktop } = useMediaQueries();
  const location = useLocation();
  const [isLink, setIsLink] = useState("");
  const [isPrologue, setIsPrologue] = useState(false);
  const [isTour, setIsTour] = useState(false);

  useEffect(() => {
    setIsLink(location.pathname);

    if (location.pathname === "/story" || location.pathname === "/location") {
      setIsPrologue(true);
    } else {
      setIsPrologue(false);
    }

    if (
      location.pathname === "/places" ||
      location.pathname === "/restaurants"
    ) {
      setIsTour(true);
    } else {
      setIsTour(false);
    }
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
  const MenuBarBox = styled.div`
    position: fixed;
    font-family: "NanumSquareNeo";
  `;
  const MenuHeader = styled.div`
    position: fixed;
    width: 100%;
    height: 175px;
    background-color: rgba(245, 241, 232, 255, 0.9);
  `;
  const MenuHeaderInBox = styled.div`
    cursor: pointer;
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100vh;
    justify-content: center;
    width: 200px;
    height: auto;
    margin-top: 40px;
    margin-left: 8%;
  `;
  const MenuHeaderInBoxImg = styled.img`
    border-radius: 3px;
    width: 100%;
    height: 100%;
  `;

  const SideMenuHeaderBox = styled.div`
    position: fixed;
    padding-top: 175px;
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
    opacity: 0.7;
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
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &:hover {
      opacity: 1;
    }
  `;
  const MOffCanvasTotalBox = styled.div``;
  const MMenuUpperBarBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    position: fixed;
    background-color: var(--backgroundColor);
    z-index: 100;
  `;
  const MMenuIndividualBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  `;
  const MOffCanvasHeader = styled.div`
    background-color: rgb(126, 125, 124);

    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    div {
      padding: 20px;
    }
    font-size: 14px;
  `;

  const MOffCanvasBody = styled.div`
    background-color: var(--backgroundColor);
    display: flex;
    flex-direction: column;
    height: 100%;
  `;
  const MOffCanvasMenuBox = styled.div`
    width: 100%;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  `;
  const MOffCanvasMenuInnerBox = styled.div`
    width: 100%;
    font-size: 12px;
    padding: 16px 0 16px 38px;
  `;
  const MOffCanvasMenuTotalBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const MLogo = styled.img`
    width: 130%;
  `;
  return (
    <>
      {isDesktop && (
        <MenuBarBox>
          <MenuHeader>
            <MenuHeaderInBox>
              <Link to="/">
                <MenuHeaderInBoxImg src={Logo_Text}></MenuHeaderInBoxImg>
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
                        borderLeft:
                          isLink === "/story" ? "1px solid black" : "",
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
                    borderLeft:
                      isLink === "/experience" ? "1px solid black" : "",
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
                        opacity:
                          isLink === "/tour" || isLink === "/places" ? "1" : "",
                        borderLeft:
                          isLink === "/tour" || isLink === "/places"
                            ? "1px solid black"
                            : "",
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
      )}
      {/* 모바일 시작 */}
      {isMobile && (
        <>
          <MMenuUpperBarBox>
            <MMenuIndividualBox
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i class="fa-solid fa-bars"></i>
            </MMenuIndividualBox>
            <Link to="/prologue">
              <MMenuIndividualBox style={{ width: "100px" }}>
                <MLogo src={Logo_Text}></MLogo>
              </MMenuIndividualBox>
            </Link>
            <MMenuIndividualBox>
              <Link to="/reservation">
                <i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </MMenuIndividualBox>
          </MMenuUpperBarBox>
          <MOffCanvasTotalBox
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
            style={{ width: "70%" }}
          >
            <MOffCanvasHeader>
              <div>우도기행</div>
              <div
                style={{ padding: "18px 26px 18px 18px" }}
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i style={{ color: "white" }} class="fa-solid fa-x"></i>
              </div>
            </MOffCanvasHeader>
            <MOffCanvasBody>
              <MOffCanvasMenuTotalBox
                style={{ justifyContent: "space-between" }}
              >
                <Link to="/prologue">
                  <p
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{
                      paddingLeft: "24px",
                      width: "100%",
                      fontSize: "14px",
                    }}
                  >
                    Prologue
                  </p>
                </Link>
                <MOffCanvasMenuBox
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                  style={{ width: "61px" }}
                >
                  <div
                    style={{
                      textAlign: "right",
                      height: "13px",
                      width: "13px",
                      paddingRight: "27px",
                      fontSize: "12px",
                    }}
                    className="fa-solid fa-chevron-down"
                  ></div>
                </MOffCanvasMenuBox>
              </MOffCanvasMenuTotalBox>
              <div
                className={`collapse multi-collapse ${
                  isPrologue ? "show" : ""
                }`}
                id="multiCollapseExample1"
              >
                <Link to="/story">
                  <MOffCanvasMenuInnerBox
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{
                      backgroundColor:
                        isLink === "/story" ? "rgba(0, 0, 0, 0.1)" : "",
                    }}
                  >
                    Story
                  </MOffCanvasMenuInnerBox>
                </Link>
                <Link to="/location">
                  <MOffCanvasMenuInnerBox
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{
                      backgroundColor:
                        isLink === "/location" ? "rgba(0, 0, 0, 0.1)" : "",
                    }}
                  >
                    Location
                  </MOffCanvasMenuInnerBox>
                </Link>
              </div>
              <Link to="/experience">
                <MOffCanvasMenuBox
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{
                    backgroundColor:
                      isLink === "/experience" ? "rgba(0, 0, 0, 0.1)" : "",
                  }}
                >
                  Experience
                </MOffCanvasMenuBox>
              </Link>
              <Link to="/room">
                <MOffCanvasMenuBox
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{
                    backgroundColor:
                      isLink === "/room" ? "rgba(0, 0, 0, 0.1)" : "",
                  }}
                >
                  Room
                </MOffCanvasMenuBox>
              </Link>
              <Link to="/reservation">
                <MOffCanvasMenuBox
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{
                    backgroundColor:
                      isLink === "/reservation" ? "rgba(0, 0, 0, 0.1)" : "",
                  }}
                >
                  Reservation
                </MOffCanvasMenuBox>
              </Link>
              <MOffCanvasMenuTotalBox>
                <MOffCanvasMenuBox
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample2"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample2"
                >
                  Tour
                  <div
                    style={{ fontSize: "12px" }}
                    className="fa-solid fa-chevron-down"
                  ></div>
                </MOffCanvasMenuBox>
              </MOffCanvasMenuTotalBox>

              <div
                className={`collapse multi-collapse ${isTour ? "show" : ""}`}
                id="multiCollapseExample2"
              >
                <Link to="/places">
                  <MOffCanvasMenuInnerBox
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{
                      backgroundColor:
                        isLink === "/places" ? "rgba(0, 0, 0, 0.1)" : "",
                    }}
                  >
                    Places
                  </MOffCanvasMenuInnerBox>
                </Link>
                <Link to="/restaurants">
                  <MOffCanvasMenuInnerBox
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{
                      backgroundColor:
                        isLink === "/restaurants" ? "rgba(0, 0, 0, 0.1)" : "",
                    }}
                  >
                    Restaurants
                  </MOffCanvasMenuInnerBox>
                </Link>
              </div>
            </MOffCanvasBody>
          </MOffCanvasTotalBox>
        </>
      )}
    </>
  );
}

export default MenuBar;
