import React, { useState, useEffect } from "react";

import teamLogo from "../images/logo.png"; 
import teamPic from "../images/2.jpg"; 
const Custom = () => { 
 
const description=" Welcome!\n Team SW Wave is making brave new wave to field! "
 
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
    {teamPic && <img src={teamPic} width="300" height="300" />}
    <h1 style={{whiteSpace: "pre-line", textAlign: "center" }}>{description}</h1>
       
    </div>
  );
};

export default Custom;