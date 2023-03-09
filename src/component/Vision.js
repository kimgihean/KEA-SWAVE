import React, { useEffect, useRef, useState } from "react";
import logo from '../image/logo_black.png';
import {
  FirstContainer,
  Title,
  SubTitle,
  TitleContainer,
  Img,
  SecondContainer, Element, Title2
} from "./css/VisionStyle";

import Modal from "./Modal";
import classes from "./css/global.css";

import {
  GiDatabase,
  GiWaveSurfer,
  GiChatBubble,
} from "react-icons/gi";

import {
  GrSystem,
} from "react-icons/gr";

import {
  MdColorLens,
} from "react-icons/md";
// import items from "./Data/Contents.json";

// Hooks
import { disableScroll, enableScroll } from "./Hooks/ScrollPrevent";

const Vision = () => {
  const items = [
    {
      "index": 1,
      "title": "파도",
      "text": "파도는 바다나 호수, 강 등에서 바람에 의해 이는 물결을 뜻한다. 이처럼 카카오 SW 아카데미를 수강하면서 어려운 역경이 닥쳐와도 이겨내어 성장하여서 파도를 일으켜 세상을 변화 시키자는 뜻이다."
    },
    {
      "index": 2,
      "title": "파도의 색깔",
      "text": "가천대의 교색인 파랑색과 하늘색을 상징A.	가천대의 교색인 코발트 블루, 오렌지, 밝은 녹색, 밝은 파란색 중 파도의 색깔을 뜻하는 코발트 블루와 밝은 파란색을 사용하여 로고를 만들었다."
    },
    {
      "index": 3,
      "title": "데이터관리기술",
      "text": "클라우드 데이터베이스의 트랜드와 이해"
    },
    {
      "index": 4,
      "title": "차세대 챗봇",
      "text": "Frontend와 Backend의 결합을 통한 실무 프로젝트 진행"
    },
    {
      "index": 5,
      "title": "시스템아키텍처",
      "text": "어프릴케이션, 서버, 데이터베이스간의 최적의 퍼포먼스를 위한 구조 설계"
    }
  ]
  const [modalOn, setModalOn] = useState("false");
  const [onMouse, setOnMouse] = useState("false");
  const [item, setItem] = useState();

  // Scroll Prevent
  useEffect(() => {
    if (modalOn === "true") disableScroll();
    else enableScroll();
  }, [modalOn]);


  const setModal = (index) => {
    setModalOn("true");
    setItem(index);
  };

  return (
    <div className={classes.Vision}>
      <Modal
        item={items[item]}
        modalOn={modalOn}
        setModalOn={setModalOn}
      />

      <FirstContainer>
        <TitleContainer>
          <Title
            onmouse={onMouse}
            onMouseEnter={() => setOnMouse("true")}
            onMouseLeave={() => setOnMouse("false")}
          >
            SWAVE
          </Title>
          <SubTitle onmouse={onMouse}>SoftWare로 세상에 파도를 일으키자</SubTitle>
        </TitleContainer>
      </FirstContainer>

      <SecondContainer>
        <Element onClick={() => setModal(0)}>
          <GiWaveSurfer />
          <Title2>{items[0].title}</Title2>
        </Element>
        <Element onClick={() => setModal(1)}>
          <MdColorLens />
          <Title2>{items[1].title}</Title2>
        </Element>
        <Element onClick={() => setModal(2)}>
          <GiDatabase />
          <Title2>{items[2].title}</Title2>
        </Element>
        <Element onClick={() => setModal(3)}>
          <GiChatBubble />
          <Title2>{items[3].title}</Title2>
        </Element>
        <Element onClick={() => setModal(4)}>
          <GrSystem />
          <Title2>{items[4].title}</Title2>
        </Element>
      </SecondContainer>

    </div>
  );
};

export default Vision;
