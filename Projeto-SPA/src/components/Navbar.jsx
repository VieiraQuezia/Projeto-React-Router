import { Link } from "react-router-dom";
import '../components/NavBar.css'
import '../App.css'
function NavBar() {
  return (
    <nav className="navbar">
        <h2> SEGUE A GENTE!!</h2>
      <ul>
        
        <li>
                <Link className="link" to='/' > Home</Link>
                </li>
        <li>
                <Link className="link" to='/Guilherme' > @guih.sdl </Link>
                </li>
            <li>
                <Link className="link" to='/Leo' > @leomvic </Link>
                </li>
            <li>
                <Link className="link" to='/Hayeska' > @carecaax </Link>
                </li>
            <li>
                <Link className="link" to='/Quezia' > @vieiraquezia08 </Link>
                </li>
      </ul>
    </nav>
  );
}

export default NavBar;
