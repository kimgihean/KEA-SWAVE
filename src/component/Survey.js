import React, { useState, useRef, useEffect, createContext } from 'react';
import './css/SurveyStyle.css'
import CreateSurvey from './CreateSurvey';
import ViewSurvey from './ViewSurvey';

export const surveyListContext = createContext(null);
export const anwserListContext = createContext(null);

function Survey(props) {
    const [surveyId, setSurveyId] = useState(1);
    const [surveyList, setSurveyList] = useState([{ id: 0, content: { id: 0, title: "", content: "" } }]);
    const [anwserList, setAnwserList] = useState([]);
    const [isPreview, setIsPreview] = useState(false);

    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });

    function handleOnClickNewSurvey(e) {
        e.preventDefault();
        setSurveyList((prev) => { return [...prev, { id: surveyId, content: { id: 0, title: "", content: "" } }]; });
        setSurveyId((prev) => { return prev + 1; });
    }

    function handleOnClickPreview(e) {
        e.preventDefault();
        if (!isPreview) {
            surveyList.map((survey, index) => {
                let contentDefault = "";
                if (survey.content.id === 1)contentDefault = true;
                else if (survey.content.id === 2)contentDefault = 0;
                setAnwserList((prev) => {
                    return [...prev, { id: index, content: contentDefault }];
                })
            })
        }else if(isPreview){
            setAnwserList([]);
            console.log("pop");
        }
        setIsPreview((prev) => { return !prev; });
    }

    return (
        <div>
            <surveyListContext.Provider value={[surveyList, setSurveyList]}>
                <anwserListContext.Provider value={[anwserList, setAnwserList]}>
                    <div className="chat_window">
                        <div className="top_menu">
                            <div className="buttons">
                                <div className="button close"></div>
                                <div className="button minimize"></div>
                                <div className="button maximize"></div>
                            </div>
                            <div className="title">Survey</div>
                            <div className="preview" onClick={(e) => handleOnClickPreview(e)}>Preview</div>
                        </div>
                        <div style={{ overflow: "scroll", height: "79%" }} ref={scrollRef}>
                            {surveyList.map((survey, index) => isPreview ? <ViewSurvey key={survey.id} id={survey.id} index={index} /> : <CreateSurvey key={survey.id} id={survey.id} index={index} />)}
                            {!isPreview && (
                                <div className="new_survey" onClick={(e) => handleOnClickNewSurvey(e)}>
                                    <h1>+</h1>
                                </div>
                            )}
                        </div>
                        <div className="bottom_wrapper clearfix" onClick={()=>{console.log(anwserList);console.log(surveyList)}}>
                            <div className="send_message">
                                <div className="icon" ></div>
                                <h1 >Save</h1>
                            </div>
                        </div>
                    </div>
                </anwserListContext.Provider>
            </surveyListContext.Provider>
        </div>
    );
}

export default Survey;