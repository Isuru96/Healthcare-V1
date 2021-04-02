import React from 'react'
import {FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import{
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to = '/'> dolla</NavLogo>
                        <MobileIcon>
                            <FaBars />
                        </MobileIcon>
                            <NavMenu>

                                <NavItem>
                                 <NavLinks to="about">About</NavLinks>
                                </NavItem>

                                <NavItem>
                                 <NavLinks to="discover">discover</NavLinks>
                                </NavItem>

                                <NavItem>
                                 <NavLinks to="services">services</NavLinks>
                                </NavItem>

                                <NavItem>
                                 <NavLinks to="signup">sign Up</NavLinks>
                                </NavItem>

                            </NavMenu>

                            <NavBtn>

                                <NavBtnLink to="/signin">Sign In</NavBtnLink>

                            </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    );
};

export default Navbar
