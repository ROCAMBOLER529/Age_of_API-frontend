import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyResOfTechLink from "./comp/ModifyResOfTechLink";

const ModifyResOfTech = () => {
    const [name, setName] = useState('');
    
    const [food, setFood] = useState('');
    const [wood, setWood] = useState('');
    const [stone, setStone] = useState('');
    const [gold, setGold] = useState('');

    const getCurrentStats = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/tech/byName/${name}`);

            const value = (await res.json()).data
            
            setFood(value.research.resources.food);
            setWood(value.research.resources.wood);
            setStone(value.research.resources.stone);
            setStone(value.research.resources.gold);
        } catch(e) {
            alert("Tech may not exist");
        }
    }
    
    return (
        <body>
            <h1>Modify nature object</h1>
            <label>https://age-of-api-backend.onrender.com/api/tech/updateResearchOfTech/{name}</label>
            <input type="text" placeholder='ej. "Wheel"' onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={getCurrentStats}>Get Current stats</button>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Food: </label>
                            <input type="number" placeholder='ej. "200"' onChange={(e) => setFood(e.target.value) === undefined ? 0 : setWood(e.target.value)}/>
                        </td>
                        <td>
                            <label>Wood: </label>
                            <input type="number" placeholder='ej. "100"' onChange={(e) => setWood(e.target.value) === undefined ? 0 : setWood(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Stone: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setStone(e.target.value) === undefined ? 0 : setWood(e.target.value)}/>
                        </td>
                        <td>
                            <label>Gold: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setGold(e.target.value) === undefined ? 0 : setWood(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/techs" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyResOfTechLink 
                                name={name}
                                food={food}
                                wood={wood}
                                stone={stone}
                                gold={gold}
                            />
                        </td>
                    </tr>
                </table>         
            </form>
        </body>
    );
}

export default ModifyResOfTech;
