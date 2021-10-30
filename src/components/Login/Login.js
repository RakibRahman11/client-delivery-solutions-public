import React from 'react';
import { useHistory, useLocation } from 'react-router';
import firebaseInit from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import google from '../../Images/Icons/google.png'
import './Login.css'

firebaseInit()

const Login = () => {
    const { googleSignIn } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_ui = location.state?.from || '/home'
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_ui);
            })
    }
    return (
        <div className='bg-color py-5'>
            <div className="container">
                <div className="google-login bg-white mt-5 py-5 w-50 mx-auto">
                    <h3>Login With</h3>
                    <div className="mt-4">
                        <button onClick={handleGoogleSignIn} className="btn rounded-pill border border-dark fw-bolder pe-5 py-2" type="button"> <img src={google} className='google me-5' alt="" /> Continue with Google</button>
                    </div>
                    <p className='mt-2'>Don’t have an account? Create an account</p>
                </div>
            </div>
        </div>
    );
};

export default Login;