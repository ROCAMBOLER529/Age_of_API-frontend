import React from "react";
import { NavLink } from "../components/HomeLinks";
import { NavLink as TryItLink } from "../components/TryItLink";
import { useState } from "react";
import DeleteLink from "../components/DeleteLink";
import "../styles/estilos.css";

const Techs = () => {
    const [name, setName] = useState('');
    const [intro, setIntro] = useState('');
    const [age, setAge] = useState('');
    const [res, setRes] = useState('');
    const [build, setBuild] = useState('');

    const [deleteTech, setDeleteTech] = useState('');
    const [deleteAge, setDeleteAge] = useState('');

    const token = localStorage.getItem('token');

    return (
        <body>
            <h1>Techs section</h1>
            <p>All endpoints aviable for in-game technologies</p>
            <div>
                {/* GET techs */}
                <div>
                    <table>
                        <tr>
                            <td>Get all technologies</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/all</p>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/tech/all" target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                                                <tr>
                            <td>Get a techology by its name</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/byName/{name}</p>
                                <input type="text" placeholder={'ej "Coinage"'} onChange={(e) => setName(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/tech/byName/${name}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                                                <tr>
                            <td>Get all technologies by the game release which they were introduced</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/byRelease/{intro}</p>
                                <input type="text" placeholder={'ej "Return of Rome"'} onChange={(e) => setIntro(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/tech/byRelease/${intro}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                                                <tr>
                            <td>Get all technologies by the age which they are unlocked (1: Stone Age)(2: Tool Age)...</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/byAge/{age}</p>
                                <input type="text" placeholder={'ej "Nobility"'} onChange={(e) => setAge(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/tech/byAge/${age}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                                                <tr>
                            <td>Get all technologies by resource-type cost to research</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/byResource/{res}</p>
                                <input type="text" placeholder={'ej "Gold"'} onChange={(e) => setRes(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/tech/byResource/${res}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get all technologies researchables in a building</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/byBuilding/{build}</p>
                                <input type="text" placeholder={'ej "Barracks"'} onChange={(e) => setBuild(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/tech/byBuilding/${build}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        { token ? (
                        <>
                        <tr>
                            <td>Add a plain technology, without stats</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/addPlainTech/</p>
                                <TryItLink className="button" to="/techs/postPlainTech" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Add a technology</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/addSimpleTech/</p>
                                <TryItLink className="button" to="/techs/postSimpleTech" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Modify name of a technology</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/updateNameOfTech/tech</p>
                                <TryItLink className="button" to="/techs/modifyTech" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Change resource of a technology</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/updateResearchOfTech/tech</p>
                                <TryItLink className="button" to="/techs/modifyResOfTech" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Delete a technology</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/deleteTech/{deleteTech}</p>
                                <input type="text" placeholder={'ej "Mysticism"'} onChange={(e) => setDeleteTech(e.target.value)}/>
                                <DeleteLink route="tech/deleteTech" object={deleteTech} activeStyle>Try It</DeleteLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Delete all technology by age unlocked (1: Stone Age)(2: Tool Age)...</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/tech/deleteAllTechByAge/{deleteAge}</p>
                                <input type="text" placeholder={'ej "3"'} onChange={(e) => setDeleteAge(e.target.value)}/>
                                <DeleteLink route="tech/deleteAllTechByAge" object={deleteAge} activeStyle>Try It</DeleteLink>
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

export default Techs;