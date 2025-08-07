import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyBuildingLink from "./comp/ModifyBuildingLink";

const ModifyBuilding = () => {
    const [name, setName] = useState('');
    
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [hp, setHp] = useState('');
    const [meleeArmor, setMeleeArmor] = useState('');
    const [pierceArmor, setPierceArmor] = useState('');
    const [los, setLineOfSight] = useState('');

    const getCurrentStats = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/buildings/byName/${name}`);

            const value = (await res.json()).data
            
            setWidth(value.statistics.size.width);
            setHeight(value.statistics.size.width);
            setHp(value.statistics.hp);
            setMeleeArmor(value.statistics.melee_armor);
            setPierceArmor(value.statistics.pierce_armor);
            setLineOfSight(value.statistics.line_of_sight);

        } catch(e) {
            alert("Animal may not exist");
        }
    }    

    return (
        <body>
            <h1>Modify stats of a building</h1>
            <label>https://age-of-api-backend.onrender.com/api/buildings/updateStatsOfBuilding/{name}</label>
            <input type="text" placeholder='ej. "House"' onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={getCurrentStats}>Get Current stats</button>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Width: </label>
                            <input type="number" placeholder='ej. "4"' value={width} onChange={(e) => setWidth(e.target.value)}/>

                            <label>Height: </label>
                            <input type="number" placeholder='ej. "4"' value={height} onChange={(e) => setHeight(e.target.value)}/>
                        </td>
                        <td>
                            <label>HP: </label>
                            <input type="text" placeholder='ej. "900"' value={hp} onChange={(e) => setHp(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Melee armor: </label>
                            <input type="number" placeholder='ej. "0"' value={meleeArmor} onChange={(e) => setMeleeArmor(e.target.value)}/>

                            <label>Pierce armor: </label>
                            <input type="number" placeholder='ej. "0"' value={pierceArmor} onChange={(e) => setPierceArmor(e.target.value)}/>
                        </td>
                        <td>
                            <label>Line of sight: </label>
                            <input type="number" placeholder='ej. "11.5"' value={los} onChange={(e) => setLineOfSight(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/buildings" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyBuildingLink 
                                name={name}
                                width={width}
                                height={height}
                                hp={hp}
                                meleeArmor={meleeArmor}
                                pierceArmor={pierceArmor}
                                los={los}
                            />
                        </td>
                    </tr>
                </table>      
            </form>
        </body>
    );
}

export default ModifyBuilding;
