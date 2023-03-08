import React, { useState, useEffect } from "react";

import teamPic from "../images/2.jpg";
import teamLogo from "../images/1.png";

const Vision = () =>{

    
  const [logoImage, setLogoImage] = useState(teamLogo);

  const [teamImage, setTeamImage] = useState(teamPic);

    return (
        <div style={{display:"flex" , alignItems:"center", flexDirection:"column"}}>
   
            <img src={teamImage}/>
            <div ></div>
            <h1 style={{whiteSpace: "pre-line", textAlign:"center"}}>{" Our Vision \n Make a brave new wave to world \n It means, with result of our project, it will affect with grown us by project, so eventually make a big, brave new wave to field."   }</h1>
        </div>  
    );
};

export default Vision;
