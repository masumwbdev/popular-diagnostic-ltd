import './Header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navbar-bg shadow">
                <div class="container-fluid">
                    <a class="navbar-brand nav-bar fs-4" href="/home">Popular Diagn</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                            <li class="nav-item">
                                <NavLink className="link nav-link"
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link nav-link"
                                    to="/services"
                                >
                                    Services
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink className="link nav-link"
                                    to="/doctors"
                                >
                                    Our Doctors
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link nav-link"
                                    to="/about"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link nav-link"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <span className="text-light me-3 mt-2">{user?.displayName}</span>
                            {/* <img className="photo-url" src={user?.photoURL} alt="" /> */}
                            {user?.displayName ?
                                <button onClick={logOut} className="btn btn-outline-primary btn-sm fw-bold me-2">Logout</button> :
                                <NavLink to="/login"><button className="btn btn-outline-primary btn-sm fw-bold me-2">Login</button></NavLink>}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;