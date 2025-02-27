import { Link } from 'react-router-dom'

function NavBar() {
    
    return(
    
        
        <nav>
            <ul>
            <li>
                <Link to='/' > </Link> 
                </li>
            <li>
                <Link to='/Guilherme' > @guih.sdl </Link>
                </li>
            <li>
                <Link to='/Leo' > @leomvic </Link>
                </li>
            <li>
                <Link to='/Hayeska' > @carecaax </Link>
                </li>
            <li>
                <Link to='/Quezia' > @vieiraquezia08 </Link>
                </li>
            </ul>
        </nav>
        

    )
}

export default NavBar