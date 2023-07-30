import styled, { keyframes } from "styled-components";
import React from "react";

import Footer from "../Components/Footer";

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
  padding-bottom: 200px;
  ${(props) => props.theme.mobile`
        animation: ${fadeInAnimation} 0.5s ease-in;
        z-index: 1;
        min-height: 100%;
        padding: 0px 14px;
        position: relative;
        margin : 0;
        width:100%;
  `}/* background-color: wheat; */
`;
const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
  ${(props) => props.theme.mobile`
    padding: 24px 0 0 0 ;
    margin: 0;
`}
`;
const PlaceFlexBox = styled.div`
  width: 130%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  ${(props) => props.theme.mobile`
  flex-direction: column;  
  width: 100%;
  margin-bottom: 18px;
`}
`;
const MapBox = styled.div`
  margin-top: 24px;
  width: 100%;
`;
const PlaceInfo = styled.p`
  text-align: justify;
  line-height: 30px;
  font-size: 15px;
  ${(props) => props.theme.mobile`
    font-size: 12px;
    line-height: 24px;
`}
`;
const PlaceInfoBox = styled.div`
  width: 100%;
  padding-right: 12px;
`;
const PlaceTitle = styled.h1`
  padding: 22px 0px 12px 0px;
  font-style: italic;
  ${(props) => props.theme.mobile`
    padding-top: 24px;
`}
`;
const PlaceDistance = styled.span`
  padding: 6px 0px 12px 0px;
  font-size: 14px;
  opacity: 0.9;
  display: block;
`;

const PlaceTotalBox = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:last-child {
    border: none;
    padding-bottom: 150px;
  }
  ${(props) => props.theme.mobile`
    margin-bottom: 0;
`}
`;
const KaKaoImg = styled.img`
  ${(props) => props.theme.mobile`
  width: 100%;
  height: 100%;  
    `}
`;
function Places() {
  return (
    <>
      <TotalBox>
        <Title>숙소 주변 관광지</Title>
        <PlaceTotalBox>
          <PlaceFlexBox>
            <PlaceInfoBox>
              <PlaceTitle>검멀레 해수욕장</PlaceTitle>
              <PlaceDistance>도보 30분, 차량 5~10분 가량</PlaceDistance>
              <PlaceInfo>
                우도의 웅장한 자연입니다. 절벽이 너무 아름다운 곳으로 여름에는
                이곳에서 보트도 즐길 수 있습니다. 절벽 아래쪽은 검은 모래 해변이
                자리 잡고있는 우도의 대표적인 명소입니다. 10월 말에는 동굴에서
                음악회도 열리니 기회가 되신다면 한번쯤 꼭 방문해주세요!
              </PlaceInfo>
            </PlaceInfoBox>
            <MapBox>
              <a
                href="https://map.kakao.com/?urlX=492310&urlY=977&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KaKaoImg
                  width="350"
                  height="220"
                  src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=492310&MY=977&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
                  style={{ border: "1px solid #ccc" }}
                  alt="카카오맵"
                />
              </a>
            </MapBox>
          </PlaceFlexBox>
        </PlaceTotalBox>
        <PlaceTotalBox>
          <PlaceFlexBox>
            <PlaceInfoBox>
              <PlaceTitle>비양도</PlaceTitle>
              <PlaceDistance>도보 20분, 차량 5분 가량</PlaceDistance>
              <PlaceInfo>
                방송과 여러 플랫폼으로 많이 알려진 섬속의 섬 비양도입니다.
                방송에서는 일몰 명소로 알려져 있지만 사실 이 곳은 일출
                명소랍니다. 날이 맑을 땐 일출을 꼭 한 번 보시는 걸 추천드립니다!
                물이 차오르는 만조일 때는 등대로 가는 다리가 잠겨 출입이
                힘들수도 있습니다. 참고해서 방문해주세요!
              </PlaceInfo>
            </PlaceInfoBox>
            <MapBox>
              <a
                href="https://map.kakao.com/?urlX=492687&urlY=5687&urlLevel=4&map_type=TYPE_MAP&map_hybrid=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KaKaoImg
                  width="350"
                  height="220"
                  src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=5&MX=492687&MY=5687&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
                  style={{ border: "1px solid #ccc" }}
                  alt="카카오맵"
                />
              </a>
            </MapBox>
          </PlaceFlexBox>
        </PlaceTotalBox>
        <PlaceTotalBox>
          <PlaceFlexBox>
            <PlaceInfoBox>
              <PlaceTitle>산호해변(서빈백사)</PlaceTitle>
              <PlaceDistance>도보 30분, 차량 5~10분 가량</PlaceDistance>
              <PlaceInfo>
                홍조단괴로 이루어진 해변입니다. 이 곳은 비양도와 다르게 일몰
                명소입니다! 저희 스테이에서 정반대에 위치해 있지만 해 질 때 쯤
                가셔서 일몰을 즐겨봐도 좋을 것 같습니다.
              </PlaceInfo>
            </PlaceInfoBox>
            <MapBox>
              <a
                href="https://map.kakao.com/?urlX=486770&urlY=2430&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KaKaoImg
                  width="350"
                  height="220"
                  src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=486770&MY=2430&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
                  style={{ border: "1px solid #ccc" }}
                  alt="카카오맵"
                />
              </a>
            </MapBox>
          </PlaceFlexBox>
        </PlaceTotalBox>
        <PlaceTotalBox>
          <PlaceFlexBox>
            <PlaceInfoBox>
              <PlaceTitle>하고수동 해수욕장</PlaceTitle>
              <PlaceDistance>도보 3분</PlaceDistance>
              <PlaceInfo>
                저희 스테이 바로 앞에 위치한 해수욕정입니다. 산호해변과는 다르게
                모래가 곱고 수심이 완만하게 낮아지기 때문에 아이들이 놀기에도
                적합한 해수욕장입니다. 여름에 오셔서 해수욕을 즐겨보시길
                추천드리는 곳입니다.
              </PlaceInfo>
            </PlaceInfoBox>
            <MapBox>
              <a
                href="https://map.kakao.com/?urlX=490137&urlY=5572&urlLevel=2&map_type=TYPE_MAP&map_hybrid=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KaKaoImg
                  width="350"
                  height="220"
                  src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=1.25&MX=490137&MY=5572&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
                  style={{ border: "1px solid #ccc" }}
                  alt="카카오맵"
                />
              </a>
            </MapBox>
          </PlaceFlexBox>
        </PlaceTotalBox>
        <PlaceTotalBox>
          <PlaceFlexBox>
            <PlaceInfoBox>
              <PlaceTitle>톨칸이</PlaceTitle>
              <PlaceDistance>도보 40~50분, 차량 10분 가량</PlaceDistance>
              <PlaceInfo>
                톨칸이는 검멀레의 반대편입니다. 톨칸이의 절벽은 개인적으로
                제주도에서도 손에 꼽는 자연이라고 생각됩니다. 비가 많이 오는
                날에는 비와사라는 폭도 생기는 매력적인 곳입니다.
              </PlaceInfo>
            </PlaceInfoBox>
            <MapBox>
              <a
                href="https://map.kakao.com/?urlX=490171&urlY=-357&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KaKaoImg
                  width="350"
                  height="220"
                  src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=490171&MY=-357&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
                  style={{ border: "1px solid #ccc" }}
                  alt="카카오맵"
                />
              </a>
            </MapBox>
          </PlaceFlexBox>
        </PlaceTotalBox>
        <Footer />
      </TotalBox>
    </>
  );
}
export default Places;
