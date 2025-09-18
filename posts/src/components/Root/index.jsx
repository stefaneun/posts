import React from "react";
import { Outlet } from "react-router";
import * as SC from "./styles";
import { Container } from "../../components/ui/container";

export const Root = () => {

    return (<>
        <Container>
            <SC.Menu>
                <SC.MenuItem to="/">Главная</SC.MenuItem>
                <SC.MenuItem to="/posts">Список постов</SC.MenuItem>
                <SC.MenuItem to="/posts/add">Добавить пост</SC.MenuItem>
                <SC.MenuItem to="/auth">Авторизация</SC.MenuItem>
                <SC.MenuItem to="/registration">Регистрация</SC.MenuItem>
            </SC.Menu>

        </Container>
        <Outlet />
    </>
    )
}