import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
const TotalFooterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
`;

const InstaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;
const InstaLogo = styled.p`
  cursor: pointer;
  font-size: 20px;
  padding-bottom: 4px;
`;
const InstaId = styled.span`
  cursor: pointer;
  font-size: 14px;
`;
const FooterUnderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterUnderSpan = styled.span`
  font-size: 13px;
  opacity: 0.6;
  border-right: 1px solid rgb(0, 0, 0, 0.8);
  padding: 0 6px;
`;
const FooterUnderDiv = styled.div`
  margin: 2px 0;
  ${FooterUnderSpan}:last-child {
    border: none;
  }
`;
const RawBox = styled.div`
  margin: 12px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const RawSpan = styled.span`
  margin: 0 24px;
  font-size: 13.5px;
  opacity: 0.8;
`;
function Footer() {
  // const [pageHeight, setPageHeight] = useState(0);
  // const [scrollHeight, setScrollHeight] = useState(0);
  // const location = useLocation();
  // useEffect(() => {
  //   const handleResize = () => {
  //     setPageHeight(window.innerHeight);
  //     setScrollHeight(document.documentElement.scrollHeight);
  //   };

  //   const handleInitialLoad = () => {
  //     setPageHeight(window.innerHeight);
  //     setScrollHeight(document.documentElement.scrollHeight);
  //   };

  //   handleInitialLoad(); // 초기 로드 시에 한 번 실행

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [location.pathname]);

  const handleButtonClick = () => {
    window.open("https://www.instagram.com/stay_udo.gihang/", "_blank");
  };
  return (
    // 푸터바 위치를 전체 스크롤 길이에 1.3배 아래 위치
    <TotalFooterBox>
      <InstaBox>
        <InstaLogo
          onClick={handleButtonClick}
          className="fa-brands fa-instagram"
        ></InstaLogo>
        <InstaId onClick={handleButtonClick}>@stay_udo.gihang</InstaId>
      </InstaBox>
      <FooterUnderBox>
        <FooterUnderDiv>
          <FooterUnderSpan>우도 기행</FooterUnderSpan>
          <FooterUnderSpan>대표: 윤경환</FooterUnderSpan>
          <FooterUnderSpan>
            주소: 제주 제주시 우도면 우도해안길 816 뒷집 2층
          </FooterUnderSpan>
        </FooterUnderDiv>
        <FooterUnderDiv>
          <FooterUnderSpan>계좌번호: 농협은행 111-111-1111-11</FooterUnderSpan>
          <FooterUnderSpan>예금주: 우도기행</FooterUnderSpan>
        </FooterUnderDiv>
        <FooterUnderDiv>
          <FooterUnderSpan>사업자번호: 111-11-1111</FooterUnderSpan>
          <FooterUnderSpan>통신판매신고번호: 2023-23-23</FooterUnderSpan>
          <FooterUnderSpan>Tel. 111-1111-1111</FooterUnderSpan>
          <FooterUnderSpan>문의시간: 10:00 - 18:00</FooterUnderSpan>
        </FooterUnderDiv>
        <RawBox>
          <RawSpan>이용약관</RawSpan>
          <RawSpan>개인정보처리방침</RawSpan>
        </RawBox>
        <RawSpan>Copyright ⓒ 2023 CHWIHOGA All rights reserved.</RawSpan>
      </FooterUnderBox>
    </TotalFooterBox>
  );
}

export default Footer;
