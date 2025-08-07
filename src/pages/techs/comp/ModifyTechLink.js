import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";


const ModifyTechLink = stats => {
    let { name, newName } = stats;

    const params = new URLSearchParams();
    params.append('name', newName);

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/tech/updateNameOfTech/${name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Tech has been updated!');
                console.log(data);
                
            } else {
                alert("Tech couldn't been updated");
            }
        } catch(err) {
            alert('Something weird in: ', err);
        }
    };

    return (
        <TryItLink className="button" onClick={llamadaAlPut} to="/techs" activeStyle>Modify Tech</TryItLink>
    )
}

export default ModifyTechLink;