import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyCivLink from "./comp/ModifyCivLink";

const ModifyCiv = () => {
    const [name, setName] = useState('');

    const [historical, setHistorical] = useState('');
    const [introduced, setIntroduced] = useState('');
    const [architecture, setArchitecture] = useState('');
    const [continent, setContinent] = useState('');

    const [newName, setNewName] = useState('');
    const [teamBonus, setTeamBonus] = useState('');
    
    const getCurrentStats = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/civilizations/byName/${name}`);

            const value = (await res.json()).data
            
            setHistorical(value.name.historical);
            setIntroduced(value.information.introduced);
            setArchitecture(value.information.architecture);
            setContinent(value.information.continent);
            setTeamBonus(value.bonuses.team_bonus);
        } catch(e) {
            alert("Animal may not exist");
        }
    }

    return (
        <body>
            <h1>Modify info of a civilization</h1>
            <label>https://age-of-api-backend.onrender.com/api/civilizations/updateCiv/{name}</label>
            <input type="text" placeholder='ej. "Assyrians"' onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={getCurrentStats}>Get Current stats</button>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" placeholder='ej "Assyrians"' onChange={(e) => setNewName(e.target.value)}/>
                        </td>
                        <td>
                            <label>Historical name: </label>
                            <input type="text" placeholder='ej "Kingdom of Assyria"' value={historical} onChange={(e) => setHistorical(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" placeholder='ej "Age of Empires"' value={introduced} onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                        <td>
                            <label>Architecture: </label>
                            <input type="text" placeholder='ej "Egyptian"' value={architecture} onChange={(e) => setArchitecture(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Continent: </label>
                            <input type="text" placeholder='ej "Western Asia"' value={continent} onChange={(e) => setContinent(e.target.value)}/>
                        </td>
                        <td>
                            <label>Team bonus: </label>
                            <input type="text" placeholder='ej "Western Asia"' value={teamBonus} onChange={(e) => setContinent(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/civilizations" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyCivLink 
                                name={name}
                                historical={historical}
                                introduced={introduced}
                                architecture={architecture}
                                continent={continent}
                                teamBonus={teamBonus}
                                newName={newName}
                            />
                        </td>
                    </tr>
                </table>      
            </form>
        </body>
    );
}

export default ModifyCiv;
