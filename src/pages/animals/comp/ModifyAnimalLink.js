import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const ModifyAnimalLink = stats => {
    let { name, introduced, canAttack, hp, meleeArmor, pierceArmor, speed, los, food} = stats;

    const params = new URLSearchParams();
    params.append('introduced', introduced);
    params.append('canAttack', canAttack == "on" ? true : false);
    params.append('hp', parseInt(hp));
    params.append('meleeArmor', parseInt(meleeArmor));
    params.append('pierceArmor', parseInt(pierceArmor));
    params.append('speed', parseFloat(speed));
    params.append('los', parseFloat(los));
    params.append('food', parseInt(food));

    const llamadaAlPut = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/animals/updateAnimal/${name}`, {
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
            alert('Hay algo raro en: ', err);
        }
    };
        return (
            <TryItLink className="button" onClick={llamadaAlPut} to="/animals" activeStyle>Modify Animal</TryItLink>
        );
    }

export default ModifyAnimalLink;
