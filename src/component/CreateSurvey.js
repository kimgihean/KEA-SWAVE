import React,{useContext, useState} from 'react';
import SurveyChoice from './SurveyChoice';
import SurveyMultipleChoice from './SurveyMultipleChoice';
import SurveyQuestion from './SurveyQuestion';
import { surveyListContext } from "./Survey";

function CreateSurvey(props) {
    const [surveyList, setSurveyList] = useContext(surveyListContext);
    const [category,setCategory] = useState(surveyList[props.index].content.id);
    
    function handleOnChange(e){
        e.preventDefault();
        const selectedCategory = parseInt(e.target.value);
        setCategory(selectedCategory);
        setSurveyList((prev) => {
            return prev.map((survey) => {
                if (survey.id === props.id) {
                    let newContent = {id:selectedCategory,title:"",content:""};
                    if(selectedCategory === 2) newContent.content = [{ id: 0,content: "" }];
                    return {
                        id: survey.id,
                        content: newContent
                    };
                } else {
                    return survey;
                }
            });
        });
        console.log(surveyList);
    }
    
    
    function handelOnClick(e){
        e.preventDefault();
        setSurveyList((prev) => {return prev.filter((element) => element.id !== props.id); });
    }

    return (
        <div className="create_survey">
            <select key={surveyList[props.index].content.id} defaultValue={surveyList[props.index].content.id} style={{width:"100px",margin:"10px"}} onChange={(e)=>{handleOnChange(e)}} id="surveyCategory">
                <option value="0">주관식</option>
                <option value="1">찬부식</option>
                <option value="2">객관식</option>
            </select>
            <div>
                {category === 0 ? <SurveyQuestion key={props.id} id={props.id} index={props.index}/> : category === 1 ? <SurveyChoice key={props.id} id={props.id} index={props.index}/> : <SurveyMultipleChoice key={props.id} id={props.id} index={props.index}/>}
            </div>
            <div className="small_button_container">
                <div className="small_button" onClick={(e)=>handelOnClick(e)}>
                    <h1>-</h1>
                </div>
            </div>
        </div>
    );
}

export default CreateSurvey;