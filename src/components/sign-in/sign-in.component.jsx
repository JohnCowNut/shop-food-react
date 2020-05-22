import React from 'react';
import FormInput from '../form-input/form-input.component';
import ButtonLink from '../custom-link/custom-link.component';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password : "",
            email: ""
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const {password , email }  = this.state;
        console.log(password , email)
    }
    handleChange = (e) => {
       
        const {name , value} = e.target;
        this.setState({[name] : value })
    }
    render() {
        const {email , password} = this.state;
        return (
            <div>
                <div className="d-left">
                <h2 className=" mb-md">Do You Have Account ?</h2>
                <form  onSubmit={this.handleSubmit} >
                    <FormInput 
                        className ="d-left__input" 
                        placeholder="Your Email:" 
                        name ="name"
                        type="email" 
                        value = {email}
                        handleChange = {this.handleChange}
                        required
                    /> 
                    <br/>
                    <FormInput 
                        name = "password"
                        value = {password}
                        className ="mb-sm" 
                        type ="password" 
                        placeholder="Your Password:" 
                        handleChange  = {this.handleChange}
                        required
                     /> 
                    <br/>
                    <div>
                        <ButtonLink as="button" type="submit" className="mb-md" sign ="true">Sign In</ButtonLink>
                        <ButtonLink as="button" type="submit" sign ="true"> Sign In With Google</ButtonLink>
                    </div>
                </form>
             </div>
         </div>
        )
    }
}
export default SignIn;