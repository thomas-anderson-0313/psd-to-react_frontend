import React from 'react';
import './Header.css'
function Header(props) {
    return (
        <header className="Header">
            <div className="header_wrapper d-flex justify-content-between align-items-center">
                <a href="#">
                    <img className="logo" src={require('./logo.png').default} alt="logo" />
                </a>
                <div className="col_wrapper d-flex align-items-center">
                    <a href="# " className="btn bg-black rounded-pill font_size_29 text-white font_family_alibabapuhuiti">
                        中文（简体）
                    </a>
                    <div className="toggle_wrapper ms-1 ms-sm-3">
                        <button className="btn btn-muted shadow-0 text-white">
                            <i className="fas fa-bars fa-5x   "></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;