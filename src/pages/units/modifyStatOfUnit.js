import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyStatOfUnitLink from "./comp/ModifyStatOfUnitLink";

const ModifyStatOfUnit = () => {
    const [name, setName] = useState('');
    
    const [hp, setHp] = useState('');
    const [rate, setRate] = useState('');
    const [meleeArmor, setMeleeArmor] = useState('');
    const [pierceArmor, setPierceArmor] = useState('');
    const [los, setLineOfSight] = useState('');
    const [speed, setSpeed] = useState('');

    const getCurrentStats = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/units/byName/${name}`);

            const value = (await res.json()).data
            
            setHp(value.statistics.hp);
            setRate(value.statistics.rate);
            setMeleeArmor(value.statistics.melee_armor);
            setPierceArmor(value.statistics.pierce_armor);
            setLineOfSight(value.statistics.speed);
            setSpeed(value.statistics.line_of_sight);

        } catch(e) {
            alert("Animal may not exist");
        }
    }

    return (
        <body>
            <h1>Modify stats of unit</h1>
            <label>https://age-of-api-backend.onrender.com/api/units/updateStatsOfUnit/{name}</label>
            <input type="text" placeholder='ej. "Slinger"' onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={getCurrentStats}>Get Current stats</button>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>HP: </label>
                            <input type="number" placeholder='ej. "40"' value={hp} onChange={(e) => setHp(e.target.value)}/>
                        </td>
                        <td>
                            <label>Rate: </label>
                            <input type="number" placeholder='ej. "1.4"' value={rate} onChange={(e) => setRate(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Melee armor: </label>
                            <input type="number" placeholder='ej. "0"' value={meleeArmor} onChange={(e) => setMeleeArmor(e.target.value)}/>
                        </td>
                        <td>
                            <label>Pierce armor: </label>
                            <input type="number" placeholder='ej. "0"' value={pierceArmor} onChange={(e) => setPierceArmor(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Speed: </label>
                            <input type="number" placeholder='ej. "1"' value={speed} onChange={(e) => setSpeed(e.target.value)}/>
                        </td>
                        <td>
                            <label>Line of sight: </label>
                            <input type="number" placeholder='ej. "8"' value={los} onChange={(e) => setLineOfSight(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/units" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyStatOfUnitLink 
                                name={name}
                                hp={hp}
                                rate={rate}
                                meleeArmor={meleeArmor}
                                pierceArmor={pierceArmor}
                                los={los}
                                speed={speed}
                            />
                        </td>
                    </tr>
                </table>        
            </form>
        </body>
    );
}

export default ModifyStatOfUnit;
