import React from "react"
import { Link } from "react-router-dom";
import { Particles } from "../components/Particles";
import { useAppDispatch, useAppSelector } from "../hook/redux"
import { IUser } from "../models/models";
import { register } from "../store/actions/authActions"
import style from '../styles/Register.module.scss'

export function Register() {
    const dispatch = useAppDispatch();
    const userSelector = useAppSelector(state => state.users);
    
    const loginSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const form = new FormData(event.target as HTMLFormElement);
        if (form.get('password') !== form.get('passwordAccept')) {
            alert('Пароли не совпадают. Повторите')
        } else if (Object.keys(form.values()).map(e => e === null || ''))
            alert('Заполните все поля!')
        else {
            const newUser: IUser = {
                id: userSelector.user[userSelector.user.length - 1].id + 1,
                name: form.get('username') as string,
                email: form.get('email') as string,
                password: form.get('password') as string,
                role: form.get('role') as string
            }
            dispatch(register(newUser));
            alert('Вы успешно зарегистрировались!')
            window.location.href = '/'
        }
    }

    const event = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return(
        <div className={style.register}>
            <div className={style.createAccount}>
                <p>Создание нового аккаунта</p> 
            </div>
            <form
                className={style.mainForm}
                onSubmit={loginSubmitHandler}
                autoComplete={'off'}
            >
                <div className={style.formField}>
                    <label htmlFor="username">Логин</label>
                    <input type="text" id='username' name='username' onChange={event}/>
                </div>
                
                <div className={style.formField}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' onChange={event}/>
                </div>

                <div className={style.formField}>
                    <label htmlFor="password">Пароль</label>
                    <input type="text" id='password' name='password' onChange={event}/>
                </div>

                <div className={style.formField}>
                    <label htmlFor="passwordAccept">Подтвердите пароль</label>
                    <input type="text" id='passwordAccept' name='passwordAccept' onChange={event}/>
                </div>

                <button type="submit">Зарегистрироваться</button>
            </form>
            <div className={style.haveAccount}>
                <p>Уже есть аккаунт?</p>
                <button>
                    <Link to='/auth'>
                        Войти
                    </Link>
                </button>
            </div>
            <Particles /> 
        </div>
    )
}