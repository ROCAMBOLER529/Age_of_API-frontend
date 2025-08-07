import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyUserLink from "./comp/ModifyUserLink";

const ModifyUser = () => {
    const [name, setName] = useState('');

    const [newName, setNewName] = useState('');
    const [password, setPassword] = useState('')
    const [rol, setRol] = useState('');
    const [banned, setBanned] = useState('');

    const getCurrentStats = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/usuarios/byName/${name}`);

            const value = (await res.json())[0];
            
            console.log(value.password);
            
            setPassword(value.password);            
            setRol(value.rol);
            setBanned(value.banned);

        } catch(e) {
            alert("User may not exist");
        }
    }

    return (
        <body>
            <h1>Modify user</h1>
            <label>https://age-of-api-backend.onrender.com/api/animals/updateNameOfAnimal/{name}</label>
            <input type="text" placeholder='ej. "ROCAMBOLER529"' onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={getCurrentStats}>Get Current stats</button>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>New name: </label>
                            <input type="text" placeholder='ej. "ROCAMBOLER529"' onChange={(e) => setNewName(e.target.value)}/>
                        </td>
                        <td>
                            <label>New password: </label>
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Rol: </label>
                            <input type="text" placeholder='ej. "std"' value={rol} onChange={(e) => setRol(e.target.value)}/>
                        </td>
                        <td>
                            <label>Banned: </label>
                            <input type="checkbox" value={banned} onChange={(e) => setBanned(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/users" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyUserLink 
                                name={name}
                                newName={newName}
                                password={password}
                                rol={rol}
                                banned={banned}
                            />
                        </td>
                    </tr>
                </table>        
            </form>
        </body>
    );
}

export default ModifyUser;
