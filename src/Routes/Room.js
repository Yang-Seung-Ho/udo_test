import styled, { keyframes } from "styled-components";

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
`;
function Room() {
  return (
    <>
      <TotalBox>
        <h1>Room</h1>
        <div>
          <div>
            <div>체크인 체크아웃</div>
            <div>객실 구성</div>
            <div>체크인 체크아웃</div>
            <div>체크인 체크아웃</div>
          </div>
          <div>
            <img></img>
          </div>
        </div>
      </TotalBox>
    </>
  );
}
export default Room;
