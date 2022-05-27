import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import LoginForm from './LoginForm';
import ForgotPass from './ForgotPass';
import ResetPass from './ResetPass';
import RenewPass from './RenewPass';
import Dashboard from './Dashboard';
import usePersistedState from './usePersistedState';

const App = () => {
    
    /*const [user, setUser] = useState({username:"", password:""});*/
    const [user, setUser] = usePersistedState('user', {'username':'', 'password':''});
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [active, setActive] = useState("Login");
    

    const User = user => {

        setUser(user);

    }

    const Message = e => {

        setMessage(e);

    }

    const Next = e => {

        setActive(e);

    };

    const Reset = details => {

        console.log(details);

    };

    const Logout = () => {

        setUser({
            username:"", email: ""
        });
        Next("Login");
        

    }

    return (

        <div className='App'>
            {(user.username != "" && active != "Renew") ? (
                <div className="welcome">
        
                    {<Dashboard User = {User} user = {user} Next = {Next} Message={message} error={error} Logout={Logout}/> }
                    
                </div>
            ) : (
                <div>
                    {active === "Forgot" && <ForgotPass Next = {Next} Message = {Message} error={error} />}
                    {active === "Login" && <LoginForm User = {User} Next = {Next} error={error} />}
                    {active === "Reset" && <ResetPass Reset={Reset} Next = {Next} Message={message} error={error} /> }
                    {active === "Renew" && <RenewPass User = {User} user = {user} Next = {Next} Message={message} error={error} /> }
                    
                </div>
            )}
        </div>

    )
}

render(<App />, document.getElementById("root"));