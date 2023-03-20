import React, { useContext} from 'react';
import ViewSurveyChoice from './ViewSurveyChoice';
import ViewSureveyQuestion from './ViewSureveyQuestion';
import ViewSurveyMultipleChoice from './ViewSurveyMultipleChoice';
import { surveyListContext } from "./Survey";

function ViewSurvey(props) {
    const [surveyList, setSurveyList] = useContext(surveyListContext);

    return (
        <div>
            {
                surveyList[props.index].content.id === 0 ? <ViewSureveyQuestion key={props.index} index={props.index} /> :
                surveyList[props.index].content.id === 1 ? <ViewSurveyChoice key={props.index} index={props.index}/> :
                <ViewSurveyMultipleChoice key={props.index} index={props.index}/>
            }
        </div>
    );
}

export default ViewSurvey;