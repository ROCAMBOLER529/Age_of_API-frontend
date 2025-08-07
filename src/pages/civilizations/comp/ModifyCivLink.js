import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const ModifyCivLink = stats => {
    let { name, historicalName, introduced, architecture, continent, newName, teamBonus } = stats;

    const params = new URLSearchParams();
    params.append('continent', continent);
    params.append('historical', historicalName);
    params.append('introduced', introduced);
    params.append('architecture', architecture);
    params.append('common', newName);
    params.append('team_bonus', teamBonus);

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/civilizations/updateCiv/${name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Civ has been updated!');
                console.log(data);
                
            } else {
                alert("Civ couldn't been updated");
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }
    };
        return (
            <TryItLink className="button" onClick={llamadaAlPut} to="/civilizations" activeStyle>Modify Civ</TryItLink>
        );
    }

export default ModifyCivLink;
