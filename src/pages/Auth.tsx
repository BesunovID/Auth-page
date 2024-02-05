import React from "react"
import { Link } from "react-router-dom";
import { Particles } from "../components/Particles";
import { useAppDispatch } from "../hook/redux";
import { login } from "../store/actions/authActions";
import style from '../styles/Auth.module.scss'

export function Auth() {
    const dispatch = useAppDispatch();

    const loginSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        
        const form = new FormData(event.target as HTMLFormElement);
        const result = dispatch(login(form.get('username') as string, form.get('password') as string))
        result.then((res) => {
            switch(res){
                case 'success': 
                    window.location.href = '/'
                    break
                case 'no user':
                    alert('Такого пользователя не существует')
                    break
                case 'incorrect password':
                    alert('Пароль не верный')
                    break
                case 'server error':
                    alert('Ошибка сервера. Попробуйте позже')
                    break
            }
        })
    }

    return(
        <div className={style.login}>
            <div className={style.loginHeader}>
                <p>Авторизация</p> 
            </div>
            <form
                className={style.mainForm}
                onSubmit={loginSubmitHandler}
                autoComplete={'off'}
            >
                <div className={style.formField}>
                    <label htmlFor="username">Логин</label>
                    <input type="text" name='username'/>
                </div>
                <div className={style.formField}>
                    <label htmlFor="password">Пароль</label>
                    <input type="text" name='password'/>
                </div>
                <button type="submit">
                    Войти
                </button>
            </form>
            <div className={style.noAccount}>
                <p>Нет аккаунта?</p>
                <button className={style['reg-btn']}>
                    <Link to='/registration'>
                        Зарегистрироваться
                    </Link>
                </button>
            </div>
            <Particles /> 
        </div>
    )
}