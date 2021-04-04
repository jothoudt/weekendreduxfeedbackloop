import {Link, useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Understanding(){
    //useState
    let [understanding, setUnderstanding]=useState('');

    //define history and dispatch
    const history=useHistory();
    const dispatch=useDispatch();

    const addUnderstanding=()=>{
        console.log(understanding);
        if(understanding ===''){
            alert('Must select input!');
        }
        else{
            dispatch({type:'add-understanding', payload:understanding})
            history.push('/support')
        }
    }

    return(
        <>
        <h2>Understanding</h2>
        <h3>How well are you understanding the content?</h3>
        <form>
        <div class="choice">
        <input type="radio" name="choice" value="1" onClick={(event)=> setUnderstanding(1)}/>1
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="2" onClick={(event)=> setUnderstanding(2)}/>2
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="3" onClick={(event)=> setUnderstanding(3)}/>3
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="4" onClick={(event)=> setUnderstanding(4)}/>4
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="5" onClick={(event)=> setUnderstanding(5)}/>5
        </div>
        </form>
        <Link to="/feeling">
            <button>Back</button>
        </Link>
        <button onClick={addUnderstanding}>Next</button>
        </>
    )
}

export default Understanding;