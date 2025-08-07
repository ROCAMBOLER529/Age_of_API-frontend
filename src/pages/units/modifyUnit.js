import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyUnitLink from "./comp/ModifyUnitLink";

const ModifyUnit = () => {
    const [name, setName] = useState('');
    
    const [newName, setNewName] = useState('');
    const [introduced, setIntroduced] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');

    const getCurrentStats = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/units/byName/${name}`);

            const value = (await res.json()).data
            
            setIntroduced(value.introduced);
            setType(value.type);
            setAge(value.age);

        } catch(e) {
            alert("Unit may not exist");
        }
    }


    return (
        <body>
            <h1>Modify info of unit</h1>
            <label>https://age-of-api-backend.onrender.com/api/units/updateInfoOfUnit/{name}</label>
            <input type="text" placeholder='ej. "Slinger"' onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={getCurrentStats}>Get Current stats</button>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>introduced in: </label>
                            <input type="text" placeholder='ej. "Age of Empires"' value={introduced} onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Type: </label>
                            <input type="text" placeholder='ej. "Academy"' value={type} onChange={(e) => setType(e.target.value)}/>
                        </td>
                        <td>
                            <label>Age unlocked: </label>
                            <input type="number" placeholder='ej. "3"' value={age} onChange={(e) => setAge(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/units" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyUnitLink 
                                name={name}
                                newName={newName}
                                introduced={introduced}
                                type={type}
                                age={age}
                            />
                        </td>
                    </tr>
                </table>
            </form>
        </body>
    );
}

export default ModifyUnit;
