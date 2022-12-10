import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logInFunction, logInDemouserFunction } from "../../store/user";

import "./style/LogInForm.css"

function LogInForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [disableSubmit, setDisableSubmit] = useState(true);
    const [showErrors, setShowErrors] = useState(false);

    const [backendErrors, setBackendErrors] = useState([])
    const [frontendErrors, setFrontendErrors] = useState([])


    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");


    async function handleSumbit(e) {
        e.preventDefault();
        const data = { credential, password };
        const response = await dispatch(logInFunction(data));
        if(response.errors) setBackendErrors(response.errors)
        else history.push("/")
    }
    async function handleDemouser(e) {
        e.preventDefault();
        await dispatch(logInDemouserFunction());
        history.push("/")
    }

    useEffect(() => {
        const errors = [];
        if(credential.length < 5) errors.push("- Invalid credential");
        if(password.length < 5) errors.push("- Password length is too short");
        setFrontendErrors(errors)
        if(!errors.length) setDisableSubmit(false)
    }, [credential, password])


    return (
        <>
            <form className="SignForm-f1" onSubmit={(e) => handleSumbit(e)}>
                <input className="LogInForm-f1-inputs" type="text" placeholder="Username or email" onChange={(e) => setCredential(e.target.value)}/>
                <input className="LogInForm-f1-inputs" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <div id="LogInForm-id-f1d1" onMouseEnter={(e) => setShowErrors(true)} onMouseLeave={(e) => setShowErrors(false)}>
                    <button id="LogInForm-id-f1b1" disabled={disableSubmit}>Log In</button>
                    {
                        (frontendErrors.length > 0 && showErrors) && (
                            <div id="LogInForm-id-f1d1d1">
                                { frontendErrors.map((error) => <span>{error}</span>) }
                            </div>
                        )
                    }
                </div>
                <button id="LogInForm-id-f1b2" type="button" onClick={(e) => handleDemouser(e)}>Demouser</button>
            </form>
            {
                backendErrors.length > 0 && (
                    <div id="LogInForm-id-d1">
                        { backendErrors.map((error) => <span>{error}</span>) }
                    </div>
                )
            }
        </>
    );
}


export default LogInForm;