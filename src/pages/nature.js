import React from "react";
import { NavLink as TryItLink } from "../components/TryItLink";
import { useState } from "react";
import DeleteLink from "../components/DeleteLink.js";

const Nature = () => {
    const [isHover, setIsHover] = useState(false);

    const [name, setName] = useState('');
    const [intro, setIntro] = useState('');
    const [res, setRes] = useState('');
    const [deleteNat, setDelete] = useState('');

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const tryItButton = {
        backgroundColor: isHover ? '#726c6c' : 'rgb(66, 66, 66)',
        transform: isHover ? 'scale(1.03)' : 'scale(1.00)'
    };

    return (
        <body>
            <h1>Nature section</h1>
            <p>All endpoints related for Nature-type Objects</p>

            <div>
                {/* GET nature */}
                <div>
                    <table>
                        <tr>
                            <td>Get all natural objects</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/natures/all/</p>
                                <TryItLink style={tryItButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="https://age-of-api-backend.onrender.com/api/nature/all/" target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get a natural object by name</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/byName/{name}</p>
                                <input type="text" placeholder={'ej. "Tree"'} onChange={(e) => setName(e.target.value)}/>
                                <TryItLink style={tryItButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={`https://age-of-api-backend.onrender.com/api/nature/byName/${name}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get all natural objects by the game release which they were inroduced</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/natures/byIntroduced/{intro}</p>
                                <input type="text" placeholder={'ej. "Age of Empires"'} onChange={(e) => setIntro(e.target.value)}/>
                                <TryItLink style={tryItButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={`https://age-of-api-backend.onrender.com/api/nature/byIntroduced/${intro}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get all natural objects by resource dropped extracted from collections</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/natures/byResource/{res}</p>
                                <input type="text" placeholder={'ej. "Wood"'} onChange={(e) => setRes(e.target.value)}/>
                                <TryItLink style={tryItButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={`https://age-of-api-backend.onrender.com/api/nature/byResource/${res}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Add a nature object</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/natures/addNature/</p>
                                <TryItLink style={tryItButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/nature/postNature" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Modify nature object</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/natures/updateInfoOfNature/Tree</p>
                                <TryItLink style={tryItButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/nature/modifyNature" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Change resource of nature</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/updateResourceOfNature/Tree</p>
                                <TryItLink style={tryItButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/nature/modifyResOfNature" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Delete a nature object</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/natures/deleteNature/{deleteNat}</p>
                                <input type="text" placeholder={'ej. "Cherry Bush"'} onChange={(e) => setDelete(e.target.value)}/>
                                <DeleteLink route="nature/deleteNature" object={deleteNat} activeStyle/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </body>
    );
}

export default Nature;