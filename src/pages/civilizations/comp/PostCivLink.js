import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const PostCivLink = (stats) => {
    let { common, historical, introduced, architecture, continent } = stats
    
    const params = new URLSearchParams();
    params.append('common', common);
    params.append('historical', historical);
    params.append('introduced', introduced);
    params.append('architecture', architecture);
    params.append('continent', continent);

    const llamadaAlPost = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/civilizations/addPlainCiv/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                alert('Civ nuevooo!');                
            } else {
                alert('No se construyo el edificio :c');
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }

    };

    return (
        <TryItLink className="button" onClick={llamadaAlPost} to="/civilizations" activeStyle>Add Civilization</TryItLink>
    );
}

export default PostCivLink;