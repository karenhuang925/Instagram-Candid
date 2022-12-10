import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpFunction } from "../../store/user";

import "./style/SingUpForm.css"

function SignUpForm() {
    const dispatch = useDispatch();

    const [disableSubmit, setDisableSubmit] = useState(true);
    const [showErrors, setShowErrors] = useState(false);

    const [backendErrors, setBackendErrors] = useState([]);
    const [frontendErrors, setFrontendErrors] = useState([]);

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [preview_image, setPreviewImage] = useState("");

    useEffect(() => {
        const errors = [];
        if((first_name.length < 2) || (first_name.trim().length === 0)) errors.push("- Invalid first name");
        if((last_name.length < 2) || (last_name.trim().length === 0)) errors.push("- Invalid last name");
        if((username.length < 5) || (username.trim().length === 0)) errors.push("- Invalid username");
        if(!email.includes("@") || !email.endsWith(".com")) errors.push("- Invalid email");
        if(password.length < 5) errors.push("- Password length must be greater than 4 characters.");
        if(!preview_image.endsWith(".jpg")) errors.push("- Invalid image format.");
        setFrontendErrors(errors)
        if(!errors.length) setDisableSubmit(false)
    }, [first_name, last_name, username, email, password, preview_image]);


    async function handleSumbit(e) {
        e.preventDefault();
        const data = { email, first_name, last_name, username, password, preview_image };
        const response = await dispatch(signUpFunction(data));
        if(response.errors) setBackendErrors(response.errors)
    }


    return (
        <>
            <form className="SignForm-f1" onSubmit={(e) => handleSumbit(e)}>
                <span style={{ margin: "10px"}}>Sign up to see photos and videos from your friends.</span>
                <input className="SignUpForm-f1-inputs" type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                <input className="SignUpForm-f1-inputs" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                <input className="SignUpForm-f1-inputs" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                <input className="SignUpForm-f1-inputs" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <input className="SignUpForm-f1-inputs" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <input className="SignUpForm-f1-inputs" type="text" placeholder="Image" onChange={(e) => setPreviewImage(e.target.value)}/>
                
                <div id="SignUpForm-id-f1d1" onMouseEnter={(e) => setShowErrors(true)} onMouseLeave={(e) => setShowErrors(false)}>
                    <button id="SignUpForm-id-f1b1" disabled={disableSubmit}>Sign Up</button>
                    {
                        (frontendErrors.length > 0 && showErrors) && (
                            <div id="SignUpForm-id-f1d1d1">
                                { frontendErrors.map((error) => <span>{error}</span>) }
                            </div>
                        )
                    }
                </div>
            </form>
            {
                backendErrors.length > 0 && (
                    <div id="SignUpForm-id-d1">
                        {backendErrors.map((error) => <span>{error}</span>)}
                    </div>
                )
            }
        </>
    );
}

export default SignUpForm;