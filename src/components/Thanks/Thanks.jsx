import{useHistory} from 'react-router-dom';
import{useDispatch} from 'react-redux';
import './Thanks.css';

function Thanks(){
    const history=useHistory();
    const dispatch=useDispatch();

    const newSurvey=()=>{
        dispatch({type:'new-survey', payload: null})
        history.push('/feeling');
    }
    return(
        <>
        <h2>Your feedback has been submitted. Thank You!</h2>
        <button className="new" onClick={newSurvey}>Leave new feedback</button>
        </>
    )
}

export default Thanks;