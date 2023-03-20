import React, { useEffect, useRef, useState } from "react";
import logo from '../image/logo_black.png';
import {
  FirstContainer,
  Title,
  SubTitle,
  TitleContainer,
  Img,
  SecondContainer, Element, Title2, span
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

  const TitleColorEvent = () => {
    return(
      <>
      <span style={tick ? {color : '#00BFFF'}:{}}>S</span>
      <span style={{color : '#00BFFF'}}>W</span>
      <span style={!tick ? {color : '#00BFFF'}:{}}>AVE</span>
      </>
    );
  }

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
      "text": "CDC(Change Data Capture)와 Transformation을 통한 데이터 분석 시스템 파일럿 개발을 위한 데이터 처리 및 관리 기술의 실무 역량을 강화하는 강의입니다. 기본적으로 데이터베이스 시스템에 대하여 기본적인 사항을 알고 실제 DBMS를 사용하여 데이터 관리 역량을 키운다."
    },
    {
      "index": 4,
      "title": "차세대 챗봇",
      "text": "Frontend와 Backend의 결합을 통한 실무 프로젝트를 진행하고 클라우드 네이티브 환경의 웹 서비스를 개발한다."
    },
    {
      "index": 5,
      "title": "시스템아키텍처",
      "text": "DevOps의 개념과 인프라 여러 아키택처 패턴에 대해 학습하고 프로젝트에 적용하여 설계하며 CI/CD 컨셉과 웹 시스템 검출을 위한 아키택처를 배운다."
    }
  ]
  const [modalOn, setModalOn] = useState("false");
  const [onMouse, setOnMouse] = useState("false");
  const [tick, setTick] = useState(true);
  const [item, setItem] = useState();

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
  }

  useInterval(()=>{
    setTick((prev)=>{return !prev;});
  },2000);

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
            <TitleColorEvent/>
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
