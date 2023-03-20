import React, { useContext } from "react";
import { surveyListContext } from "./Survey";

function MultipleChoiceOption(props) {
    const [surveyList, setSurveyList] = useContext(surveyListContext);

    function handelOnClick(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            return prev.map((survey) => {
                if (survey.id === props.id) {
                    return {
                        id: survey.id,
                        content: { id: survey.content.id, title: survey.content.title, content: survey.content.content.filter((choice) => choice.id !== props.choiceId) }
                    };
                }
                return survey;
            });
        });
    }

    function handleOnChange(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            return prev.map((survey) => {
                if (survey.id === props.id) {
                    return {
                        ...survey,
                        content: {
                            ...survey.content,
                            content: survey.content.content.map((option) => {
                                if (option.id === props.choiceId) {
                                    return {
                                        id: option.id,
                                        content: e.target.value
                                    }
                                } else {
                                    return option;
                                }
                            })
                        }
                    };
                } else {
                    return survey;
                }
            });
        });
    };



    return (
        <div className="small_button_container">
            <div className="small_button" onClick={(e) => handelOnClick(e)}>
                <h1>-</h1>
            </div>
            <input placeholder="선택지 내용을 입력해 주세요" value={surveyList[props.index].content.content[props.choiceIndex].content} className="choice_input" onChange={(e) => handleOnChange(e)} />
        </div>
    );
};

export default MultipleChoiceOption;