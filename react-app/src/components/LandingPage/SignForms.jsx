import { useState } from "react";
import "./style/SignForms.css"
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

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
                    form && <span>Don't have an account? <span className="SignForms-d1d2-forms" onClick={() => setForm(false)}>Sign up</span></span>
                }
                {
                    !form && <span>Have an account? <span className="SignForms-d1d2-forms" onClick={() => setForm(true)}>Log in</span></span>
                }
                
            </div>
            <div id="SignForms-id-d1d3">
                <span style={{margin: "5px"}}>Get the app.</span>
                <div id="SignForms-id-d1d3d1">
                    <img style={{margin: "5px"}} className="SignForms-d1d3d1i" src="/images/get_app_google.png" alt="" />
                    <img style={{margin: "5px"}} className="SignForms-d1d3d1i" src="/images/get_app_microsoft.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default SignForms;