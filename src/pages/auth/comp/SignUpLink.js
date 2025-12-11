import React from "react";
import { NavLink as TryItLink } from "../../../components/TryItLink";
import "../../../styles/estilos.css";

const SignUpLink = datos => {
    let { name, password } = datos;

    const params = new URLSearchParams();
    params.append('nombre', name);
    params.append('clave', password);

    const llamadaAlPost = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/auth/signUp/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: params.toString()
            })
            .then(res => res.json()
            .then(data => {
                alert("You logged in succesfully");
                console.log(data.data.token);
                
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('user', name);
                })
            )
            .catch(err =>
                alert("You couldn't login, maybe you don't have an account?")
            )

            window.location.reload();
            
        } catch(err) {
            alert('Hay algo raro en: ', err);
        }
    };

    return (
        <TryItLink className="button" onClick={llamadaAlPost} to="/" activeStyle>SignUp</TryItLink>
    );
}


export default SignUpLink;
