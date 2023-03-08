import React, { useState, useEffect } from "react";

import teamLogo from "../images/logo.png";
import picJGH from "../images/pic_jgh.jpg";
import picKKH from "../images/pic_kkh.jpg";
import picHGU from "../images/pic_hgu.jpg";
import picISS from "../images/pic_iss.jpg"; 
import picKJH from "../images/pic_kjh.jpg";
import picKSG from "../images/pic_jgh.jpg";
import teamPic from "../images/2.jpg";
import githubPic from "../images/github-mark.png" ;
const Teammate = () => {
  const [name, setName] = useState("red");
  const [gitLink, setGitLink] = useState("red");
  const [description, setDescription] = useState("Test");
  const [image, setImage] = useState(teamLogo);
  const [memberImage, setMemberImage] = useState(teamLogo);
 

  function changeName(value) {
    setName(value);
  }

  function updateProfile(name) {
    switch (name) {
      case "team1":   
      setMemberImage(picISS);
      setGitLink(" 123 456 78 ");
      setDescription("이승섭 \n Gachon KEA 2023 \n E-mail : tmdtjq0116@naver.com " );

      break; 
      case "team2":  
      setMemberImage(picKSG);
      setGitLink(" 123 456 78 ");
      setDescription("김성국 \n Gachon KEA 2023 \n E-mail : kjk7212@gmail.com" );

        break; 
      case "team3": // ganghoon 
        setMemberImage(picJGH);
        setGitLink(" 123 456 78 ");
        setDescription("전강훈 \n Gachon KEA 2023 \n E-mail : artisheep@naver.com" );
        break; 
      case "team4": 
      setMemberImage(picKJH);
      setGitLink(" 123 456 78 ");
      setDescription("강준희 \n Gachon KEA 2023 \n E-mail : junhee1883@naver.com " );

        break; 
      case "team5":   
      setMemberImage(picKKH);
      setGitLink(" 123 456 78 ");
      setDescription("김기현 \n Gachon KEA 2023 \n E-mail : junhee1883@naver.com " );

        break; 
      case "team6":   
      setMemberImage(picHGU);
      setGitLink(" 123 456 78 ");
      setDescription("함건욱 \n Gachon KEA 2023 \n E-mail : tomy8964@naver.com  " );

        break; 
      default: 
        setMemberImage(teamPic);
        setGitLink(null);
        setDescription("Select team member button to see description!");
        break;
    }
  }

  useEffect(() => {
    updateProfile(name);
  }, [name]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"  }}> 
    {memberImage && <img src={memberImage} width="300" height="300" />}
    <h1 style={{whiteSpace: "pre-line"}}>{description}</h1>
      
      <div>

      <a href={gitLink}>
      
      {gitLink&& <img src={githubPic} width="50" height="50" />} 
      </a> 

      </div> 
      <div style={{ display: "flex", alignItems: "center" }}>
        <button type="button" onClick={(e)=> {changeName("team1")}}>
          이승섭
        </button> 
        <button type="button" onClick={(e)=> {changeName("team2")}}>
          김성국
        </button>
        <button type="button" onClick={(e)=> {changeName("team3")}}>
          전강훈
        </button>
        <button type="button" onClick={(e)=> {changeName("team4")}}>
          강준희
        </button>
        <button type="button" onClick={(e)=> {changeName("team5")}}>
          김기현
        </button>
        <button type="button" onClick={(e)=> {changeName("team6")}}>
          함건욱
        </button> 
      </div>
      <br></br>
      <button type="button" onClick={(e)=> {changeName("def")}}>
          Team SW Wave
        </button>
    </div>
  );
};

export default Teammate;