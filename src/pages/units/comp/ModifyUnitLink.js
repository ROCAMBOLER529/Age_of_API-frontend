import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const ModifyUnitLink = stats => {
    let { name, newName, introduced, type, age } = stats;

    const params = new URLSearchParams();
    params.append('name', newName);
    params.append('introduced', introduced);
    params.append('type', type);
    params.append('age', parseInt(age));

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/units/updateInfoOfUnit/${name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Unit has been updated!');
                console.log(data);
            } else {
                alert("Unit couldn't been updated");
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }
    };
        return (
            <TryItLink className="button" onClick={llamadaAlPut} to="/units" activeStyle>Modify Unit</TryItLink>
        );
    }

export default ModifyUnitLink;
