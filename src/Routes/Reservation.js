import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 32px;
  ${(props) => props.theme.mobile`
  padding:24px 0;
  margin:0;  
`}
`;
const HeadTitle = styled.div`
  display: flex;
`;

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
  margin-left: 38%;
  margin-right: 12%;
  height: auto;
  min-height: 100%;
  padding-bottom: 200px;
  width: 50%;
  ${(props) => props.theme.mobile`
        animation: ${fadeInAnimation} 0.5s ease-in;
        z-index: 1;
        min-height: 100%;
        padding: 0px 14px;
        position: relative;
        margin : 0;
        width:100%;
  `}
`;
const ToggleBtn = styled.a`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  opacity: 1;
  display: block;
  padding: 12px 0px;
  ${(props) => props.theme.mobile`
    font-size:15px;
`}
`;
const AgreeTitle = styled.span`
  display: block;
  margin: 8px 0px 6px 12px;
  font-size: 15px;
  opacity: 1;
  margin-top: 24px;
  ${(props) => props.theme.mobile`
  font-size:13px;  
  margin-left:2px;
`}
`;
const ToggleCardBox = styled.div`
  background-color: rgba(0, 0, 0, 0);
  padding: 24px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  & ${AgreeTitle}:first-child {
    margin-top: 6px;
  }
`;
const ToggleTotalBox = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
`;
const ToggleIcon = styled(motion.i)`
  opacity: 1;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Icon styles */
  transform-origin: center; /* 중심을 기준으로 회전 */
`;

const AgreeInfo = styled.p`
  margin-left: 16px;
  font-size: 14px;
  padding: 4px 0px;
  opacity: 0.9;
  ${(props) => props.theme.mobile`
  font-size:12px;  
  line-height: 22px;
  margin-left: 4px;
`}
`;
const CheckboxContainer = styled.div`
  margin: 48px 0px 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: "#F3D6C6";
  /* background: ${(props) => (props.checked ? "#F3D6C6" : "papayawhip")}; */
  border-radius: 3px;
  border: 1px solid gray;
  margin-right: 8px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  ${(props) => props.theme.mobile`
    font-size:13px;
`}
`;
const CheckMark = styled.i`
  font-size: 12px;
  opacity: 1;
`;
const ReservationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReservationBtn = styled.button`
  border: none;
  padding: 12px 6px;
  background-color: rgba(233, 232, 230, 255);
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: rgba(200, 199, 197, 255); /* Removed quotation marks */
  }
  ${(props) => props.theme.mobile`
  font-size:13px;  
`}
`;
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 120%);
  height: 150px;
`;
const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AgreeTable = styled.table`
  width: 50%;
  text-align: center;
  ${(props) => props.theme.mobile`
    margin-top:6px;
    width: 80%;
    
`}
`;
const AgreeTr = styled.tr``;
const AgreeTd = styled.td`
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 14px;
  padding: 4px;
  ${(props) => props.theme.mobile`
    font-size: 13px;
