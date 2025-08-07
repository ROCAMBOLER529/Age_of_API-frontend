import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyNameOfBuildingLink from "./comp/ModifyNameOfBuildingLink";

const ModifyNameOfBuilding = () => {
    const [name, setName] = useState('');

    const [newName, setNewName] = useState('');

    return (
        <body>
            <h1>Modify name of building</h1>
            <label>https://age-of-api-backend.onrender.com/api/buildings/byName/{name}</label>
            <input type="text" placeholder='ej. "House"' onChange={(e) => setName(e.target.value)}/>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>New name: </label>
                            <input type="text" placeholder='ej. "Hut"' onChange={(e) => setNewName(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/buildings" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyNameOfBuildingLink 
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

export default ModifyNameOfBuilding;
