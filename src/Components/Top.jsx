import React, { useState } from "react";
import MainLogo from "../images/logo.svg";
import MobileIcon from "../images/icon-hamburger.svg";
import CloseMenu from "../images/icon-close-menu.svg";

const Top = (prop) => {
    const [menu, setMenu] = useState(true);
    const showMenu = () => {
        setMenu(!menu);
        prop.toggleMenu();
    }

    return (<>
        <div className="top">
            <header>
                <div className="main-logo">
                    <img src={MainLogo} alt="mainlogo"/>
                </div>
                <div className="mobile-menu">
                    {menu ? <img src={MobileIcon} alt="mobileicon" onClick={showMenu}/> : <img src={CloseMenu} alt="close" onClick={showMenu}/>}
                </div>
                <ul className="d-menu">
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>
            </header>
        </div>
    </>)
}

export default Top;