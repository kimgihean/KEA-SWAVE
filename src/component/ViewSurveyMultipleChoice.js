import React, { useState,useContext } from 'react';
import { surveyListContext } from "./Survey";
import { anwserListContext } from './Survey';

function ViewSurveyMultipleChoice(props) {
    const [anwser, setAnwser] = useState(0);
    const [surveyList, setSurveyList] = useContext(surveyListContext);
    const [anwserList, setAnwserList] = useContext(anwserListContext);

    const handleOnChange = (e) => {
        setAnwser(parseInt(e.target.value));
        setAnwserList((prev) => {
            return prev.map((anwser) => {
                if (anwser.id === props.index) {
                    return {
                        ...anwser,
                        content: parseInt(e.target.value)
                    }
                } else {
                    return anwser;
                }
            });
        });
        console.log(anwserList);
    };



    const RadioButton = ({ label, value, checked ,onChange }) => {
        return (
            <label className="radio_container">
                <input className="radio" type="radio" value={value} checked={checked} onChange={onChange} />
                <div className="label_container">{label}</div>
            </label>
        );
    };

    return (
        <div className="survey_container" style={{padding:"20px",marginBottom:"30px"}}>
            <h1 style={{textAlign:"left"}}>{surveyList[props.index].content.title} </h1>
            {surveyList[props.index].content.content.map((option, index)=>{
                return(
                    <RadioButton key={index} label={option.content} value={index} checked={anwser === index} onChange={(e) => handleOnChange(e)}/>
                )})
            }
        </div>
    );
}

export default ViewSurveyMultipleChoice;