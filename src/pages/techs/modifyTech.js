import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyTechLink from "./comp/ModifyTechLink";

const ModifyTech = () => {
    const [name, setName] = useState('');

    const [newName, setNewName] = useState('');

    return (
        <body>
            <h1>Modify name of technology</h1>
            <label>https://age-of-api-backend.onrender.com/api/tech/updateNameOfTech/{name}</label>
            <input type="text" placeholder='ej. "Wheel"' onChange={(e) => setName(e.target.value)}/>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>New name: </label>
                            <input type="text" placeholder='ej. "Bronze Age"' onChange={(e) => setNewName(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/techs" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyTechLink 
                                name={name}
                                newName={newName}
                            />
                        </td>
                    </tr>
                </table>        
            </form>
        </body>
    );
}

export default ModifyTech;
