import React, { useState, useContext } from 'react';
import { surveyListContext } from "./Survey";
import { anwserListContext } from './Survey';

function ViewSurveyChoice(props) {
    const [anwser, setAnwser] = useState(true);
    const [surveyList, setSurveyList] = useContext(surveyListContext);
    const [anwserList, setAnwserList] = useContext(anwserListContext);

    const handleOnChange = (e) => {
        setAnwser(JSON.parse(e.target.value));
        setAnwserList((prev) => {
            return prev.map((anwser) => {
                if (anwser.id === props.index) {
                    return {
                        ...anwser,
                        content: JSON.parse(e.target.value)
                    }
                } else {
                    return anwser;
                }
            });
        });
        console.log(anwserList);
    };

    const RadioButton = ({ label, value, checked, onChange }) => {
        return (
            <label className="radio_container">
                <input className="radio" type="radio" value={value} checked={checked} onChange={onChange} />
                <div className="label_container" style={{ width: "20%" }}>{label}</div>
            </label>
        );
    };
    const choiceList = [{ label: "예", value: true }, { label: "아니오", value: false }]

    return (
        <div className="survey_container" style={{ padding: "20px", marginBottom: "30px" }}>
            <h1 style={{ textAlign: "left" }}>{surveyList[props.index].content.title} </h1>
            <div>
                {choiceList.map((choice,index) => {
                    return <RadioButton key={index} label={choice.label} value={choice.value} checked={choice.value === anwser} onChange={(e) => handleOnChange(e)}/>
                })}
            </div>
        </div>
    );
}

export default ViewSurveyChoice;