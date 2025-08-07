import React from "react";
import { NavLink as TryItLink } from "../components/TryItLink";
import "../styles/estilos.css";

const PutLink = (stats) => {
    const { route, object } = stats

    const llamadaAlPut = async () => {
        try {
            console.log(route);
            
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/${route}/${object}`, {
                method: 'PUT'
            });

            if (res.ok) {
                alert(`${object} has been updated`);
            } else {
                alert(`${object} couldn't been updated`);
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }

    };

    return (
        <TryItLink className="button" onClick={llamadaAlPut} activeStyle>Try It</TryItLink>
    );
}

export default PutLink;