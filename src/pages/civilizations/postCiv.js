import React from "react";
import { NavLink } from "../../components/HomeLinks";
import { useState } from "react";
import PostCivLink from "./comp/PostCivLink";

const PostCiv = () => {
        const [common, setCommon] = useState('');
        const [historical, setHistorical] = useState('');
        const [introduced, setIntro] = useState('');
        const [architecture, setArch] = useState('');
        const [continent, setCont] = useState('');

    return (
        <body>
            <h1>Add a civilization</h1>
            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" placeholder='ej. "Phoenicians"' onChange={(e) => setCommon(e.target.value)}/>
                        </td>
                        <td>
                            <label>Historical name: </label>
                            <input type="text" placeholder='ej. "Phoenician Civilization"' onChange={(e) => setHistorical(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Introduced by: </label>
                            <input type="text" placeholder='ej. "Age of Empires"' onChange={(e) => setIntro(e.target.value)}/>
                        </td>
                        <td>
                            <label>Architecture design: </label>
                            <input type="text" placeholder='ej. "Greek"' onChange={(e) => setArch(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Continent: </label>
                            <input type="text" placeholder='ej. "Western Asia"' onChange={(e) => setCont(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/civilizations" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <PostCivLink 
                                common={common}
                                historical={historical}
                                introduced={introduced}
                                architecture={architecture}
                                continent={continent}
                            />
                        </td>
                    </tr>
                </table>        
            </form>
        </body>
    );
}

export default PostCiv;
