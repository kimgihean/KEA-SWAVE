import React, { useContext, useEffect } from 'react';
import { surveyListContext } from "./Survey";
import { anwserListContext } from './Survey';

function ViewSureveyQuestion(props) {
    const [surveyList, setSurveyList] = useContext(surveyListContext);
    const [anwserList, setAnwserList] = useContext(anwserListContext);

    function handleOnChange(e) {
        e.preventDefault();
        setAnwserList((prev) => {
            return prev.map((anwser) => {
                if (anwser.id === props.index) {
                    return {
                        ...anwser,
                        content: e.target.value
                    }
                } else {
                    return anwser;
                }
            });
        });
        console.log(anwserList);
    }

    return (
        <div className="survey_container" style={{ padding: "20px", marginBottom: "30px" }}>
            <h1 style={{ textAlign: "left" }}>{surveyList[props.index].content.title} </h1>
            <div className="small_button_container" style={{ marginTop: "20px", fontSize: "20px" }}>
                <input placeholder="답변을 입력해 주세요" onChange={(e) => handleOnChange(e)} className='survey_input'></input>
            </div>
        </div>
    );
}

export default ViewSureveyQuestion;