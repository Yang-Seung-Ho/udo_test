import img1 from "../Image/RoomPart1/1.jpg";
import img2 from "../Image/RoomPart1/2.jpg";
import img3 from "../Image/RoomPart1/3.jpg";
import img4 from "../Image/RoomPart1/4.jpg";
import img5 from "../Image/RoomPart1/5.jpg";
import img6 from "../Image/RoomPart1/6.jpg";
import img7 from "../Image/RoomPart1/7.jpg";
import img8 from "../Image/RoomPart1/8.jpg";
import img9 from "../Image/RoomPart1/9.jpg";
import img10 from "../Image/RoomPart1/10.jpg";
import img11 from "../Image/RoomPart1/11.jpg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import styled, { keyframes } from "styled-components";

function Room() {
  useEffect(() => {
    const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
    ];

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);
  const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  const TotalBox = styled.div`
    animation: ${fadeInAnimation} 0.5s ease-in;
    position: absolute;
    z-index: -1;
    margin-top: 175px;
    margin-left: 36%;
    margin-right: 8%;
    height: auto;
    width: 52%;
    ${(props) => props.theme.mobile`
        animation: ${fadeInAnimation} 0.5s ease-in;
        z-index: 1;
        min-height: 100%;
        padding: 0px 14px;
        position: relative;
        margin : 0;
        width:100%;
        top:50px;
  `}
    ${(props) => props.theme.fullscreen`
    margin-top: 200px;
  `}
  `;
  const RoomTitle = styled.h1`
    margin-bottom: 48px;
    font-size: 24px;
    ${(props) => props.theme.mobile`
    font-size:18px;
    padding:24px 0;
    margin-bottom:0;
`}
    ${(props) => props.theme.fullscreen`
  font-size: 26px;
`}
  `;
  const RoomTitleSpan = styled.span`
    font-size: 20px;
    ${(props) => props.theme.mobile`
    font-size: 16px;  
`}
  `;
  const RoomTotalBox = styled.div`
    display: flex;
    width: 105%;

    ${(props) => props.theme.mobile`
    width:100%;
    flex-direction: column;
`}
  `;

  const RoomInfoBox = styled.div`
    width: 70%;
    ${(props) => props.theme.mobile`
    width:100%;
    
`}
    div {
      ${(props) => props.theme.mobile`
    font-size:12px;  
    
`}
    }
    p {
      ${(props) => props.theme.mobile`
    font-size:12px  
`}
    }
  `;
  const CarouselTotalBox = styled.div`
    width: 100%;
    ${(props) => props.theme.fullscreen`
    width: 100%;
    height: auto;
    max-width: 570px;
    max-height: 371px;

`}
  `;
  // 이미지 사이즈 조정
  const LeftImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 570px;
    max-height: 371px;
    ${(props) => props.theme.fullscreen`
    width: 100%;
    height: auto;
`}
  `;
  const CarouselTotalOuterBox = styled.div`
    width: 130%;
    ${(props) => props.theme.mobile`
    width:100%;  
`}
  `;
  const RoomInfoP = styled.p`
    opacity: 1;
    font-size: 13px;
    margin-bottom: 6px;

    ${(props) => props.theme.fullscreen`
  font-size: 15px;
  margin-bottom: 10px;
`}
  `;
  const RoomInfoDiv = styled.div`
    padding-bottom: 32px;
    /* font-family: "NanumSquareNeo"; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    & ${RoomInfoP}:last-child {
      margin: 0;
    }
    & ${RoomInfoP}:first-child {
      margin-top: 8px;
    }
    ${(props) => props.theme.fullscreen`
  font-size: 16px;
`}
  `;
  const RoomInfoSpan = styled.p`
    opacity: 1;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-self: center;

    ${(props) => props.theme.fullscreen`
  font-size: 16px;
`}
  `;
  const ModalBtn = styled.div`
    border-radius: 8px;
    margin-top: 12px;
    border: 1px solid;
    width: 100px;
    padding: 5px 7px;
    text-align: center;
  `;
  const ModalBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 12px;
  `;
  const ModalInfoBox = styled.div`
    width: 45%;
    padding-top: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid;
    &:first-child,
    &:nth-child(2) {
      padding-top: 0px;
    }
    &:last-child,
    &:nth-last-child(2) {
      border: none;
    }
  `;
  const ModalInfoTitle = styled.h1`
    /* font-family: "NanumSquareNeoSemiBold"; */
    margin-bottom: 28px;
    ${(props) => props.theme.mobile`
    font-size:13px;
    margin-bottom: 14px;
`}
    ${(props) => props.theme.fullscreen`
  font-size:17px;
  margin-bottom: 22px;

`}
  `;
  const ModalInfoLi = styled.li`
    margin-bottom: 10px;
    font-size: 14px;
    opacity: 1;

    /* font-family: "NanumSquareNeo"; */
    ${(props) => props.theme.mobile`
    font-size:12px;
    margin-bottom: 8px;

`}
    ${(props) => props.theme.fullscreen`
  font-size:16px;
  margin-bottom: 11px;

`}
  `;
  const ReservationBtn = styled.button`
    margin-top: 12px;
    color: black;
    border: 1px solid black;
    width: 100px;
    padding: 5px 7px;
    border-radius: 8px;
    background-color: var(--backgroundColor);
    margin-left: 30%;
  `;
  const ModalOuterBox = styled.div`
    ${(props) => props.theme.mobile`
    font-size:14px;
`}
  `;
  const EquipmentBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    ${(props) => props.theme.mobile`
      
    `}
  `;
  const ModalInnerBox = styled.div`
    max-width: 45%;
    ${(props) => props.theme.mobile`
    max-width:none;
    width:90%;
    top:40px;
    margin: 0 auto;
`}
  `;
  const ModalTitle = styled.h1`
    ${(props) => props.theme.mobile`
    font-size:14px  
    ${(props) => props.theme.fullscreen`
  font-size: 24px;
`}
`}
  `;
  return (
    <>
      <TotalBox>
        <RoomTitle>
          기행 <RoomTitleSpan>紀行</RoomTitleSpan>
        </RoomTitle>
        <RoomTotalBox>
          <RoomInfoBox>
            <div>
              <RoomInfoDiv
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingBottom: "6px",
                }}
              >
                체크인
                <RoomInfoSpan style={{ paddingLeft: "6px" }}>
                  16:00
                </RoomInfoSpan>
              </RoomInfoDiv>
              <RoomInfoDiv
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                체크아웃
                <RoomInfoSpan style={{ paddingLeft: "6px" }}>
                  12:00
                </RoomInfoSpan>
              </RoomInfoDiv>
            </div>
            <RoomInfoDiv>
              객실 구성
              <RoomInfoP>침실, 주방 겸 거실,</RoomInfoP>
              <RoomInfoP>멀티방(침실, 빔프로젝터, 턴테이블),</RoomInfoP>
              <RoomInfoP>야외 테라스(바베큐장, 자쿠지), 화장실</RoomInfoP>
            </RoomInfoDiv>
            <RoomInfoDiv>
              인원
              <RoomInfoP>기준인원 2인 / 최대인원 2인</RoomInfoP>
              <RoomInfoP>(* 최대인원은 연령과 관계없음)</RoomInfoP>
            </RoomInfoDiv>
            <RoomInfoDiv>
              취사<RoomInfoP>취사가능</RoomInfoP>
            </RoomInfoDiv>
            <RoomInfoDiv>
              비품 및 구성
              <EquipmentBox>
                <ModalBtn
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  자세히 보기
                </ModalBtn>
                <Link to="/reservation">
                  <ReservationBtn>예약하기</ReservationBtn>
                </Link>
              </EquipmentBox>
            </RoomInfoDiv>
          </RoomInfoBox>
          <CarouselTotalOuterBox>
            <CarouselTotalBox
              id="carouselExampleInterval3"
              className="carousel slide carousel-fade"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <LeftImg src={img1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img5} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img6} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img7} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img8} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img9} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img10} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img11} class="d-block w-100" alt="..." />
                </div>
                {/* <div class="carousel-item">
                  <LeftImg src={img12} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img13} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img14} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <LeftImg src={img15} class="d-block w-100" alt="..." />
                </div> */}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval3"
                data-bs-slide="prev"
                style={{ color: "white", opacity: "1" }}
              >
                <span
                  class="fa-solid fa-chevron-left"
                  style={{ color: "white", opacity: "1" }}
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval3"
                data-bs-slide="next"
                style={{ color: "white", opacity: "1" }}
              >
                <span
                  // style={{ color: "white", opacity: "1" }}
                  class="fa-solid fa-chevron-right"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </CarouselTotalBox>
          </CarouselTotalOuterBox>
        </RoomTotalBox>
        <Footer></Footer>
      </TotalBox>

      {/* 모달 박스 */}
      <ModalOuterBox
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        data-bs-dismiss="modal"
        aria-label="Close"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <ModalInnerBox
          className="modal-dialog"
          data-bs-dismiss="modal"
          aria-label="Close"
          tabindex="1"
        >
          <div class="modal-content">
            <div class="modal-header">
              <ModalTitle id="staticBackdropLabel">비품 및 구성</ModalTitle>
            </div>
            <ModalBody
              className="modal-body"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <ModalInfoBox>
                <ModalInfoTitle>미디어룸</ModalInfoTitle>
                <ul>
                  <ModalInfoLi>빔프로젝터</ModalInfoLi>
                  <ModalInfoLi>넷플릭스</ModalInfoLi>
                  <ModalInfoLi>스크린</ModalInfoLi>
                  <ModalInfoLi>소파</ModalInfoLi>
                  <ModalInfoLi>에어컨</ModalInfoLi>
                  <ModalInfoLi>턴테이블, LP</ModalInfoLi>
                </ul>
              </ModalInfoBox>
              <ModalInfoBox>
                <ModalInfoTitle>화장실</ModalInfoTitle>
                <ul>
                  <ModalInfoLi>바디워시 / 샴푸 / 컨디셔너</ModalInfoLi>
                  <ModalInfoLi>핸드워시</ModalInfoLi>
                  <ModalInfoLi>드라이기</ModalInfoLi>
                  <ModalInfoLi>수건 1인 2개(하루 숙박 기준)</ModalInfoLi>
                  <ModalInfoLi>칫솔, 치약 1인 당 1개</ModalInfoLi>
                </ul>
              </ModalInfoBox>
              <ModalInfoBox>
                <ModalInfoTitle>부엌</ModalInfoTitle>
                <ul>
                  <ModalInfoLi>전자레인지</ModalInfoLi>
                  <ModalInfoLi>Stove(인덕션)</ModalInfoLi>
                  <ModalInfoLi>냄비1 / 후라이펜1</ModalInfoLi>
                  <ModalInfoLi>컵 / 세제</ModalInfoLi>
                  <ModalInfoLi>전기포트</ModalInfoLi>
                  <ModalInfoLi>수저 3인세트</ModalInfoLi>
                  <ModalInfoLi>포크, 나이프</ModalInfoLi>
                  <ModalInfoLi>와인잔</ModalInfoLi>
                  <ModalInfoLi>와인오프너</ModalInfoLi>
                  <ModalInfoLi>냉장고</ModalInfoLi>
                  <ModalInfoLi>수세미 / 식기세제</ModalInfoLi>
                  <ModalInfoLi>3인 그릇세트</ModalInfoLi>
                </ul>
              </ModalInfoBox>
              <ModalInfoBox>
                <ModalInfoTitle>침실</ModalInfoTitle>
                <ul>
                  <ModalInfoLi>거울</ModalInfoLi>
                  <ModalInfoLi>디퓨져</ModalInfoLi>
                  <ModalInfoLi>에어컨</ModalInfoLi>
                  <ModalInfoLi>장스탠드</ModalInfoLi>
                  <ModalInfoLi>사진용 미니 빔프로젝트</ModalInfoLi>
                  <ModalInfoLi>퀸사이즈 침대</ModalInfoLi>
                </ul>
              </ModalInfoBox>
              <ModalInfoBox>
                <ModalInfoTitle>야외 테라스</ModalInfoTitle>
                <ul>
                  <ModalInfoLi>바베큐장, 테이블</ModalInfoLi>
                  <ModalInfoLi>자쿠지</ModalInfoLi>
                </ul>
              </ModalInfoBox>
              <ModalInfoBox></ModalInfoBox>
            </ModalBody>
          </div>
        </ModalInnerBox>
      </ModalOuterBox>
    </>
  );
}
export default Room;
