import { useEffect } from "react";
import { LoginButton } from "../components/LoginButton";
import { LogoutButton } from "../components/LogoutButton";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { fetchUser } from "../store/actions/userActions";

export function Main() {
    const dispatch = useAppDispatch();
    const authSelector = useAppSelector(state => state.auth);

    useEffect(()=>{
        dispatch(fetchUser())
    }, [dispatch])

    return(
        <>
            {authSelector.isAuth ? 
            <div className="logged">
                <p>{authSelector.username}</p>
                <LogoutButton />
            </div>
            : <LoginButton />
            }
            <div className="1">
                Главная
            </div>
        </>
    )
}