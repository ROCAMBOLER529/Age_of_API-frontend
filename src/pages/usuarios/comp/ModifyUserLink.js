import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const ModifyUserLink = stats => {
    let { name, newName, rol, banned } = stats;

    const params = new URLSearchParams();
    params.append('name', newName);
    params.append('rol', rol);
    params.append('banned', banned === "on" ? true : false);

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/usuarios/updateUsuario/${name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('User has been updated!');
                console.log(data);
                
            } else {
                alert("User couldn't been updated");
            }
        } catch(err) {
            alert('Something weird in: ', err);
        }
    };

    return (
        <TryItLink className="button" onClick={llamadaAlPut} to="/users" activeStyle>Modify User</TryItLink>
    )
}

export default ModifyUserLink;