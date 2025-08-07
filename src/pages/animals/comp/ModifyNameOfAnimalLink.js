import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";


const ModifyNameOfAnimalLink = stats => {
    let { name, newName } = stats;

    const params = new URLSearchParams();
    params.append('name', newName);

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/animals/updateNameOfAnimal/${name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Animal has been updated!');
                console.log(data);
                
            } else {
                alert("Animal couldn't been updated");
            }
        } catch(err) {
            alert('Something weird in: ', err);
        }
    };

    return (
        <TryItLink className="button" onClick={llamadaAlPut} to="/animals" activeStyle>Modify Animal</TryItLink>
    )
}

export default ModifyNameOfAnimalLink;