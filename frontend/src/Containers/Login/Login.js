import React from 'react';
import {getLoginURL} from "../../API/apis";
import style from './Login.module.scss'

function Login(props) {
    let url = getLoginURL()
    return (
        <div>
            <p>Not logged in</p>
            <p>Please login</p>
            <p></p>
            <a href={url} className={style.button}>login</a>
        </div>
    );
}

export default Login;

