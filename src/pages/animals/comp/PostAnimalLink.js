import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const PostAnimalLink = (stats) => {
    let { name, introduced, canAttack, hp, meleeArmor, pierceArmor, speed, los, food } = stats
    
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('introduced', introduced);
    params.append('canAttack', canAttack == "on" ? true : false);
    params.append('hp', parseInt(hp));
    params.append('meleeArmor', parseInt(meleeArmor));
    params.append('pierceArmor', parseInt(pierceArmor));
    params.append('speed', parseFloat(speed));
    params.append('los', parseFloat(los));
    params.append('food', parseInt(food));

    const llamadaAlPost = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/animals/updateAnimal/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Animal nuevooo!');
                console.log(data);
                
            } else {
                alert('No nació el animal :c');
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }

    };

    return (
        <TryItLink className="button" onClick={llamadaAlPost} to="/animals" activeStyle>Add Animal</TryItLink>
    );
}

export default PostAnimalLink;