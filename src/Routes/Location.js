import React, { useEffect } from "react";
import styled from "styled-components";

const TotalBox = styled.div`
  position: absolute;
  z-index: -1;
  margin-top: 175px;
  margin-left: 38%;
  margin-right: 12%;
  height: auto;
  min-height: 100%;
  padding-bottom: 200px;
  /* background-color: wheat; */
`;
const LocationBox = styled.div`
  margin-top: 48px;
`;
const LocationH1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const AddressKor = styled.p`
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 8px;
`;
const AddressEng = styled.span`
  font-size: 13px;
  opacity: 0.7;
`;
const AddressBox = styled.div`
  margin: 24px 0;
`;
const MapContainer = styled.div`
  position: absolute;
  height: 400px;
  width: 800px;
`;
function Location() {
  useEffect(() => {
    // 카카오 지도 API 스크립트 동적으로 추가
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=8cf69e5c83fc723e16ef4ecd1f9d241f&autoload=false";
    document.head.appendChild(script);

    // 스크립트 로드 완료 시 카카오 지도 초기화
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.5012, 126.9537),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(33.5012, 126.9537),
        });
        marker.setMap(map);

        const infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="padding:10px; font-size:13px;">제주 제주시 우도면 우도해안길 816 뒷집 2층</div>',
        });
        infowindow.open(map, marker);
      });
    };

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <TotalBox>
        <LocationBox>
          <LocationH1>Location</LocationH1>
          <AddressBox>
            <AddressKor>
              제주 제주시 우도면 우도해안길 816 뒷집 2층(연평리 1290-2)
            </AddressKor>
            <AddressEng>
              816, Udohaean-gil, Udo-myeon, Jeju-si, Jeju-do, Republic of Korea
            </AddressEng>
          </AddressBox>
          <MapContainer id="map"></MapContainer>
        </LocationBox>
      </TotalBox>
    </>
  );
}
export default Location;
