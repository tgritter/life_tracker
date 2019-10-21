import React from 'react'
import { Link } from "react-router-dom";
import Logo from "./Logo" 

class Header extends React.Component {
    render() {
        return (
            <div className='sidenav'>
                    <Logo/>
                    <Link className="link" to="/">Track</Link>
                    <Link className="link" to="/data">Data</Link>
                {/* <div className="header_title">Ultimate Program</div>
                <div className="header_title"/> */}
            </div>
        )
    }
}

export default Header