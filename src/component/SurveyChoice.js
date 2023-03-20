import React, { useContext } from 'react';
import "./css/SurveyStyle.css"
import { surveyListContext } from "./Survey";

function SurveyChoice(props) {
    const [surveyList, setSurveyList] = useContext(surveyListContext);

    function handleOnChange(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            return prev.map((survey) => {
                if (survey.id === props.id) {
                    return {
                        ...survey,
                        content:{
                            id: 1,
                            title: e.target.value,
                            content:""
                        }
                    }
                } else {
                    return survey;
                }
            });
        });
        console.log(surveyList);
    }

    return (
        <div>
            <div className="survey_container">
                <input placeholder="제목을 입력해 주세요" value={surveyList[props.index].content.title} className='survey_input' onChange={(e) => handleOnChange(e)}></input>
            </div>
            <div className="small_button_container">
                <h2 className="grey_text">예 / 아니오</h2>
            </div>
        </div>
    );
}

export default SurveyChoice;
