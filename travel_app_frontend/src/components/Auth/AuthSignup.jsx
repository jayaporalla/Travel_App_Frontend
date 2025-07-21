import "./Auth.css";
import { useAuth } from "../../context";
import { 
    validateEmail, 
    validateName, 
    validateNumber, 
    validatePassword 
} from "../../utils";
import { signupHandler } from "../../services";

let isNumberValid, isNameValid, isPasswordValid, isEmailValid, isConfirmPasswordValid;

export const AuthSignup = () => {

    const { username, number, email, password, confirmPassword, authDispatch } = useAuth();

    const handleNumberChange = (e) => {
        isNumberValid = validateNumber(e.target.value);
        if(isNumberValid) {
            console.log("Valid Input");
            authDispatch({
                type: "NUMBER",
                payload: e.target.value
            })
        } else {
            console.log("Invalid Number")
        }
    };

    const handleNameChange = (e) => {
        isNameValid = validateName(e.target.value);
        if(isNameValid) {
            console.log("Valid Input");
            authDispatch({
                type: "NAME",
                payload: e.target.value
            })
        } else  {
            console.log("Invalid Name");
        }
    };

      const handleEmailChange = (e) => {
        isEmailValid = validateEmail(e.target.value);
        if(isEmailValid) {
            console.log("Valid Input");
            authDispatch({
                type: "EMAIL",
                payload: e.target.value
            })
        } else {
            console.log("Invalid Email");
        }
    };

      const handlePasswordChange = (e) => {
        isPasswordValid = validatePassword(e.target.value);
        if(isPasswordValid) {
            console.log("Valid Input");
            authDispatch({
                type: "PASSWORD",
                payload: e.target.value
            })
        } else {
            console.log("Invalid Password");
        }
    };

      const handleConfirmPasswordChange = (e) => {
        isConfirmPasswordValid = validatePassword(e.target.value);
        if(isConfirmPasswordValid) {
            console.log("Valid Input");
            authDispatch({
                type: "CONFIRM_PASSWORD",
                payload: e.target.value
            })
        } else {
            console.log("Invalid Password");
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(
            isNumberValid && 
            isNameValid && 
            isEmailValid && 
            isPasswordValid && 
            isConfirmPasswordValid) {
            signupHandler(username, number, email, password);
        }
        authDispatch({
            type: "CLEAR_USER_DATA"
        })
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleFormSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Mobile Number <span className="asterisk">*</span>
                    </label>
                    <input 
                        defaultValue={number}
                        type="number"
                        className="auth-input"
                        maxLength="10"
                        placeholder="Enter Mobile Number"
                        required
                        onChange={handleNumberChange}
                    />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Name <span className="asterisk">*</span>
                    </label>
                    <input 
                        className="auth-input"
                        defaultValue={username}
                        placeholder="Enter Name"
                        required
                        onChange={handleNameChange}
                    />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Email <span className="asterisk">*</span>
                    </label>
                    <input 
                        className="auth-input"
                        type="email"
                        defaultValue={email}
                        placeholder="Enter Email"
                        required
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Password <span className="asterisk">*</span>
                    </label>
                    <input 
                        className="auth-input"
                        type="password"
                        placeholder="Enter Password"
                        required
                        defaultValue={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Confirm Password <span className="asterisk">*</span>
                    </label>
                    <input 
                        className="auth-input"
                        defaultValue={confirmPassword}
                        type="password"
                        placeholder="Enter Password"
                        required
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">Submit</button>
                </div>
            </form>
        </div>
    );
};