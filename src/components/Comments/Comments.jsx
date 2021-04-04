import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function Comments(){
    //useState
    let [comments, setComments]=useState('');

    //define dispatch and history
    const dispatch=useDispatch();
    const history=useHistory();

    const addComments =()=>{
        console.log('in addComments');
        dispatch({type: 'add-comment', payload:comments});
        history.push('/review');
    }


    return(
        <>
        <h2>Comments</h2>
        <h3>Any comments you want to leave?</h3>
        <textarea name="paragraph_text" cols="50" rows="7" onChange={(event) => setComments(event.target.value)}></textarea>
        <div>
        <Link to="/support">
            <button>Back</button>
        </Link>
        <button onClick={addComments}>Next</button>
        </div>
        </>
    )
}

export default Comments;