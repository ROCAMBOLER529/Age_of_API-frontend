import React from "react";
import { NavLink } from "../components/HomeLinks";
import { NavLink as TryItLink } from "../components/TryItLink";
import { useState } from "react";
import DeleteLink from "../components/DeleteLink";
import "../styles/estilos.css";

const Units = () => {
    const [name, setName] = useState('');
    const [intro, setIntro] = useState('');
    const [age, setAge] = useState('');
    const [res, setRes] = useState('');

    const [deleteUnit, setDelete] = useState('');

    const token = localStorage.getItem('token');

    return (
        <body>
            <h1>Units section.</h1>
            <p>All endpoints aviable for Unit-type Objects</p>
            <div>
                {/* GET units */}
                <div>
                    <table>
                        <tr>
                            <td>Get all units</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/units/all/</p>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/units/all/" target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get a unit by its name</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/units/byName/{name}</p>
                                <input type="text" placeholder={'ej "Hoplite"'} onChange={(e) => setName(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/units/byName/${name}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get units by the game release which they were inroduced</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/units/byRelease/{intro}</p>
                                <input type="text" placeholder={'ej "Age of Empires"'} onChange={(e) => setIntro(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/units/byRelease/${intro}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get units by the age which they are unlocked (1: Stone Age)(2: Tool Age)...</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/units/byAge/{age}</p>
                                <input type="text" placeholder={'ej "3"'} onChange={(e) => setAge(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/units/byAge/${age}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get units by the resource-type cost for production</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/units/byResource/{res}</p>
                                <input type="text" placeholder={'ej "Food"'} onChange={(e) => setRes(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/units/byResource/${res}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        { token ? (
                        <>                        
                        <tr>
                            <td>Add a unit</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/units/addUnit/</p>
                                <TryItLink className="button" to="/units/postUnit" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Modify a unit</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/units/updateInfoOfUnit/unit</p>
                                <TryItLink className="button" to="/units/modifyUnit" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Modify stats of a unit</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/units/updateStatsOfUnit/unit</p>
                                <TryItLink className="button" to="/units/modifyStatOfUnit" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Delete a unit</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/units/deleteUnit/{deleteUnit}</p>
                                <input type="text" placeholder={'ej "Hunting Wolf"'} onChange={(e) => setDelete(e.target.value)}/>
                                <DeleteLink route="units/deleteUnit" object={deleteUnit} activeStyle>Try It</DeleteLink>
                            </td>
                        </tr>
                        </>
                        ) : (
                            <tr>
                                <td>
                                    LogIn to use more endpoints
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td>
                                <NavLink className={"button"} to="/" activeStyle>Back</NavLink>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </body>        
    );
}

export default Units;