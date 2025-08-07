import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const PostTechLink = (stats) => {
    let { name, introduced, age, effect, at, time_in_seconds, food, wood, stone, gold } = stats

    const params = new URLSearchParams();
    params.append('name', name);
    params.append('introduced', introduced);
    params.append('age', parseInt(age));
    params.append('effect', effect);

    params.append('effect', at);
    params.append('effect', time_in_seconds);

    params.append('effect', food);
    params.append('effect', wood);
    params.append('effect', stone);
    params.append('effect', gold);

    const llamadaAlPost = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/tech/addSimpleTech/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                alert('New tech uploaded!');                
            } else {
                alert('No se construyo el edificio :c');
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }

    };

    return (
        <TryItLink className="button" onClick={llamadaAlPost} to="/techs" activeStyle>Add Tech</TryItLink>
    );
}

export default PostTechLink;