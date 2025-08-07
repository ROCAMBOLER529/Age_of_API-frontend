import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const ModifyStatOfUnitLink = stats => {
    let { name, hp, rate, meleeArmor, pierceArmor, speed, los} = stats;

    const params = new URLSearchParams();
    params.append('hp', parseInt(hp));
    params.append('rate', parseFloat(rate));
    params.append('melee_armor', parseInt(meleeArmor));
    params.append('pierce_armor', parseInt(pierceArmor));
    params.append('speed', parseFloat(speed));
    params.append('line_of_sight', parseFloat(los));

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/units/updateStatsOfUnit/${name}`, {
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

export default ModifyStatOfUnitLink;
