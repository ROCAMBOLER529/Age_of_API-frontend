import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import "../../styles/estilos.css";
import LogInLink from "./comp/LogInLink";

const LogIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <body>
            <form>
                <tr>
                    <td>
                        <t2>Log In</t2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Username: </label>
                        <input type="text" placeholder='ej. "ROCAMBOLER529"' onChange={(e) => setName(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Password: </label>
                        <input type="password" placeholder='ej. "adjaneidai2345"' onChange={(e) => setPassword(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="button" to="/" activeStyle>Back</NavLink>
                    </td>
                    <td>
                        <LogInLink name={name} password={password} />
                    </td>
                </tr>
            </form>
        </body>
    );
}

export default LogIn;