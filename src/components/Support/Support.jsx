import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useState} from 'react'

function Support(){

    //setState
    let [support, setSupport]=useState('');

    //define history and dispatch
    const history=useHistory();
    const dispatch=useDispatch();

    const addSupport =()=>{
        if(support === ''){
            alert('Must select a value');
        }
        else{
            dispatch({type:'add-support', payload:support});
            history.push('/comments');
        }
    }

    return(
        <>
        <h2>Support</h2>
        <h3>How well did you feel supported today?</h3>
        <form>
        <div class="choice">
        <input type="radio" name="choice" value="1" onClick={(event)=> setSupport(1)}/>1
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="2" onClick={(event)=> setSupport(2)}/>2
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="3" onClick={(event)=> setSupport(3)}/>3
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="4" onClick={(event)=> setSupport(4)}/>4
        </div>
        <div class="choice">
        <input type="radio" name="choice" value="5" onClick={(event)=> setSupport(5)}/>5
        </div>
        </form>
        <button onClick={addSupport}>next</button>
        </>
    )
}

export default Support;