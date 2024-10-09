import { Outlet } from "react-router-dom";

import { Header } from "../component/main_header/header";
import { LayoutContainer } from "./defLayout_styles";


export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}