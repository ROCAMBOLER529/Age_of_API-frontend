import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const PostNatureLink = (stats) => {
    let { name, introduced, hp, food, wood, stone, gold } = stats
    
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('introduced', introduced);
    params.append('hp', parseInt(hp));
    params.append('food', parseInt(food));
    params.append('wood', parseInt(wood));
    params.append('stone', parseInt(stone));
    params.append('gold', parseInt(gold));

    const llamadaAlPost = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/nature/addNature/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: params.toString()
            });

            if (res.ok) {
                const data = await res.json();
                alert('Nature nuevooo!');
                console.log(data);
                
            } else {
                alert('No nació el natural :c');
            }
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }

    };

    return (
        <TryItLink className="button" onClick={llamadaAlPost} to="/nature" activeStyle>Add Nature</TryItLink>
    );
}

export default PostNatureLink;