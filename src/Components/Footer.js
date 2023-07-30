import styled from "styled-components";

function Footer() {
  const TotalFooterBox = styled.div`
    padding: 80px 0 60px 0px;
    right: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    ${(props) => props.theme.mobile`
    right:0;
    padding: 40px 0 60px 0px;
`}
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
    font-size: 18px;
    padding-bottom: 4px;
  `;
  const InstaId = styled.span`
    cursor: pointer;
    font-size: 12px;
  `;
  const FooterUnderBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const FooterUnderSpan = styled.span`
    font-size: 11px;
    opacity: 0.8;
    border-right: 1px solid rgb(0, 0, 0, 0.8);
    padding: 0 6px;
  `;
  const FooterUnderDiv = styled.div`
    margin: 2px 0;

    ${FooterUnderSpan}:last-child {
      border: none;
    }
    ${(props) => props.theme.mobile`
    text-align: center;
`}
  `;
  const RawBox = styled.div`
    margin: 12px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  `;
  const RawSpan = styled.span`
    margin: 0 24px;
    font-size: 12px;
    opacity: 0.8;
  `;

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
          <FooterUnderSpan>계좌번호: 농협은행 351-1253-9769-63</FooterUnderSpan>
          <FooterUnderSpan>예금주: 윤경환</FooterUnderSpan>
        </FooterUnderDiv>
        <FooterUnderDiv>
          <FooterUnderSpan>사업자번호: 667-37-01036</FooterUnderSpan>
          <FooterUnderSpan>통신판매신고번호: 2023-23-23</FooterUnderSpan>
          <FooterUnderSpan>Tel. 010-6475-8409</FooterUnderSpan>
          <FooterUnderSpan>문의시간: 10:00 - 18:00</FooterUnderSpan>
        </FooterUnderDiv>
        <RawBox>
          <RawSpan>이용약관</RawSpan>
          <RawSpan>개인정보처리방침</RawSpan>
        </RawBox>
        <RawSpan>Copyright ⓒ 2023 UDOGIHANG All rights reserved.</RawSpan>
      </FooterUnderBox>
    </TotalFooterBox>
  );
}

export default Footer;
