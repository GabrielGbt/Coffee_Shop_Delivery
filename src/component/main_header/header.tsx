import { HeaderContainer } from "./header_styles";

import logoCoffee from '../../assets/Logo.png';
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react/dist/icons/ShoppingCart";
import { MapPin } from "@phosphor-icons/react";

export function Header() {
    return (
        <>
        <HeaderContainer>
            <nav>
                <div id="logoCoffeeContainer">
                    <NavLink to={"/"}>
                        <img src={logoCoffee} />
                    </NavLink>
                </div>
                <div className="botons">
                    <div className="locationContainer" >
                        <MapPin size={27} /> 
                        <span>São paulo, SP</span>
                    </div>
                    <NavLink to={"/checkout"} className="cartLink">
                        <ShoppingCart size={24} />
                    </NavLink>
                </div>
                
            </nav>
        </HeaderContainer>
        </>
    )
}