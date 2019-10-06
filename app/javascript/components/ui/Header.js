import React from 'react'
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className="header_tabs">
                    <Link to="/">Track</Link>
                    <Link to="/tasks">Tasks</Link>
                    <Link to="/data">Data</Link>
                </div>
                <div className="header_title">Ultimate Program</div>
                <div className="header_title"/>
            </div>
        )
    }
}

export default Header