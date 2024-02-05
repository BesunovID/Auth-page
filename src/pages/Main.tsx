import { Link } from "react-router-dom";
import { Particles } from "../components/Particles";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import {authSlice} from "../store/slices/authSlice";
import style from '../styles/Main.module.scss'

export function Main() {
    const dispatch = useAppDispatch();
    const authSelector = useAppSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(authSlice.actions.logout())
    }

    return(
        <div className={style.container}>
            {authSelector.isAuth ? 
            <div className={style.logged}>
                <p className={style.username}>Добро пожаловать, {authSelector.username}!</p>
                <button className={style['logout-btn']} onClick={handleLogout}>
                    <Link to='/'>
                        Выйти
                    </Link>
                </button>
            </div>
            : 
            <button className={style['login-btn']}>
                <Link to='/auth'>
                    Войти
                </Link>
            </button>
            }
            <div className={style['main-content']}>
                Главная
            </div>
            <Particles /> 
        </div>
    )
}