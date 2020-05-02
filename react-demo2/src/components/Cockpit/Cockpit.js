import React, { useEffect, useRef, useContext } from 'react';
import './Cockpit.css'
import AuthContext from '../../context/auth-context'
const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(()=>{
        //     alert('Saved data to cloud');
        // },1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js]2nd  useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    })



    const classes = [];
    if (props.personsLength <= 2) {
        classes.push('red');
    }

    if (props.personsLength <= 1) {
        classes.push('bold');
    }
    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is nice</p>
            <button ref={toggleBtnRef} className="button" onClick={props.toggle}>Toggle Person</button>
            <button className="button" onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(cockpit);