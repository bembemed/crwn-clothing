
import { useState } from "react"
import {  createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from '../button/button.component'
const SignUpFormDefault= {
    displayName: '',
    email : '',
    password : '',
    confirmPassword : ''
}



const SignUpForm= ()=>{

    const [ SignUpFormFields , setSignUpForm ] = useState(SignUpFormDefault);
    const { displayName , email , password , confirmPassword } = SignUpFormFields;

    const resetValueForm= ()=>{
        setSignUpForm(SignUpFormDefault)
    }

    

    const onSubmitForm = async (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert("this password is incorrect")
            return 
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email , password)

            await createUserDocumentFromAuth(user , {displayName})
            resetValueForm()

        }catch(e){
            if(e.code === 'auth/email-already-in-use'){
                alert("cannot use this emai");
            }else{
                console.log('this is an error', e);
            }
        }
    }
    const onchangeForm =(e)=>{
        const {name,value} = e.target

        setSignUpForm({...SignUpFormFields , [name]:value})
    }

    return <div className="sign-up-container">
        <h2 > Don't have an account </h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={onSubmitForm}>
            <FormInput label='displayName' type='text' required  name="displayName" value={displayName} onChange={onchangeForm}  />

            
            <FormInput label='email' type='email' required name="email" value={email} onChange={onchangeForm}/>

           
            <FormInput label='password' type='password' required name="password" value={password} onChange={onchangeForm}/>

            
            <FormInput label='confirm password' type='password' required name="confirmPassword" value={confirmPassword} onChange={onchangeForm}/>

            <Button type='submit'>sign up </Button>
        </form>
    </div>
}

export default SignUpForm