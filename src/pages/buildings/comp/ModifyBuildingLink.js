import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const ModifyBuildingLink = stats => {
    let { name, width, height, hp, meleeArmor, pierceArmor, los} = stats;

    const params = new URLSearchParams();
    params.append('width', parseInt(width));
    params.append('height', parseInt(height));
    params.append('hp', parseInt(hp));
    params.append('melee_armor', parseInt(meleeArmor));
    params.append('pierce_armor', parseInt(pierceArmor));
    params.append('line_of_sight', parseFloat(los));    

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/buildings/updateStatsOfBuilding/${name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Building has been updated!');
                console.log(data);
                
            } else {
                alert("Building couldn't been updated");
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }
    };
        return (
            <TryItLink className="button" onClick={llamadaAlPut} to="/buildings" activeStyle>Modify Building</TryItLink>
        );
    }

export default ModifyBuildingLink;
