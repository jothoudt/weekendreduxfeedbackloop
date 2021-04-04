import axios from 'axios';
import {useState, useEffect} from 'react';
import './Admin.css';

function Admin(){
    let [surveys, setSurveys]=useState([]);

    const getSurveys=()=>{
        axios.get('/api/survey').then((response)=>{
            setSurveys(response.data);
        }).catch((err)=>{
            alert('error', err);
            console.log(err);
        })
    }

    useEffect(()=> {getSurveys()},[]);
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>flagged</th>
                </tr>
            </thead>
            <tbody>
                {surveys.map(survey =>{
                    return(
                        <>
                        <tr>
                            <td>{survey.feeling}</td>
                            <td>{survey.understanding}</td>
                            <td>{survey.support}</td>
                            <td>{survey.comments}</td>
                            <td>{survey.flagged}</td>
                        </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Admin;