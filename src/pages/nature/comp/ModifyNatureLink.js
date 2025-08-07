import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const ModifyNatureLink = stats => {
    let { name, introduced, hp } = stats;

    const params = new URLSearchParams();
    params.append('introduced', introduced);
    params.append('hp', parseInt(hp));

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/nature/updateInfoOfNature/${name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Nature has been updated!');
                console.log(data);
                
            } else {
                alert("Nature couldn't been updated");
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }
    };
        return (
            <TryItLink className="button" onClick={llamadaAlPut} to="/nature" activeStyle>Modify Nature</TryItLink>
        );
    }

export default ModifyNatureLink;
