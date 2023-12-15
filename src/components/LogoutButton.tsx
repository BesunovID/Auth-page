import { Link } from "react-router-dom";
import { useAppDispatch } from "../hook/redux";
import {authSlice} from "../store/slices/authSlice";

export function LogoutButton() {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(authSlice.actions.logout())
    }

    return(
        <button className="login-btn" onClick={handleLogout}>
            <Link to='/'>
                Выйти
            </Link>
        </button>
    )
}