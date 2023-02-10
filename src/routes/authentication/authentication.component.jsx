
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import {signInWithGooglePopup , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import './authentication.styles.scss'
const Authentication = ()=>{
    const LoggooglePop= async ()=>{
        const {user} =  await signInWithGooglePopup();
        const useDocRef = await createUserDocumentFromAuth(user)

    }
    return <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
    </div>
}

export default Authentication
