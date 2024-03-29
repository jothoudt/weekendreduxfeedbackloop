import{useSelector,useDispatch} from 'react-redux';
import {useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import './Review.css'

function Review(){
    const dispatch= useDispatch();
    const history= useHistory();

    const feeling= useSelector((store)=>{
        return store.feeling;
    })

    const understanding= useSelector((store)=>{
        return store.understanding;
    })
    const support= useSelector((store)=>{
        return store.support;
    })
    const comments= useSelector((store)=>{
        return store.comments
    })

    const submitSurvery=()=>{
        console.log('in submitSurvery');
        let newSurvey={
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        }
        console.log('object to send to server', newSurvey);
        axios.post('/api/survey', newSurvey).then((respnse)=>{
            console.log('back from post');
            history.push('/thanks');
        }).catch((err)=>{
            alert(err);
            console.log(err);
        });
    }

    return(
        <>
        <h2>Thank you for your input!</h2>
        <ul>
            <li>Feelings: {feeling}</li>
            <li>Understanding: {understanding}</li>
            <li>Support: {support}</li>
            <li>Comments: {comments}</li>
        </ul>
        <Link to="/comments">
            <button>Back</button>
        </Link>
        <button onClick={submitSurvery}>Submit</button>
        </>
    )
}

export default Review;