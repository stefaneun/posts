import React from "react";
import { Outlet } from "react-router";

export const Root = () => {

    return (
        <>
            <div>Меню</div>
            <Outlet />
        </>
    )
}