import React from "react";
import { NavLink } from "../../components/HomeLinks";

const AddTechToCiv = () => {
    return (
        <body>
            <h1>Modify name of building</h1>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name of tech: </label>
                            <input type="text"/>
                        </td>
                    </tr>
                </table>

                <div>
                    <NavLink to="/civilizations" activeStyle>Back</NavLink>
                    <NavLink to="/civilizations" activeStyle>MODIFY Building</NavLink>
                </div>         
            </form>
        </body>
    );
}

export default AddTechToCiv;
