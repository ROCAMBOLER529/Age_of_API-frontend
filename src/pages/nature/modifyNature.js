import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import ModifyNatureLink from "./comp/ModifyNatureLink";

const ModifyNature = () => {
    const [name, setName] = useState('');
    
    const [introduced, setIntroduced] = useState('');
    const [hp, setHp] = useState('');

    const getCurrentStats = async () => {
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/nature/byName/${name}`);
            
            const value = (await res.json()).data
            
            setIntroduced(value.introduced);
            setHp(value.statistics.hp);

        } catch(e) {
            alert("Nature may not exist");
        }
    }

    return (
        <body>
            <h1>Modify nature object</h1>
            <label>https://age-of-api-backend.onrender.com/api/nature/updateInfoOfNature/{name}</label>
            <input type="text" placeholder='ej. "Tree"' onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={getCurrentStats}>Get Current stats</button>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" placeholder='ej "Age of Empires"' value={introduced} onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                        <td>
                            <label>HP: </label>
                            <input type="number" placeholder='ej. "8"' value={parseInt(hp)} onChange={(e) => setHp(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/nature" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <ModifyNatureLink 
                                name={name}
                                introduced={introduced}
                                hp={hp}
                            />
                        </td>
                    </tr>
                </table>  
            </form>
        </body>
    );
}

export default ModifyNature;
