import './header.css'

import logo from "/logo.png";

function cabecalho(){
    
    return (
        <>
        <header>
               
       <h1>REACT ROUTER (SPA)</h1>
        <img src={logo} className="logo react" alt="React logo" />
       
    </header>
    </>
    )
}

export default cabecalho;