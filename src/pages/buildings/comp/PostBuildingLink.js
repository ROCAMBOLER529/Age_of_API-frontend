import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const PostBuildingLink = (stats) => {
    let { name, type, introduced, age, drop_off_resources, can_hold_units, food, wood, stone, gold, time_in_seconds, width, height, hp, melee_armor, pierce_armor, line_of_sight } = stats
    
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('type', type);
    params.append('introduced', introduced);
    params.append('age', parseInt(age));
    params.append('drop_off_resources', drop_off_resources == "on" ? true : false);
    params.append('can_hold_units', can_hold_units == "on" ? true : false);

    params.append('food', parseInt(food));
    params.append('wood', parseInt(wood));
    params.append('stone', parseInt(stone));
    params.append('gold', parseInt(gold));

    params.append('time_in_seconds', parseInt(time_in_seconds));
    params.append('width', parseInt(width));
    params.append('height', parseInt(height));

    params.append('hp', parseInt(hp));
    params.append('melee_armor', parseInt(melee_armor));
    params.append('pierce_armor', parseInt(pierce_armor));
    params.append('line_of_sight', parseFloat(line_of_sight));
    

    const llamadaAlPost = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/buildings/addSimpleBuilding/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Building nuevooo!');
                console.log(data);
                
            } else {
                alert('No se construyo el edificio :c');
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }

    };

    return (
        <TryItLink className="button" onClick={llamadaAlPost} to="/buildings" activeStyle>Add Building</TryItLink>
    );
}

export default PostBuildingLink;