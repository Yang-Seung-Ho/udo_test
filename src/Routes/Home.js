import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Images/logo.png";
import img1 from "../Images/main1.jpeg";
import img2 from "../Images/main2.jpeg";
import img3 from "../Images/main3.jpeg";
import img4 from "../Images/main4.jpeg";
import img5 from "../Images/main5.jpeg";
import img6 from "../Images/main6.jpeg";
import img7 from "../Images/main7.jpeg";
import img8 from "../Images/main8.jpeg";
import img9 from "../Images/main9.jpeg";
import { useState, useEffect } from "react";
const mainimages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgItems = styled(motion.ul)`
  display: flex;
  width: 60%;
`;
const ImgItem = styled(motion.li)`
  margin: 12px 12px;
`;
const ImgContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;
const Img = styled(motion.img)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  width: 100%;
  transition: transform 0.3s ease-in;

  :hover {
    transform: scale(1.15);
  }
`;

function Home() {
  const offset = 3;
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    // 이미지를 미리 로딩
    const preloadImages = () => {
      mainimages.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    preloadImages();
  }, []);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  console.log(leaving);
  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    const totalImages = mainimages.length;
    const maxIndex = Math.floor(totalImages / offset) - 1;
    setBack(false);
    setTimeout(() => {
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 100);
  };

  const decreaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    const totalImages = mainimages.length;
    const maxIndex = Math.floor(totalImages / offset) - 1;
    setBack(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }, 100);
  };

  return (
    <>
      <ImgBox>
        <span onClick={decreaseIndex}>-</span>
        <ImgItems>
          <AnimatePresence initial={false} custom={back}>
            {mainimages
              .slice(offset * index, offset * index + offset)
              .map((image, i) => (
                <ImgItem key={i}>
                  <ImgContainer key={i}>
                    <AnimatePresence onExitComplete={toggleLeaving}>
                      <Img
                        key={image}
                        src={image}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, display: "none" }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    </AnimatePresence>
                  </ImgContainer>
                </ImgItem>
              ))}
          </AnimatePresence>
        </ImgItems>
        <span onClick={increaseIndex}>+</span>
      </ImgBox>
    </>
  );
}
export default Home;
