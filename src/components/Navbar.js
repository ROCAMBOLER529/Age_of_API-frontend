import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isHoverAPI, setIsHoverAPI] = useState(false);
    const [isHoverLogIn, setIsHoverLogIn] = useState(false);
    const [hayToken, setHayToken] = useState(null);

    const handleMouseEnterAPI = () => {
        setIsHoverAPI(true);
    }
    const handleMouseLeaveAPI = () => {
        setIsHoverAPI(false);
    }

    const handleMouseEnterLogIn = () => {
        setIsHoverLogIn(true);
    }
    const handleMouseLeaveLogIn = () => {
        setIsHoverLogIn(false);
    }

    const navbarButtonHoverAPI = {
        color: isHoverAPI ? '#726c6c' : '#808080'
    }

    const navbarButtonHoverLogIn = {
        color: isHoverLogIn ? '#726c6c' : '#808080'
    }
    
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setHayToken(storedToken);
    }, []);

    const handleLogOut = () => {
        if (localStorage.getItem('token')) {
            setHayToken(null);
        }
    }

    return (
        <>
            <Nav>
                <NavMenu>
                    <div>
                        <NavLink style={navbarButtonHoverAPI} onMouseEnter={handleMouseEnterAPI} onMouseLeave={handleMouseLeaveAPI} to="/" activeStyle>
                            Age of API
                        </NavLink>
                    </div>
                    {!hayToken ? (
                        <>
                            <div>
                                <NavLink style={navbarButtonHoverLogIn} onMouseEnter={handleMouseEnterLogIn} onMouseLeave={handleMouseLeaveLogIn} to="/auth/logIn" activeStyle>
                                    LogIn
                                </NavLink>
                            </div>
                            <div>
                                <NavLink style={navbarButtonHoverLogIn} onMouseEnter={handleMouseEnterLogIn} onMouseLeave={handleMouseLeaveLogIn} to="/auth/signUp" activeStyle>
                                    SignUp
                                </NavLink>
                            </div>
                        </>
                    ) : (
                        <div>
                            <NavLink style={navbarButtonHoverLogIn} onMouseEnter={handleMouseEnterLogIn} onMouseLeave={handleMouseLeaveLogIn} to="/account" activeStyle>
                                Account
                            </NavLink>
                        </div>
                    )}
                    
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;