
import React, { useState, useEffect } from "react";
 
const Custom = () => {
  const [name, setName] = useState("red");
  const [gitLink, setGitLink] = useState("red");
  const [description, setDescription] = useState("Test"); 
  const [memberImage, setMemberImage] = useState(null);
 

  const [dayOfWeek, setDayOfWeek] = useState('');

  const [resultOfCalculation, setResult] = useState('');
  const times = [
    {id:1, name:'Data management', time: '9 to 13', alarm: 'Study Steadily'},
    {id:2, name:'Next Generation Chatbot',time: '9 to 13',alarm: 'Learn From pratice and examples'},
    {id:3, name:'System Architecture',time: '9 to 17',alarm: 'Do hard'},

    {id:4, name:'No Plan today',time: ' ',alarm: 'So repeat your study!'} 
  ];
  useEffect(() => {  
    const result = new Date().getDay(); 

    switch (result) {
      case  1: 
      case  3:
        setResult(times[0])
      break;
      case 2:
      case 4:
        setResult( times[1]);
        break;
      case 5:
        setResult(times[2]);
        break;
      default:
        setResult(times[3]);
        break;
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"  }}> 
       <h1 style={{whiteSpace: "pre-line"}}>Today's Plan for KEA is {resultOfCalculation.name} and it's time is {resultOfCalculation.time}. </h1>
       <h2>
        
        </h2> </div>
  );
};

export default Custom;