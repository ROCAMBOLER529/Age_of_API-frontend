import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyAnimalLink from "./comp/ModifyAnimalLink";

const ModifyAnimal = () => {
    const [name, setName] = useState('');
    
    const [introduced, setIntroduced] = useState('');
    const [canAttack, setIsHostile] = useState('');
    const [hp, setHp] = useState('');
    const [meleeArmor, setMeleeArmor] = useState('');
    const [pierceArmor, setPierceArmor] = useState('');
    const [speed, setSpeed] = useState('');
    const [los, setLineOfSight] = useState('');
    const [food, setFood] = useState('');

    const getCurrentStats = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/animals/getAnimalByName/${name}`);

            const value = (await res.json()).data
            
            setIntroduced(value.introduced);
            setIsHostile(value.canAttack);
            setHp(value.statistics.hp);
            setMeleeArmor(value.statistics.meleeArmor);
            setPierceArmor(value.statistics.pierceArmor);
            setSpeed(value.statistics.speed);
            setLineOfSight(value.statistics.los);
            setFood(value.statistics.resources.food);

        } catch(e) {
            alert("Animal may not exist");
        }
    }

    return (
        <body>
            <h1>Modify stats of an animal</h1>
            <label>https://age-of-api-backend.onrender.com/api/animals/updateAnimal/{name}</label>
            <input type="text" placeholder='ej. "Gazelle"' onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={getCurrentStats}>Get Current stats</button>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" placeholder='ej "Age of Empires"' value={introduced} onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                        <td>
                            <label>Is hostile?: </label>
                            <input type="checkbox" value={canAttack === true} onChange={(e) => setIsHostile(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>HP: </label>
                            <input type="number" placeholder='ej. "8"' value={parseInt(hp)} onChange={(e) => setHp(e.target.value)}/>
                        </td>
                        <td>
                            <label>Melee armor: </label>
                            <input type="number" placeholder='ej. "0"' value={meleeArmor} onChange={(e) => setMeleeArmor(e.target.value)}/>

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
                            <input type="number" placeholder='ej. "1.7"' value={los} onChange={(e) => setLineOfSight(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Food dropped: </label>
                            <input type="number" placeholder='ej. "150"' value={food} onChange={(e) => setFood(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/animals" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyAnimalLink 
                                name={name}
                                introduced={introduced}
                                canAttack={canAttack}
                                hp={hp}
                                meleeArmor={meleeArmor}
                                pierceArmor={pierceArmor}
                                speed={speed}
                                los={los}
                                food={food}
                            />
                        </td>
                    </tr>
                </table>     
            </form>
        </body>
    );
}

export default ModifyAnimal;
