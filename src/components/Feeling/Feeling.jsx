import {Link} from 'react-router-dom';

function Feeling(){
    return(
        <>
        <h2>Feeling</h2>
        <h3>How are you feeling today?</h3>
        <Link to="/understanding">
            <button>Next</button>
        </Link>
        </>
    )
}

export default Feeling;