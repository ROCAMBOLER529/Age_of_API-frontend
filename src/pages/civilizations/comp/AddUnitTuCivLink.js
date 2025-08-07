import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";


const AddUnitToCivLink = stats => {
    let { name, unit } = stats;

    const params = new URLSearchParams();
    params.append('units', unit);

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/civilizations/addUnitsToCiv/${name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Civ has been updated!');
                console.log(data);
                
            } else {
                alert("Civ couldn't been updated");
            }
        } catch(err) {
            alert('Something weird in: ', err);
        }
    };

    return (
        <TryItLink className="button" onClick={llamadaAlPut} to="/civilizations" activeStyle>Modify Civilizations</TryItLink>
    )
}

export default AddUnitToCivLink;