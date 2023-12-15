import { Link } from "react-router-dom";

export function LoginButton() {
    return(
        <button className="login-btn">
            <Link to='/auth'>
                Войти
            </Link>
        </button>
    )
}