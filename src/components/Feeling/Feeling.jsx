import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import './Feeling.css'

function Feeling(){
    //set state of selection
    let [feeling, setFeeling]=useState('');

    //define dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    const addFeeling =()=>{
        console.log(feeling);
        //if feeling is blank will alert rather than proceed
        if(feeling === ''){
            alert('must select value')
        }
        //else dispatch selection and proceed to next page
        else{
            dispatch({type: 'add-feeling', payload:feeling});
            history.push('/understanding');
        }
    }

    return(
        <>
        <h2>Feeling</h2>
        <h3>How are you feeling today?</h3>
        <form>
        <div class="choice">
        <label><input type="radio" name="choice" value="1" onClick={(event)=> setFeeling(1)}/>1</label>
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="2" onClick={(event)=> setFeeling(2)}/>2
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="3" onClick={(event)=> setFeeling(3)}/>3
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="4" onClick={(event)=> setFeeling(4)}/>4
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="5" onClick={(event)=> setFeeling(5)}/>5
        </div>
        </form>
            <button onClick={addFeeling}>Next</button>
        </>
    )
}

export default Feeling;