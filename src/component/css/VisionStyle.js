import styled, { keyframes, css } from "styled-components";

export const FirstContainer = styled.div`
  @media screen and (min-width: 1024px) {
    margin-top: 10%;
    min-height: 20vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 16px;
  }
`;

export const TitleContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 480px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    font-size: 68px;
    font-weight: 700;
    z-index: 2;
    background: rgba(255, 255, 255, 1);

    ${(props) => (props.onmouse === "true" ? css`` : css``)}
  }
`;

const down = keyframes`
  0% {
    transform: translateY(-68px);
  } 100% {
    transform: translateY(0);
  }
`;

const up = keyframes`
  0% {
    transform: translateY(0);
  } 100% {transform: translateY(-68px)}
`;

export const SubTitle = styled.div`
  font-size: 24px;
  z-index: 1;

  ${(props) =>
    props.onmouse === "true"
      ? css`
          animation: 1s ${down} ease;
        `
      : css`
          transform: translateY(-64px);
          animation: 1s ${up} ease;
        `}
`;

export const Img = styled.img`
  @media screen and (min-width: 1024px) {
    width: 480px;
    height: 400px;
  }
`;


export const SecondContainer = styled.div`
  @media screen and (min-width: 1024px) {
    min-height: 75vh;
    display: grid;
    padding: 0 50px;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 32px;
  }
`;

export const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 18px;
  padding: 40px 10px;
  border-radius: 16px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  > svg {
    font-size: 64px;
  }
  &:hover {
    background: rgba(233, 233, 233, 0.68);
  }
`;

export const Title2 = styled.div`
  font-weight: 600;
  font-size: 24px;
`;

export const Text = styled.div`
  font-weight: 400;
  color: rgb(62, 62, 62);
  font-size: 15px;
  text-align: center;
`;
