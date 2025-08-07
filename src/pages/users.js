import React from "react";
import { NavLink } from "../components/HomeLinks";
import { NavLink as TryItLink } from "../components/TryItLink";
import { useState } from "react";
import "../styles/estilos.css";
import DeleteLink from "../components/DeleteLink";

const Users = () => {
    const [name, setName] = useState(false);
    const [rol, setRol] = useState(false);

    const [modifyUser, setModifyUser] = useState('');
    const [ban, setBan] = useState('');
    const [unban, setUnban] = useState('');
    const [promotion, setPromotion] = useState('');
    const [demotion, setDemotion] = useState('');

    const [deleteUser, setDeleteUser] = useState('');

    let userRol;

    const confirmUser = async () => {
        const user = localStorage.getItem('user');
        try {
            const res = await fetch(`https://age-of-api-backend.onrender.com/api/usuarios/byName/${user}`);

            userRol = (await res.json())[0].rol;
        } catch(e) {
            alert("Failed confirm user!")
        }
    }

    confirmUser();

    return (
        <body>
            <h1>Users page...</h1>
            <p>All endpoints aviable for the users</p>
            <div>
                {/* GET users  */}
                <div>
                    <table>
                        <tr>
                            <td>Get all users</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/all/</p>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/usuarios/all/" target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get a user by its name</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/byName/{name}</p>
                                <input type="text" placeholder={'ej "ROCAMBOLER529"'} onChange={(e) => setName(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/usuarios/byName/${name}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get users by its rol</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/byRol/{rol}</p>
                                <input type="text" placeholder={'ej "Mod"'} onChange={(e) => setRol(e.target.value)}/>
                                <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/usuarios/byRol/${rol}`} target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Get all banned users</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/banned/</p>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/usuarios/banned/" target="_blank" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        { userRol === "mod" ? (
                            <>
                        <tr>
                            <td>Add a user</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/addUsuario/</p>
                                <TryItLink className="button" to="/users/postUser" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Ban a user</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/banUsuario/{ban}</p>
                                <input type="text" placeholder={'ej "ROCAMBOLER529"'} onChange={(e) => setBan(e.target.value)}/>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/usuarios/banUsuario/aa" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Unban a user</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/unbanUsuario/{unban}</p>
                                <input type="text" placeholder={'ej "ROCAMBOLER529"'} onChange={(e) => setUnban(e.target.value)}/>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/usuarios/unbanUsuario/aaa" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Demote a user</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/demoteUsuario/{demotion}</p>
                                <input type="text" placeholder={'ej "ROCAMBOLER529"'} onChange={(e) => setDemotion(e.target.value)}/>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/usuarios/demoteUsuario/aaa" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Promote a user</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/promoteUsuario/{promotion}</p>
                                <input type="text" placeholder={'ej "ROCAMBOLER529"'} onChange={(e) => setPromotion(e.target.value)}/>
                                <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/usuarios/promoteUsuario/aaa" activeStyle>Try It</TryItLink>
                            </td>
                        </tr>
                        <tr>
                            <td>Delete a user</td>
                            <td>
                                <p>https://age-of-api-backend.onrender.com/api/usuarios/deleteUsuario/{deleteUser}</p>
                                <input type="text" placeholder={'ej "ROCAMBOLER529"'} onChange={(e) => setDeleteUser(e.target.value)}/>
                                <DeleteLink route="usuarios/deleteUsuario" object={deleteUser} activeStyle>Try It</DeleteLink>
                            </td>
                        </tr>
                        </>
                        ) : (
                            <tr>
                                <td>
                                    Mod-only access
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

export default Users;