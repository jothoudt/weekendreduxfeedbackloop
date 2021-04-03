import{ useSelector,useDispatch} from 'react-redux';
import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
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
    }

    return(
        <>
        <h2>Thank you for your input</h2>
        <ul>
            <li>Feelings: {feeling}</li>
            <li>Understanding: {understanding}</li>
            <li>Support: {support}</li>
            <li>Comments: {comments}</li>
        </ul>
        <button onClick={submitSurvery}>Submit</button>
        </>
    )
}

export default Review;