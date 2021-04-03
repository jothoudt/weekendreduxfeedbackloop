import{Link} from 'react-router-dom';

function Thanks(){
    return(
        <>
        <h2>Thank You!</h2>
        <Link to="/">
            <button>Leave new feedback</button>
        </Link>
        </>
    )
}

export default Thanks;