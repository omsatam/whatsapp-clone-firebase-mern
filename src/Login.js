import React from 'react';
import {Button} from "@material-ui/core";
import "./Login.css";
import whatsapp from "./whatsapp.png";
import {auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{user}, dispatch] = useStateValue();

    const signIn = (e) => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => {
        alert(error.message)
    }); 
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={whatsapp}
                alt="whatsapp"/>

                <div className="login__text">
                    <h1>Sign in to whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
