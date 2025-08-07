import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import AddUnitToCivLink from "./comp/AddUnitTuCivLink";

const AddUnitToCiv = () => {
    const [name, setName] = useState('');
    
    const [unit, setUnit] = useState('');

    return (
        <body>
            <h1>Modify name of building</h1>
            <label>https://age-of-api-backend.onrender.com/api/civilizations/updateNameOfAnimal/{name}</label>
            <input type="text" placeholder='ej. "Argentines"' onChange={(e) => setName(e.target.value)}/>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name of unit: </label>
                            <input type="text" placeholder='ej. "Clubman"' onChange={(e) => setUnit(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/civilizations" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <AddUnitToCivLink 
                                name={name}
                                unit={unit}
                            />
                        </td>
                    </tr>
                </table>       
            </form>
        </body>
    );
}

export default AddUnitToCiv;
