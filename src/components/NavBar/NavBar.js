import React from 'react';
import { Link } from 'react-router-dom';
import firebaseInit from '../../Firebase/firebase.init';
import useFirebase from '../../hooks/useFirebase';
import logo from "../../Images/Icons/logo.png"
import login from "../../Images/Icons/login.png"

firebaseInit()

const NavBar = () => {
    const { user, logout } = useFirebase()
    return (
        <div className='mb-5'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container w-100 d-flex justify-content-between align-content-between">
                    <div>
                        <Link className="navbar-brand" to="/home">
                            <img src={logo} alt="" width="80" height="60" />.com
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end me-auto">
                        {/* <ul className="mb-2 navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/services">Services</Link>
                            </li>
                        </ul> */}

                        {user?.displayName && <img className='rounded-circle me-2' src={user.photoURL} alt="" />}

                        {user.displayName}

                        {/* {isLogin.displayName} */}
                        <form className="d-flex">
                            {
                                user.displayName ?
                                    <div className="">
                                        <button className='btn'><ul className="mb-2 navbar-nav me-auto mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="/addServices">Add services</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="/order">Order</Link>
                                            </li>
                                        </ul></button>
                                        <button onClick={logout} className='btn'>Logout</button>
                                    </div> :
                                    <div>
                                        <Link className="navbar-brand" to="/login">
                                            {user.displayName} <img src={login} alt="" width="30" height="25" />
                                        </Link>
                                    </div>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;