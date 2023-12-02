import logo from "./logo.png"
import {navbar} from "../../helper/data"
import "./Navbar.scss"
const Navbar = () => {
    console.log(navbar);
  return (
    <div className="containerN">
        <img src={logo} alt="logo" width="100px"/>
        <div className="buttons">
            {navbar.map((navbar)=>(
              <button key={navbar}>{navbar}</button>  
            ))}
        </div>
    </div>
  )
}

export default Navbar