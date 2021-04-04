import{Link} from 'react-router-dom'
import './Home.css'

function Home (){
    return(
        <Link to="/feeling">
        <button className="start">Get Started!</button>
        </Link>
    )
}

export default Home;