import React from "react";
import { NavLink } from "../../components/HomeLinks";

const ModifyResOfNature = () => {
    return (
        <body>
            <h1>Modify resources of nature</h1>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Food: </label>
                            <input type="number"/>
                        </td>
                        <td>
                            <label>Wood: </label>
                            <input type="number"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Stone: </label>
                            <input type="number"/>
                        </td>
                        <td>
                            <label>Gold: </label>
                            <input type="number"/>
                        </td>
                    </tr>
                </table>

                <div>
                    <NavLink to="/nature" activeStyle>Back</NavLink>
                    <NavLink to="/nature" activeStyle>MODIFY Building</NavLink>
                </div>         
            </form>
        </body>
    );
}

export default ModifyResOfNature;
