import {Link} from 'react-router-dom';

function Comments(){
    return(
        <>
        <h2>Comments</h2>
        <Link to="/review">
            <button>Next</button>
        </Link>
        </>
    )
}

export default Comments;