`}
`;
const AgreeRefundBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Reservation() {
  const [firstBox, setFirstBox] = useState(false);
  const [secondBox, setSecondBox] = useState(false);
  const [thirdBox, setThirdBox] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const FirstOnClick = () => {
    if (!isAnimating) {
      // 애니메이션 진행 중이 아닐 때만 클릭 이벤트 처리
      setIsAnimating(true); // 애니메이션 진행 상태로 변경
      setFirstBox((prev) => !prev);
    }
  };
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 350); // 애니메이션의 지속 시간과 동일한 시간으로 설정

    return () => clearTimeout(animationTimeout);
  }, [firstBox]);

  const SecondOnClick = () => {
    if (!isAnimating) {
      // 애니메이션 진행 중이 아닐 때만 클릭 이벤트 처리
      setIsAnimating(true); // 애니메이션 진행 상태로 변경
      setSecondBox((prev) => !prev);
    }
  };
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 350); // 애니메이션의 지속 시간과 동일한 시간으로 설정

    return () => clearTimeout(animationTimeout);
  }, [secondBox]);

  const ThirdOnClick = () => {
    if (!isAnimating) {
      // 애니메이션 진행 중이 아닐 때만 클릭 이벤트 처리
      setIsAnimating(true); // 애니메이션 진행 상태로 변경
      setThirdBox((prev) => !prev);
    }
  };
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 350); // 애니메이션의 지속 시간과 동일한 시간으로 설정
    return () => clearTimeout(animationTimeout);
  }, [thirdBox]);

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleButtonClick = () => {
    if (!isChecked) {
    } else {
      window.open(
        "https://map.naver.com/v5/entry/place/1405584950?lng=126.9577602&lat=33.5131314&placePath=%2Froom%3Fac=0%26adm_lat=33.5203991%26adm_long=126.5654278%26bizId=1405584950%26debug=0%26deviceType=pc%26lgl_lat=33.5191224%26lgl_long=126.5645173%26lgl_rcode=14110111%26ngn_country=KR%26nlu_query=%7B%22pension%22:%7B%22source%22:%22semantic_learning%22,%22sid%22:%221405584950%22,%22q%22:%22%EC%9A%B0%EB%8F%84%EA%B8%B0%ED%96%89%22%7D,%22nluQuery%22:%22%EC%9A%B0%EB%8F%84%EA%B8%B0%ED%96%89%22%7D%26nqx_theme=%7B%22theme%22:%7B%22main%22:%7B%22name%22:%22accommodation%22%7D%7D%7D%26r1=%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%26r2=%EC%A0%9C%EC%A3%BC%EC%8B%9C%26r3=%ED%99%94%EB%B6%81%EB%8F%99%26rcode=14110600%26rev=44%26sm=top_hty%26spq=0%26ssc=tab.nx.all%26target=pc%26where=nexearch%26x=126.5654278%26y=33.5203991&entry=plt&c=15,0,0,0,dh",
        "_blank"
      );
    }
  };

  return (
    <>
      <TotalBox>
        <Title>예약하기</Title>
        <ToggleTotalBox>
          <HeadTitle
            onClick={FirstOnClick}
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <ToggleBtn>[예약 전 안내사항]</ToggleBtn>
            <ToggleIcon
              className="fa-solid fa-chevron-left"
              animate={{ rotate: firstBox ? -90 : 0 }} // 회전 애니메이션 추가
              transition={{ duration: 0.3 }} // 애니메이션 지속 시간 설정
            />
          </HeadTitle>
          <div class="collapse" id="collapseExample1">
            <ToggleCardBox class="card card-body">
              <AgreeTitle>[인원규정]</AgreeTitle>
              <AgreeInfo>
                - 예약 인원 초과 입실 및 방문자 출입은 불가합니다. 위반시
                환불없이 퇴실 조치됨을 알려드립니다.
              </AgreeInfo>
              <AgreeTitle>[기타이용]</AgreeTitle>
              <AgreeInfo>
                - 2인 기준 숙소로 3인 예약시 추가비용(2만 5천원)있습니다.
              </AgreeInfo>
              <AgreeInfo>
                -미리 요청주시면 야외 바베큐 가능 합니다(추가비용3만원)
              </AgreeInfo>
              <AgreeTitle>[기타 주의사항]</AgreeTitle>
              <AgreeInfo>
                - 변기에 화장실 휴지 외에는 물티슈, 키친타올, 솜 음식물쓰레기,
                여성위생용품을 버리시면 안됩니다.{" "}
              </AgreeInfo>
              <AgreeInfo>
                - 반려동물 동반 숙박을 금하고 있습니다. (확인 시, 퇴실사유가
                됩니다/ 환불불가)
              </AgreeInfo>
            </ToggleCardBox>
          </div>
        </ToggleTotalBox>
        <ToggleTotalBox>
          <HeadTitle
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={SecondOnClick}
          >
            <ToggleBtn>[객실 이용 안내사항]</ToggleBtn>
            <ToggleIcon
              className="fa-solid fa-chevron-left"
              animate={{ rotate: secondBox ? -90 : 0 }} // 회전 애니메이션 추가
              transition={{ duration: 0.3 }} // 애니메이션 지속 시간 설정
            />
          </HeadTitle>
          <div class="collapse" id="collapseExample2">
            <ToggleCardBox class="card card-body">
              <AgreeTitle>[주방사용]</AgreeTitle>
              <AgreeInfo>- 실내에서 간단한 취사가 가능합니다. </AgreeInfo>
              <AgreeInfo>
                - 다음 숙박객의 편의를 위해 음식을 하시는 경우, 환기를 충분히
                시켜주시길 부탁드립니다.
              </AgreeInfo>
              <AgreeInfo> - 조미료는 제공되지 않습니다.</AgreeInfo>
              <AgreeTitle>[금연안내]</AgreeTitle>
              <AgreeInfo>
                - 객실 내 모든 구역은 금연입니다. 이산화탄소 감지 센서가
                설치되어 있으므로 반드시 외부에서 흡연해주세요.
              </AgreeInfo>
              <AgreeInfo>
                - 실내 흡연 적발 시 , 이틀 치의 숙박요금과 전문 클리닝 비용이
                추가로 발생합니다.
              </AgreeInfo>
            </ToggleCardBox>
          </div>
        </ToggleTotalBox>
        <ToggleTotalBox>
          <HeadTitle
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={ThirdOnClick}
          >
            <ToggleBtn>[요금 안내 및 예약, 취소, 환불 규정]</ToggleBtn>
            <ToggleIcon
              className="fa-solid fa-chevron-left"
              animate={{ rotate: thirdBox ? -90 : 0 }} // 회전 애니메이션 추가
              transition={{ duration: 0.3 }} // 애니메이션 지속 시간 설정
            />
          </HeadTitle>
          <div class="collapse" id="collapseExample3">
            <ToggleCardBox class="card card-body">
              <AgreeTitle>[환불 규정]</AgreeTitle>
              <AgreeInfo>
                -환불 시 아래 기준일에 따른 환불 금액을 드립니다.{" "}
              </AgreeInfo>
              <AgreeInfo>
                -환불액은 입금자와 동일한 명의의 계좌로 이체해 드립니다.
              </AgreeInfo>
              <AgreeInfo>
                -투숙 기준일로부터 이용 5일 전, 예약 변경 및 환불 불가능 합니다.{" "}
              </AgreeInfo>
              <AgreeInfo>
                -개인적인 사정 및 예약 날짜 착오로 인한 노쇼는 환불 불가능
                합니다.{" "}
              </AgreeInfo>
              <AgreeInfo>
                -예약 입실 당일, 천재지변에 의한 비행기/배 결항 시 전액
                환불해드립니다.{" "}
              </AgreeInfo>
              <AgreeInfo>
                -기상청 예보로 인한 날짜 변경은 불가하며, 그 외 취소 사유에
                대해서는 아래 환불 규정에 따라 처리됩니다.{" "}
              </AgreeInfo>
              <AgreeInfo>
                - 날짜변경은 여행일정이 30일이 남은 상태에서, 변경요청
                가능합니다.
              </AgreeInfo>
              <AgreeInfo>
                - 이후, 예약변경은 취소이후 진행되므로, 취소/환불규정과 같은
                조건으로 적용됩니다.
              </AgreeInfo>
              <AgreeInfo>
                -배 결항으로 인해 입실이 불가능할 땐 전액환불 가능합니다.
              </AgreeInfo>
              <AgreeTitle>[환불금]</AgreeTitle>
              <AgreeRefundBox>
                <AgreeTable>
                  <AgreeTr>
                    <AgreeTd> 이용 11일 전</AgreeTd>
                    <AgreeTd> 100% 환불 </AgreeTd>
                  </AgreeTr>
                  <AgreeTr>
                    <AgreeTd>이용 10-6일 전</AgreeTd>
                    <AgreeTd>총 결재 금액의 30% 환불</AgreeTd>
                  </AgreeTr>
                  <AgreeTr>
                    <AgreeTd> 이용 5일 전</AgreeTd>
                    <AgreeTd>예약 변경/환불 불가</AgreeTd>
                  </AgreeTr>
                </AgreeTable>
              </AgreeRefundBox>
              <AgreeTitle>[수수료]</AgreeTitle>
              <AgreeInfo>
                -취소수수료는 예약 시점 24시간이내에는 적용되지 않습니다.
              </AgreeInfo>{" "}
              <AgreeInfo>
                -24시간이후에는 취소수수료가 적용되오니 신중하게 예약해주시면
                감사하겠습니다.
              </AgreeInfo>
              <AgreeInfo>
                -예약변경을 위한 취소 시에도 취소 수수료가 부과됩니다.
                참고바라겠습니다.
              </AgreeInfo>
            </ToggleCardBox>
          </div>
        </ToggleTotalBox>
        <CheckboxContainer>
          <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
          <StyledCheckbox onClick={handleCheckboxChange} checked={isChecked}>
            {isChecked ? (
              <CheckMark className="fa-solid fa-check"></CheckMark>
            ) : null}
          </StyledCheckbox>
          <CheckboxLabel onClick={handleCheckboxChange}>
            이용약관을 모두 읽고 동의합니다.
          </CheckboxLabel>
        </CheckboxContainer>
        <ReservationBox>
          {isChecked ? (
            <ReservationBtn onClick={handleButtonClick}>
              네이버 예약
            </ReservationBtn>
          ) : (
            <ReservationBtn
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              네이버 예약
            </ReservationBtn>
          )}
        </ReservationBox>
        <Footer />
      </TotalBox>
      {/* 모달 박스 */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <ModalContent className="modal-content">
            <ModalBody className="modal-body">
              필수 항목을 입력해주세요!
            </ModalBody>
            <div class="modal-footer" style={{ padding: "0px" }}>
              <div
                type="button"
                data-bs-dismiss="modal"
                style={{
                  textAlign: "center",
                  width: "100%",
                  padding: "8px 4px",
                }}
              >
                확인
              </div>
            </div>
          </ModalContent>
        </div>
      </div>
    </>
  );
}
export default Reservation;
