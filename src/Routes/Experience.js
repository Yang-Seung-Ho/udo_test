import barbeque1 from "../Image/Experience/barbeque.jpg";
import barbeque2 from "../Image/Experience/barbeque1.jpg";
import barbeque3 from "../Image/Experience/barbeque2.jpg";
import beam1 from "../Image/Experience/beam1.jpg";
import beam2 from "../Image/Experience/beam2.jpg";
import beam3 from "../Image/Experience/beam3.jpg";
import pool1 from "../Image/Experience/pool1.jpg";
import pool2 from "../Image/Experience/pool2.jpg";
import turn1 from "../Image/Experience/turntable1.jpg";
import turn2 from "../Image/Experience/turntable2.jpg";
import turn3 from "../Image/Experience/turntable3.jpg";
import styled, { keyframes } from "styled-components";
import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import { useMediaQueries } from "../MediaQuery";
const imagesToPreload = [
  barbeque1,
  beam1,
  pool1,
  turn1,
  // Add more images as needed
];

function Experience() {
  const { isMobile, isDesktop } = useMediaQueries();

  useEffect(() => {
    // Preload images
    imagesToPreload.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
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
    margin-right: 12%;
    height: auto;
    min-height: 100%;
    //마진퍼센트값을 뺀 것을 넓이로함 이번만
    width: 46%;
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
      margin-right: 12%;
      width: 40%;
`}
  `;
  const OrderList = styled.div`
    text-align: left;
  `;
  const ExperienceTotalBox = styled.div`
    padding-bottom: 40px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    ${(props) => props.theme.mobile`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  margin-bottom: 12px;
    
  
`}
  `;
  const Title = styled.h1`
    font-size: 18px;
    text-align: right;
    padding: 12px;
    opacity: 1;
    ${(props) => props.theme.mobile`
    padding: 24px 0;
    text-align:left;
`}
    ${(props) => props.theme.fullscreen`
  font-size: 20px;
`}
  `;
  const LeftImg = styled.img`
    width: 300px;
    height: 300px;
  `;

  const RightImgBox = styled.div`
    flex: 1; /* 추가 */
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    width: 100%;
    position: relative;
    height: 200px;
    ${(props) => props.theme.mobile`
    height: 100%;
    justify-content: center;
    align-items: center;
  `}/* ${(props) => props.theme.fullscreen`
  justify-content: center;
`} */
  `;
  const RightImgBox2 = styled.div`
    flex: 1; /* 추가 */
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    width: 100%;
    position: relative;
    height: 200px;
    ${(props) => props.theme.mobile`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`}
  `;
  const LeftImgBox = styled.div`
    flex: 1; /* 추가 */
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    ${(props) => props.theme.mobile`
    align-items: none;
    justify-content: none;
    width:100%;
`}
    ${(props) => props.theme.fullscreen`
`}
  `;
  const InfoBox = styled.div`
    width: 90%;
    text-align: justify;
    ${(props) => props.theme.mobile`
    width: 100%;
`}
  `;
  const InfoNumber = styled.span`
    font-size: 12px;
    font-style: italic;
    opacity: 1;
    ${(props) => props.theme.fullscreen`
      font-size:15px;  
`}
  `;
  const InfoTitle = styled.p`
    padding-top: 8px;
    font-size: 20px;
    opacity: 0.9;
    padding-bottom: 24px;
    ${(props) => props.theme.mobile`
  font-size:16px;  
  padding-bottom: 10px;
  opacity: 1;
`}
  `;
  const InfoDetail = styled.p`
    opacity: 1;
    font-size: 14px;
    line-height: 32px;

    ${(props) => props.theme.mobile`
  font-size:12px;  
  line-height: 24px;
`}
    ${(props) => props.theme.fullscreen`
      font-size:16px;  
`}
  `;
  const CarouselTotalBox = styled.div`
    width: 100%;
    max-width: 300px;
    max-height: 300px;
    ${(props) => props.theme.fullscreen`
    width: 80%;

`}

    ${(props) => props.theme.mobile`
  width: 100%;
  max-width: 300px;
  max-height: 300px;

`}
  `;
  const ExperienceOuterBox = styled.div``;
  return (
    <>
      {isDesktop && (
        <TotalBox>
          <Title>스테이에서의 경험들</Title>
          <ExperienceOuterBox>
            <OrderList>
              <InfoNumber>#01</InfoNumber>
            </OrderList>
            <ExperienceTotalBox>
              <LeftImgBox>
                <InfoBox>
                  <InfoTitle>자쿠지</InfoTitle>
                  <InfoDetail>
                    우도기행에서 제공하는 자쿠지는 몸과 마음을 휴식시킬 수 있는
                    특별한 공간입니다. 따뜻한 물에 몸을 담그며 스트레스와 피로를
                    푸는 동시에, 목욕 효과에 의해 피부도 부드러워집니다.
                  </InfoDetail>
                  <InfoDetail style={{ padding: "12px 0px" }}>
                    자연 속에서 느껴지는 평온과 안정은 여행 중의 여유로움을 한층
                    높여줍니다.
                  </InfoDetail>
                </InfoBox>
              </LeftImgBox>
              <RightImgBox>
                <CarouselTotalBox
                  id="ExperiencePool"
                  className="carousel slide carousel-fade"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <LeftImg src={pool1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={pool2} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#ExperiencePool"
                    data-bs-slide="prev"
                  >
                    <span
                      class="fa-solid fa-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#ExperiencePool"
                    data-bs-slide="next"
                  >
                    <span
                      class="fa-solid fa-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </CarouselTotalBox>
              </RightImgBox>
            </ExperienceTotalBox>
          </ExperienceOuterBox>
          <ExperienceOuterBox>
            <OrderList style={{ textAlign: "right" }}>
              <InfoNumber>#02</InfoNumber>
            </OrderList>
            <ExperienceTotalBox>
              <RightImgBox2>
                <CarouselTotalBox
                  id="ExperienceTurn"
                  className="carousel slide carousel-fade"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <LeftImg src={turn1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={turn2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={turn3} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#ExperienceTurn"
                    data-bs-slide="prev"
                  >
                    <span
                      class="fa-solid fa-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#ExperienceTurn"
                    data-bs-slide="next"
                  >
                    <span
                      class="fa-solid fa-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </CarouselTotalBox>
              </RightImgBox2>
              <LeftImgBox style={{ justifyContent: "flex-end" }}>
                <InfoBox>
                  <InfoTitle style={{ textAlign: "right" }}>턴테이블</InfoTitle>
                  <InfoDetail>
                    우도기행의 턴테이블은 LP판과 함께 음악을 즐길 수 있습니다..
                    오래된 팝송과 재즈의 따뜻한 음색을 품은 LP판들은 특별한
                    음악을 새롭게 경험할 수 만들어 줍니다.
                  </InfoDetail>
                  <InfoDetail style={{ padding: "12px 0px" }}>
                    LP판 컬렉션은 계속해서 확장되고 있어, 다양한 장르와
                    아티스트를 만나는 즐거움을 누릴 수 있습니다.
                  </InfoDetail>
                </InfoBox>
              </LeftImgBox>
            </ExperienceTotalBox>
          </ExperienceOuterBox>
          <ExperienceOuterBox>
            <OrderList>
              <InfoNumber>#03</InfoNumber>
            </OrderList>
            <ExperienceTotalBox>
              <LeftImgBox>
                <InfoBox>
                  <InfoTitle>빔 프로젝트</InfoTitle>
                  <InfoDetail>
                    빔 프로젝터를 통해 영화를 즐기실 수 있습니다.
                  </InfoDetail>
                  <InfoDetail style={{ padding: "12px 0px" }}>
                    뛰어난 화질과 스피커의 풍부한 음향으로 영화관에서와 같은
                    감동을 느낄 수 있습니다.
                  </InfoDetail>
                </InfoBox>
              </LeftImgBox>
              <RightImgBox>
                <CarouselTotalBox
                  id="ExperienceBeam"
                  className="carousel slide carousel-fade"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <LeftImg src={beam1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={beam2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={beam3} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#ExperienceBeam"
                    data-bs-slide="prev"
                  >
                    <span
                      class="fa-solid fa-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#ExperienceBeam"
                    data-bs-slide="next"
                  >
                    <span
                      class="fa-solid fa-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </CarouselTotalBox>
              </RightImgBox>
            </ExperienceTotalBox>
          </ExperienceOuterBox>
          <ExperienceOuterBox>
            <OrderList style={{ textAlign: "right" }}>
              <InfoNumber>#04</InfoNumber>
            </OrderList>
            <ExperienceTotalBox>
              <RightImgBox2>
                <CarouselTotalBox
                  id="ExperienceBarbeque"
                  className="carousel slide carousel-fade"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <LeftImg
                        src={barbeque1}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <LeftImg
                        src={barbeque2}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <LeftImg
                        src={barbeque3}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#ExperienceBarbeque"
                    data-bs-slide="prev"
                  >
                    <span
                      class="fa-solid fa-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#ExperienceBarbeque"
                    data-bs-slide="next"
                  >
                    <span
                      class="fa-solid fa-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </CarouselTotalBox>
              </RightImgBox2>
              <LeftImgBox style={{ justifyContent: "flex-end" }}>
                <InfoBox>
                  <InfoTitle style={{ textAlign: "right" }}>바베큐</InfoTitle>
                  <InfoDetail>
                    우도기행의 테라스에서 이용 가능한 바베큐입니다. 시설은 가족,
                    친구와 함께 즐기기에 최적화되어 있습니다.
                  </InfoDetail>
                  <InfoDetail style={{ padding: "12px 0px" }}>
                    웨버 가스 그릴은 편리하고 간편한 조작으로 최고의 맛과 향을
                    제공합니다. 신선한 재료와 바베큐의 조합은 즐거운 모임과
                    맛있는 음식을 만들어낼 수 있습니다.
                  </InfoDetail>
                </InfoBox>
              </LeftImgBox>
            </ExperienceTotalBox>
          </ExperienceOuterBox>
          <Footer />
        </TotalBox>
      )}
      {isMobile && (
        <TotalBox>
          <Title>스테이에서의 경험들</Title>
          <ExperienceOuterBox>
            <OrderList>
              <InfoNumber>#01</InfoNumber>
            </OrderList>
            <ExperienceTotalBox>
              <LeftImgBox>
                <InfoBox>
                  <InfoTitle>자쿠지</InfoTitle>
                  <InfoDetail>
                    우도기행에서 제공하는 자쿠지는 몸과 마음을 휴식시킬 수 있는
                    특별한 공간입니다. 따뜻한 물에 몸을 담그며 스트레스와 피로를
                    푸는 동시에, 목욕 효과에 의해 피부도 부드러워집니다.
                  </InfoDetail>
                  <InfoDetail style={{ padding: "12px 0px" }}>
                    자연 속에서 느껴지는 평온과 안정은 여행 중의 여유로움을 한층
                    높여줍니다.
                  </InfoDetail>
                </InfoBox>
              </LeftImgBox>
              <RightImgBox>
                <CarouselTotalBox
                  id="ExperiencePool"
                  className="carousel slide carousel-fade"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <LeftImg src={pool1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={pool2} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#ExperiencePool"
                    data-bs-slide="prev"
                  >
                    <span
                      class="fa-solid fa-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#ExperiencePool"
                    data-bs-slide="next"
                  >
                    <span
                      class="fa-solid fa-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </CarouselTotalBox>
              </RightImgBox>
            </ExperienceTotalBox>
          </ExperienceOuterBox>
          <ExperienceOuterBox>
            <OrderList style={{ textAlign: "right" }}>
              <InfoNumber>#02</InfoNumber>
            </OrderList>
            <ExperienceTotalBox>
              <LeftImgBox style={{ justifyContent: "flex-end" }}>
                <InfoBox>
                  <InfoTitle style={{ textAlign: "right" }}>턴테이블</InfoTitle>
                  <InfoDetail>
                    우도기행의 턴테이블은 LP판과 함께 음악을 즐길 수 있습니다..
                    오래된 팝송과 재즈의 따뜻한 음색을 품은 LP판들은 특별한
                    음악을 새롭게 경험할 수 만들어 줍니다.
                  </InfoDetail>
                  <InfoDetail style={{ padding: "12px 0px" }}>
                    LP판 컬렉션은 계속해서 확장되고 있어, 다양한 장르와
                    아티스트를 만나는 즐거움을 누릴 수 있습니다.
                  </InfoDetail>
                </InfoBox>
              </LeftImgBox>
              <RightImgBox2>
                <CarouselTotalBox
                  id="ExperienceTurn"
                  className="carousel slide carousel-fade"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <LeftImg src={turn1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={turn2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={turn3} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#ExperienceTurn"
                    data-bs-slide="prev"
                  >
                    <span
                      class="fa-solid fa-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#ExperienceTurn"
                    data-bs-slide="next"
                  >
                    <span
                      class="fa-solid fa-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </CarouselTotalBox>
              </RightImgBox2>
            </ExperienceTotalBox>
          </ExperienceOuterBox>
          <ExperienceOuterBox>
            <OrderList>
              <InfoNumber>#03</InfoNumber>
            </OrderList>
            <ExperienceTotalBox>
              <LeftImgBox>
                <InfoBox>
                  <InfoTitle>빔 프로젝트</InfoTitle>
                  <InfoDetail>
                    빔 프로젝터를 통해 영화를 즐기실 수 있습니다.
                  </InfoDetail>
                  <InfoDetail style={{ padding: "12px 0px" }}>
                    뛰어난 화질과 스피커의 풍부한 음향으로 영화관에서와 같은
                    감동을 느낄 수 있습니다.
                  </InfoDetail>
                </InfoBox>
              </LeftImgBox>
              <RightImgBox>
                <CarouselTotalBox
                  id="ExperienceBeam"
                  className="carousel slide carousel-fade"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <LeftImg src={beam1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={beam2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <LeftImg src={beam3} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#ExperienceBeam"
                    data-bs-slide="prev"
                  >
                    <span
                      class="fa-solid fa-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#ExperienceBeam"
                    data-bs-slide="next"
                  >
                    <span
                      class="fa-solid fa-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </CarouselTotalBox>
              </RightImgBox>
            </ExperienceTotalBox>
          </ExperienceOuterBox>
          <ExperienceOuterBox>
            <OrderList style={{ textAlign: "right" }}>
              <InfoNumber>#04</InfoNumber>
            </OrderList>
            <ExperienceTotalBox>
              <LeftImgBox style={{ justifyContent: "flex-end" }}>
                <InfoBox>
                  <InfoTitle style={{ textAlign: "right" }}>바베큐</InfoTitle>
                  <InfoDetail>
                    우도기행의 테라스에서 이용 가능한 바베큐입니다. 시설은 가족,
                    친구와 함께 즐기기에 최적화되어 있습니다.
                  </InfoDetail>
                  <InfoDetail style={{ padding: "12px 0px" }}>
                    웨버 가스 그릴은 편리하고 간편한 조작으로 최고의 맛과 향을
                    제공합니다. 신선한 재료와 바베큐의 조합은 즐거운 모임과
                    맛있는 음식을 만들어낼 수 있습니다.
                  </InfoDetail>
                </InfoBox>
              </LeftImgBox>
              <RightImgBox2>
                <CarouselTotalBox
                  id="ExperienceBarbeque"
                  className="carousel slide carousel-fade"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <LeftImg
                        src={barbeque1}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <LeftImg
                        src={barbeque2}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <LeftImg
                        src={barbeque3}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#ExperienceBarbeque"
                    data-bs-slide="prev"
                  >
                    <span
                      class="fa-solid fa-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#ExperienceBarbeque"
                    data-bs-slide="next"
                  >
                    <span
                      class="fa-solid fa-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </CarouselTotalBox>
              </RightImgBox2>
            </ExperienceTotalBox>
          </ExperienceOuterBox>
          <Footer />
        </TotalBox>
      )}
    </>
  );
}
export default Experience;
