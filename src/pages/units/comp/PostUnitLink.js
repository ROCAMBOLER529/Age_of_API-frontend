import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const PostUnitLink = (stats) => {
    let { name, introduced, age, type, at, food, wood, stone, gold, time_in_seconds, hp, meleeArmor, pierceArmor, rate, speed, los } = stats;
    
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('introduced', introduced);
    params.append('age', parseInt(age));
    params.append('type', type);
    params.append('at', at);
    params.append('food', parseInt(food));
    params.append('wood', parseInt(wood));
    params.append('stone', parseInt(stone));
    params.append('gold', parseInt(gold));
    params.append('time_in_seconds', parseInt(time_in_seconds));
    params.append('hp', parseInt(hp));
    params.append('meleeArmor', parseInt(meleeArmor));
    params.append('pierceArmor', parseInt(pierceArmor));
    params.append('rate', parseFloat(rate));
    params.append('speed', parseFloat(speed));
    params.append('los', parseFloat(los));
    

    const llamadaAlPost = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/units/addUnit/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                alert('New unit!');                
            } else {
                alert('No se construyo el edificio :c');
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }

    };

    return (
        <TryItLink className="button" onClick={llamadaAlPost} to="/units" activeStyle>Add Unit</TryItLink>
    );
}

export default PostUnitLink;