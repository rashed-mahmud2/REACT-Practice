import { Link } from "react-router"

function Nav() {
    return (
        <>
          <ul>
              <li><Link to="/" >Home</Link></li> 
              <li><Link to='/about' >About</Link></li>
              <li><Link to='/contact' >Contact</Link></li>
              <li><Link to='/posts' >All Posts</Link></li>
           </ul> 
        </>
    )
}

export default Nav