import React from "react";
import { NavLink as TryItLink } from "../components/TryItLink";
import "../styles/estilos.css";

const DeleteLink = (stats) => {
    const { route, object } = stats

    const llamadaAlDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/${route}/${object}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (res.ok) {
                alert('Arafue el objeto');
            } else {
                alert('No se fue el animal');
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }

    };

    return (
        <TryItLink className="button" onClick={llamadaAlDelete} activeStyle>Try It</TryItLink>
    );
}

export default DeleteLink;