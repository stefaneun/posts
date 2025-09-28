import React from "react";
import { useNavigate, Outlet } from "react-router";
import * as SC from "./styles";
import { Container } from "../../components/ui/container";
import { useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

export const Root = () => {

    const { user } = useSelector((state) => state.auth);

    const navigate = useNavigate('/');

    const dispatch = useDispatch();

    const exitBtnHandler = () => {
        dispatch(logout())
        navigate('/');
    }

    return (<>
        <Container>
            <SC.Menu>
                <SC.MenuItem to="/">Главная</SC.MenuItem>
                <SC.MenuItem to="/posts">Список постов</SC.MenuItem>
                {user && <SC.MenuItem to="/posts/add">Добавить пост</SC.MenuItem>}
                {!user && <SC.MenuItem to="/auth">Авторизация</SC.MenuItem>}
                {!user && <SC.MenuItem to="/registration">Регистрация</SC.MenuItem>}
                {user && <SC.MenuLeft onClick={exitBtnHandler}>Выйти</SC.MenuLeft>}
        </SC.Menu>

    </Container >
        <Outlet />
    </>
    )
}