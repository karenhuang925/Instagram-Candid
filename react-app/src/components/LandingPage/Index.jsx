import ImageTransition from "./ImageTransition"
import SignForms from "./SignForms";
import FormsFooter from "./FormsFooter";

import "./style/Index.css"

function Index() {
    return (
        <div id="Index-id-d1">
            <div id="Index-id-d1d1">
                <ImageTransition />
                <SignForms />
            </div>
            <div id="Index-id-d1d2">
                <FormsFooter />
            </div>
        </div>
    );
}

export default Index;