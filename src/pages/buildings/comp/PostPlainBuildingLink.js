import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const PostPlainBuildingLink = (stats) => {
    let { name, type, introduced, age } = stats
    
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('type', type);
    params.append('introduced', introduced);
    params.append('age', parseInt(age));    

    const llamadaAlPost = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/buildings/addPlainBuilding/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                alert('Building nuevooo!');                
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

export default PostPlainBuildingLink;