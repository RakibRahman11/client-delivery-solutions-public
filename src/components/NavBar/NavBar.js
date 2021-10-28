import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Images/Icons/logo.png"

const NavBar = () => {
    return (
        <div className='mb-5'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container w-100 d-flex justify-content-between align-content-between">
                    <div>
                        <Link className="navbar-brand" to="/home">
                            <img src={logo} alt="" width="80" height="60" />.com
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        {/* <ul className="mb-2 navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                        </ul> */}

                        {/* {user?.displayName && <img className='rounded-circle me-2' src={user.photoURL} alt="" />}

                    {user.displayName}

                    {isLogin.displayName}
                    <form className="d-flex">
                        {
                            user.displayName ?
                                <button onClick={logout} className='btn '>Logout</button> :
                                <Link className="navbar-brand" to="/login">
                                    {user.displayName} <img src={photo} alt="" width="30" height="25" />
                                </Link>
                        }
                    </form> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;