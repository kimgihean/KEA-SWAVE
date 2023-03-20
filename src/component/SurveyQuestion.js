import React,{useContext} from 'react';
import "./css/SurveyStyle.css"
import { surveyListContext } from "./Survey";

function SurveyQuestion(props) {
    const [surveyList, setSurveyList] = useContext(surveyListContext);

    function handleOnChange(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            return prev.map((survey) => {
                if (survey.id === props.id) {
                    return {
                        ...survey,
                        content:{
                            id: 0,
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
        <div className="survey_container">
            <input placeholder="제목을 입력해 주세요" value={surveyList[props.index].content.title} className='survey_input' onChange={(e) => handleOnChange(e)}></input>
        </div>
    );
}

export default SurveyQuestion;