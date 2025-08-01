import "./Auth.css";
import { loginHandler } from "../../services";
import { validateNumber, validatePassword } from "../../utils";
import { useAuth, useAlert } from "../../context";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {

    const { number, password, authDispatch } = useAuth();
    const { setAlert } = useAlert();

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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(isNumberValid && isPasswordValid) {
            const { accessToken, username }  = await loginHandler(number, password, setAlert);
            authDispatch({
            type: "SET_ACCESS_TOKEN",
            payload: accessToken
            });
            authDispatch({
                type: "SET_USER_NAME",
                payload: username
            });
        }
        authDispatch({
            type: "CLEAR_USER_DATA"
        });
        authDispatch({
            type: "SHOW_AUTH_MODAL",
        });
    };

    const handleTestCredentialsClick = async () => {
        const { accessToken, username }  = await loginHandler(9632587410, "Jaya921@#", setAlert);
        authDispatch({
            type: "SET_ACCESS_TOKEN",
            payload: accessToken
        });
        authDispatch({
            type: "SET_USER_NAME",
            payload: username
        });
        authDispatch({
            type: "CLEAR_USER_DATA"
        });
        authDispatch({
            type: "SHOW_AUTH_MODAL",
        });
    }

    return (
        <div className="auth-container">
            <form onSubmit={handleFormSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Mobile Number <span className="asterisk">*</span>{" "}
                    </label>
                    <input 
                        type="number"
                        defaultValue={number}
                        className="auth-input"
                        maxLength="10"
                        placeholder="Enter Mobile Number"
                        required
                        onChange={handleNumberChange}
                    />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">
                        Password <span className="asterisk">*</span>{" "}
                    </label>
                    <input 
                        className="auth-input"
                        type="password"
                        defaultValue={password}
                        placeholder="Enter Password"
                        required
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">Login</button>
                </div>
            </form>
            <div className="cta">
                <button className="button btn-outline-primary cursor-pointer" onClick={handleTestCredentialsClick}>
                    Login with Test Credentials
                </button>
            </div>
        </div>
    );
};