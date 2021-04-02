import{Link} from 'react-router-dom'

function Home (){
    return(
        <Link to="/feeling">
        <button>Get Started!</button>
        </Link>
    )
}

export default Home;