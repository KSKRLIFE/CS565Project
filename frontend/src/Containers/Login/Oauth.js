import {useHistory, useLocation} from "react-router";
import React, {useEffect} from "react";
import {getMe, getOauthToken} from "../../API/apis";

function Oauth() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let history = useHistory();
    let code = query.get('code')
    useEffect(() => {
        async function f() {
            console.log('ss');
            let data = await getOauthToken(code)
            localStorage.setItem('token', data.access_token)
            let me = await getMe(data.access_token)
            localStorage.setItem('me', me.username)
            history.push('/')
        }

        f()
    }, [])
    return <p>
        Authorizing...
    </p>
}

export default Oauth;
