import React from "react"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook/redux"
import { UserRole } from "../models/models";
import { register } from "../store/actions/authActions"
import { fetchUser } from "../store/actions/userActions";

export function Register() {
    const dispatch = useAppDispatch();
    const userSelector = useAppSelector(state => state.users);
    
    const loginSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const form = new FormData(event.target as HTMLFormElement);
        if (form.get('password') !== form.get('passwordAccept')) {
            alert('Пароли не совпадают. Повторите')
        } else {
            const newUser = {
                id: userSelector.user[userSelector.user.length - 1].id + 1,
                name: form.get('username') as string,
                email: form.get('email') as string,
                password: form.get('password') as string,
                role: UserRole.user
            }
            dispatch(register(newUser));
            alert('Вы успешно зарегистрировались!')
            window.location.href = '/'
        }
    }

    const event = (e: React.FormEvent) => {
        e.preventDefault()
    }

    useEffect(()=>{
        dispatch(fetchUser())
    }, [dispatch])

    return(
        <form
            className="mainForm"
            onSubmit={loginSubmitHandler}
        >
            <label htmlFor="username">Логин</label>
            <input type="text" id='username' name='username' onChange={event}/>

            <label htmlFor="email">Email</label>
            <input type="text" id='email' name='email' onChange={event}/>

            <label htmlFor="password">Пароль</label>
            <input type="text" id='password' name='password' onChange={event}/>

            <label htmlFor="passwordAccept">Подтвердите пароль</label>
            <input type="text" id='passwordAccept' name='passwordAccept' onChange={event}/>

            <input type="submit" value='Зарегистрироваться' />
        </form>
    )
}