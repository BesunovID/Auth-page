
import React from "react"
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hook/redux";
import { login } from "../store/actions/authActions";

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
        <>
            <form
                className="mainForm"
                onSubmit={loginSubmitHandler}
            >
                <div className="userName">
                    <label htmlFor="username">Логин</label>
                    <input type="text" name='username'/>
                </div>
                <div className="password">
                    <label htmlFor="password">Пароль</label>
                    <input type="text" name='password'/>
                </div>
                <input type="submit" value='Войти' />
            </form>
            <p>или</p>
            <button className="reg-btn">
                <Link to='/registration'>
                    Зарегистрироваться
                </Link>
            </button>
        </>
    )
}