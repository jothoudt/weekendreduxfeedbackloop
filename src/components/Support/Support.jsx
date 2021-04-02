import {Link} from 'react-router-dom';

function Support(){
    return(
        <>
        <h2>Support</h2>
        <Link to="/comments">
            <button>next</button>
        </Link>
        </>
    )
}

export default Support;