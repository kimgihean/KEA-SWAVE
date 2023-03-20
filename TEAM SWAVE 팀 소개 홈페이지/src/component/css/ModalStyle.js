import styled, { css, keyframes } from "styled-components";

const moveAnimation = keyframes`
    0% {
        transform: translateY(-150px) scale(calc(0.37));
    } 75% {
        transform: translateY(10px) scale(1.03);
    } 100%{
        transform: scale(1) translateY(0px);
    }
`;

export const ModalBackground = styled.div`
  position: absolute;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 1s;
  transform-origin: center;
  ${(props) =>
    props.modalon === "false"
      ? css`
          display: none;
          background: rgba(0, 0, 0, 0);
        `
      : css`
          background: rgba(0, 0, 0, 0);
          backdrop-filter: blur(5px);
        `}
`;

export const ModalBox = styled.div`
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  z-index: 5;
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 12px;
  align-items: flex-start;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    width: auto;
    height: auto;
  }
  ${(props) =>
    props.modalon === "false"
      ? css``
      : css`
          transform-origin: center;
          animation: ${moveAnimation} 0.6s ease-in-out;
        `}
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 22px;
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
`;
