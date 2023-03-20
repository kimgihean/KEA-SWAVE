import React, { useState, useContext } from 'react';
import MultipleChoiceOption from './MultipleChoiceOption';
import { surveyListContext } from "./Survey";

function SurveyMultipleChoice(props) {
    const [surveyList, setSurveyList] = useContext(surveyListContext);
    const [choiceId, setChoiceId] = useState(surveyList[props.index].content.content[surveyList[props.index].content.content.length - 1].id + 1);

    function handleOnChange(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            return prev.map((survey) => {
                if (survey.id === props.id) {
                    return {
                        ...survey,
                        content:{
                            id: 2,
                            title: e.target.value,
                            content:survey.content.content
                        }
                    }
                } else {
                    return survey;
                }
            });
        });
        console.log(surveyList);
    }

    function handleOnClick(e) {
        e.preventDefault();
        console.log(choiceId);
        setSurveyList((prev) => {
            return prev.map((survey) => {
                if (survey.id === props.id) {
                    return {
                        id: survey.id,
                        content: { id: survey.content.id, title: survey.content.title, content: [...survey.content.content, { id: choiceId, content: "" }] }
                    };
                } else {
                    return survey;
                }
            });
        });
        setChoiceId((prev) => { return prev + 1 ; });
        console.log(choiceId);
        console.log(surveyList);
    }

    return (
        <div className="survey_container">
            <input placeholder="제목을 입력해 주세요" value={surveyList[props.index].content.title} className='survey_input' onChange={(e) => handleOnChange(e)}></input>
            <div>
                {surveyList.map((survey) => {
                    if (survey.id === props.id) {
                        return survey.content.content.map((option,index) => {
                            return <MultipleChoiceOption key={option.id} id={props.id} choiceId={option.id} index={props.index} choiceIndex={index}/>;
                        });
                    }
                    return null;
                })}
                <div className="small_button_container">
                    <div className="small_button" style={{ width: "50%", marginRight: "0px" }} onClick={(e) => handleOnClick(e)}>
                        <h1>+</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SurveyMultipleChoice;