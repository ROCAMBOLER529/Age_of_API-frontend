import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyNameOfAnimalLink from "./comp/ModifyAnimalLink";

const ModifyNameOfAnimal = () => {
    const [name, setName] = useState('');

    const [newName, setNewName] = useState('');

    return (
        <body>
            <h1>Modify name of an animal</h1>
            <label>https://age-of-api-backend.onrender.com/api/animals/updateNameOfAnimal/{name}</label>
            <input type="text" placeholder='ej. "Gazelle"' onChange={(e) => setName(e.target.value)}/>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>New name: </label>
                            <input type="text" placeholder='ej. "Bear"' onChange={(e) => setNewName(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/animals" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyNameOfAnimalLink 
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

export default ModifyNameOfAnimal;
