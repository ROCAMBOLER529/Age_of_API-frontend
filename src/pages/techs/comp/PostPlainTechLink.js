import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const PostPlainTechLink = (stats) => {
    let { name, introduced, age, effect } = stats
    
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('introduced', introduced);
    params.append('age', parseInt(age));
    params.append('effect', effect);

    const llamadaAlPost = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(token);            
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/tech/addPlainTech/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                alert('New tech uploaded!');  
                const value = (await res.json());
                console.log(value);
                   
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

export default PostPlainTechLink;