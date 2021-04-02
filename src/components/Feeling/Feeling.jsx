import {Link} from 'react-router-dom';

function Feeling(){
    return(
        <>
        <h2>Feeling</h2>
        <Link to="/understanding">
            <button>Next</button>
        </Link>
        </>
    )
}

export default Feeling;