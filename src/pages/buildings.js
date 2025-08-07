import React from "react";
import { NavLink } from "../components/HomeLinks";
import { NavLink as TryItLink } from "../components/TryItLink";
import { useState } from "react";
import DeleteLink from "../components/DeleteLink.js";
import PutLink from "../components/PutLink.js";
import "../styles/estilos.css";

const Buildings = () => {

    const [name, setName] = useState('');
    const [intro, setIntro] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('');
    const [res, setRes] = useState('');
    
    const [clearStats, setClearStats] = useState('');

    const [deleteBuild, setDeleteBuild] = useState('');
    const [deleteAge, setDeleteAge] = useState('');

    const token = localStorage.getItem('token');

    return (
        <body>
            <h1>Buildings section</h1>
            <p>All endpoints aviable for Building-type Objects</p>
            {/* all elements  */}
            <div> 
                {/* GET buildings */}
                <div>
                    <table>
                        <tr>
                            <td>Get all buildings</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/all</p>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/buildings/all" target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get a building by its name</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/byName/{name}</p>
                                <input type="text" placeholder={'ej "House"'} onChange={(e) => setName(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/buildings/byName/${name}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get buildings by the game release which they were introduced</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/byIntroduced/{intro}</p>
                                <input type="text" placeholder={'ej "Return of Rome"'} onChange={(e) => setIntro(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/buildings/byIntroduced/${intro}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get the buidlings by the age which they are unlocked (1: Stone Age)(2: Tool Age)...</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/byAge/{age}</p>
                                <input type="number" placeholder={'ej "2"'} onChange={(e) => setAge(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/buildings/byAge/${age}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get buildings by its type</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/byType/{type}</p>
                                <input type="text" placeholder={'ej "Civilian"'} onChange={(e) => setType(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/buildings/byType/${type}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get buildings by the type of resource needed to build</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/byResource/{res}</p>
                                <input type="text" placeholder={'ej "Wood"'} onChange={(e) => setRes(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/buildings/byResource/${res}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Add a plain buildings, without stats</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/addPlainBuilding/</p>
                                <TryItLink className="button" to="/buildings/postPlainBuilding" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        { token ? (
                        <>
                        <tr>
                            <td>Add a building</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/addSimpleBuilding/</p>
                                <TryItLink className="button" to="/buildings/postSimpleBuilding" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Modify a building</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/updateNameOfBuilding/building</p>
                                <TryItLink className="button" to="/buildings/modifyBuilding" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Modify name of a building</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/updateStatsOfBuilding/building</p>
                                <TryItLink className="button" to="/buildings/modifyNameOfBuilding" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Clear stats of a building</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/clearBuilding/{clearStats}</p>
                                <input type="text" placeholder={'ej "House"'} onChange={(e) => setClearStats(e.target.value)}/>
                                <PutLink route="buildings/clearBuilding" object={clearStats} activeStyle>Try It</PutLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Delete a building</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/deleteBuilding/{deleteBuild}</p>
                                <input type="text" placeholder={'ej "House"'} onChange={(e) => setDeleteBuild(e.target.value)}/>
                                <DeleteLink route="buildings/deleteBuilding" object={deleteBuild}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Delete all building by Age (1: Stone Age)(2: Tool Age)...</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/buildings/deleteAllBuildingByAge/{deleteAge}</p>
                                <input type="number" placeholder={'ej "2"'} onChange={(e) => setDeleteAge(e.target.value)}/>
                                <DeleteLink route="buildings/deleteAllBuildingByAge" object={deleteAge} activeStyle>Try It</DeleteLink>
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

export default Buildings;