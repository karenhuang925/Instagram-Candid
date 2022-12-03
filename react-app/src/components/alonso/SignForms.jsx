import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logInFunction, signUpFunction } from "../../store/user";
import "./style/SignForms.css"

function LogInForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    async function handleSumbit(e) {
        e.preventDefault();
        const data = { credential, password };
        const response = await dispatch(logInFunction(data));
        history.push("/homepage")
    }
    return (
        <form className="SignForm-f1" onSubmit={(e) => handleSumbit(e)}>
            <input type="text" placeholder="Username or email" onChange={(e) => setCredential(e.target.value)}/>
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button>Log In</button>
        </form>
    );
}


function SignUpForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function handleSumbit(e) {
        e.preventDefault();
        const preview_image = "raw" 
        const data = { email, first_name, last_name, username, password, preview_image };
        const response = await dispatch(signUpFunction(data));
        console.log(response)
    }
    return (
        <form className="SignForm-f1" onSubmit={(e) => handleSumbit(e)}>
            <span>Sign up to see photos and videos from your friends.</span>
            <input type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
            <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
            <button>Sign Up</button>
        </form>
    );
}

function SignForms() {
    const [form, setForm] = useState(true)
    return (
        <div id="SignForms-id-d1">
            <div id="SignForms-id-d1d1">
                <img id="SignForms-id-d1d1i1" src="/images/instagram_logo_forms.png" alt="" />
                { form && <LogInForm /> }
                { !form && <SignUpForm /> }
            </div>
            <div id="SignForms-id-d1d2">
                {
                    form && <span>Don't have an account? <button onClick={() => setForm(false)}>Sign up</button></span>
                }
                {
                    !form && <span>Have an account? <button onClick={() => setForm(true)}>Log in</button></span>
                }
                
            </div>
            <div id="SignForms-id-d1d3">
                <span>Get the app.</span>
                <div id="SignForms-id-d1d3d1">
                    <img className="SignForms-d1d3d1i" src="/images/get_app_google.png" alt="" />
                    <img className="SignForms-d1d3d1i" src="/images/get_app_microsoft.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default SignForms;