import * as React from 'react'
import {Link} from 'gatsby'


const MenuComponent = () => {
    return(
        <nav className="flex justify-items-center items-center justify-around py-10 bg-gradient-to-r from-[#F47500]/[.40] to-[#F47500]/[.18] "> 
            
            <ul className="flex bg-white rounded-[30px] px-6 shadow-lg mb-1">
                <li className="menu-item"><Link to="/" activeClassName="active">Sobre mim</Link></li>
                <li className="menu-item"><Link to="/stack" activeClassName="active">Stack</Link></li>
            </ul>
        </nav>
    )
}

export default MenuComponent