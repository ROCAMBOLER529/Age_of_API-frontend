import React, { useEffect, useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import "../../styles/estilos.css";
import LogOutLink from "./comp/LogOutLink";

const Account = () => {
    const user = localStorage.getItem('user');

    const [username, setUsername] = useState('');
    const [rol, setRol] = useState('');
    const [banned, settBanned] = useState('');

    const loadUserData = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/usuarios/byName/${user}`);

            const value = (await res.json())[0];
            setUsername(value.name);
            setRol(value.rol);
            settBanned(value.banned === true ? "Yes" : "No");
        } catch(e) {
            alert('Failed to load user');
        }
    }

    loadUserData();

    return (
        <body>
            <h1>Account settings</h1>
            <div>
                <tab>
                    <tr>
                        <td>Name: </td>
                        <td></td>
                        <td>{username}</td>
                    </tr>
                    <tr>
                        <td>Rol: </td>
                        <td></td>
                        <td>{rol}</td>
                    </tr>
                    <tr>
                        <td>Banned: </td>
                        <td></td>
                        <td>{banned}</td>
                    </tr>
                    <tr>
                        <NavLink className="button" to="/" activeStyle>Back</NavLink>
                        <td></td>
                        <LogOutLink />
                    </tr>
                </tab>
            </div>
        </body>
    );
}

export default Account;