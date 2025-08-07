import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const LogOutLink = datos => {

    const llamadaAlPost = async () => {
        localStorage.removeItem('token');
    };

    return (
        <TryItLink className="button" onClick={llamadaAlPost} to="/" activeStyle>LogOut</TryItLink>
    );
}

export default LogOutLink;