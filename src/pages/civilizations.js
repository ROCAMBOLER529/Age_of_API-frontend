import React from "react";
import { NavLink } from "../components/HomeLinks";
import { NavLink as TryItLink } from "../components/TryItLink";
import { useState } from "react";
import DeleteLink from "../components/DeleteLink.js";
import "../styles/estilos.css";


const Civilizations = () => {
    const [name, setName] = useState('');
    const [nameInfo, setNameInfo] = useState('');
    const [bonus, setBonus] = useState('');
    const [nameUnits, setNameUnits] = useState('');
    const [nameBuild, setNameBuild] = useState('');
    const [nameTech, setNameTech] = useState('');
    const [intro, setIntro] = useState('');
    const [arch, setArch] = useState('');

    const [modifyCiv, setModifyCiv] = useState('');
    const [addUnit, setAddUnit] = useState('');
    const [addTech, setAddTech] = useState('');

    const [deleteCiv, setDelete] = useState('');

    const token = localStorage.getItem('token');

    return (
        <body>
            <h1>Civilizations section</h1>
            <p>All endpoints aviable for the Civilizations</p>
            <div>
                {/* GET civilizations */}
                <div>
                    <tab>
                        <tr>
                            <td>Get all civilizations</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/all/</p>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/civilizations/all/" target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get a civilization by its name</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/byName/{name}</p>
                                <input type="text" placeholder={'ej "Assyrians"'} onChange={(e) => setName(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/civilizations/byName/${name}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get information of a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/getInfoOfCiv/{nameInfo}</p>
                                <input type="text" placeholder={'ej "Assyrians"'} onChange={(e) => setNameInfo(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/civilizations/getInfoOfCiv/${nameInfo}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get bonuses of a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/getBonusOfCiv/{bonus}</p>
                                <input type="text" placeholder={'ej "Assyrians"'} onChange={(e) => setBonus(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/civilizations/getBonusOfCiv/${bonus}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get all units of a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/getUnitsOfCiv/{nameUnits}</p>
                                <input type="text" placeholder={'ej "Assyrians"'} onChange={(e) => setNameUnits(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/civilizations/getUnitsOfCiv/${nameUnits}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get all buildings of a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/getBuildingsOfCiv/{nameBuild}</p>
                                <input type="text" placeholder={'ej "Assyrians"'} onChange={(e) => setNameBuild(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/civilizations/getBuildingsOfCiv/${nameBuild}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get all techs of a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/getTechOfCiv/{nameTech}</p>
                                <input type="text" placeholder={'ej "Assyrians"'} onChange={(e) => setNameTech(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/civilizations/getTechOfCiv/${nameTech}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get civilizations by the game expansion which they were inroduced</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/byRelease/{intro}</p>
                                <input type="text" placeholder={'ej "Rise of Rome"'} onChange={(e) => setIntro(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/civilizations/byRelease/${intro}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get civilizations by the game architecture design</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/byArchitecture/{arch}</p>
                                <input type="text" placeholder={'ej "Egyptian"'} onChange={(e) => setArch(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/civilizations/byArchitecture/${arch}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        { token ? (
                        <>
                        <tr>
                            <td>Add a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/addPlainCiv/</p>
                                <TryItLink className="button" to="/civilizations/postCiv" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Modify a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/updateCiv/civilization</p>
                                <TryItLink className="button" to="/civilizations/modifyCiv" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Add unit to a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/addUnitsToCiv/{addUnit}</p>
                                <TryItLink className="button" to="/civilizations/addUnitToCiv" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Add a tech to a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/addTechToCiv/{addTech}</p>
                                <TryItLink className="button" to="/civilizations/addTechToCiv" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Delete a civilization</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/civilizations/deleteCiv/{deleteCiv}</p>
                                <input type="text" placeholder={'ej "Assyrians"'} onChange={(e) => setDelete(e.target.value)}/>
                                <DeleteLink route="civilizations/deleteCiv" object={deleteCiv} activeStyle>Try It</DeleteLink>
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
                    </tab>
                </div>
            </div>
        </body>
    );
}

export default Civilizations;