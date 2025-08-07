import React from "react";
import { NavLink } from "../components/HomeLinks";
import { NavLink as TryItLink } from "../components/TryItLink";
import DeleteLink from "../components/DeleteLink.js";

import { useState } from "react";
import "../styles/estilos.css";

const Animals = () => {
    const [name, setName] = useState('');
    const [intro, setIntro] = useState('');
    const [food, setFood] = useState('');

    const [updateAnimal, setUpdateAnimal] = useState('');

    const [deleteAnimal, setDeleteAnimal] = useState('');

    const token = localStorage.getItem('token');
    return (
        <body>
            <h1>Animals section</h1>
            <p>All endpoints aviable for Animal-type Objects</p>
            <div>
                {/* GET animals */}
                <div>
                    <tr>
                        <td>Get all animals.</td>
                        <td>
                            <p>https://age-of-api-backend.onrender.com/api/animals/all/</p>
                            <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/animals/all/" target="_blank" activeStyle>Try It</TryItLink>
                        </td>
                    </tr>
                    <tr>
                        <td>Get an animal by its name.</td>
                        <td>
                            <p>https://age-of-api-backend.onrender.com/api/animals/getAnimalByName/{name}</p>
                            <input type="text" placeholder={'ej. "Wolf"'} onChange={(e) => setName(e.target.value)}/>
                            <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/animals/getAnimalByName/${name}`} target="_blank" activeStyle>Try It</TryItLink>
                        </td>
                    </tr>
                    <tr>
                        <td>Get animals by the game expansion which they were inroduced.</td>
                        <td>
                            <p>https://age-of-api-backend.onrender.com/api/animals/getAnimalByName/{intro}</p>
                            <input type="text" placeholder={'ej "Rise of Rome"'} onChange={(e) => setIntro(e.target.value)}/>
                            <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/animals/getAnimalsByIntroduced/${intro}`} target="_blank" activeStyle>Try It</TryItLink>
                        </td>
                    </tr>
                    <tr>
                        <td>Get hostile animals.</td>
                        <td>
                            <p>https://age-of-api-backend.onrender.com/api/animals/getAttackingAnimals/</p>
                            <TryItLink className="button" to="https://age-of-api-backend.onrender.com/api/animals/getAttackingAnimals/" target="_blank" activeStyle>Try It</TryItLink>
                        </td>
                    </tr>
                    <tr>
                        <td>Get animals by the amount of food dropped.</td>
                        <td>
                            <p>https://age-of-api-backend.onrender.com/api/animals/getAnimalsByFoodDropped/{food}</p>
                            <input type="text" placeholder={'ej. "100"'} onChange={(e) => setFood(e.target.value)}/>
                            <TryItLink className="button" to={`https://age-of-api-backend.onrender.com/api/animals/getAnimalsByFoodDropped/${food}`} target="_blank" activeStyle>Try It</TryItLink>
                        </td>
                    </tr>
                    { token ? (
                        <>
                    <tr>
                        <td>Add an animal.</td>
                        <td>
                            <p>https://age-of-api-backend.onrender.com/api/animals/addAnimal/</p>
                            <TryItLink className="button" to="/animals/postAnimal" activeStyle>Try It</TryItLink>
                        </td>
                    </tr>
                    <tr>
                        <td>Update an animal.</td>
                        <td>
                            <p>https://age-of-api-backend.onrender.com/api/animals/updateAnimal/animal</p>
                            <TryItLink className="button" to="/animals/modifyAnimal" activeStyle>Try It</TryItLink>
                        </td>
                    </tr>
                    <tr>
                        <td>Update name of an animal.</td>
                        <td>
                            <p>https://age-of-api-backend.onrender.com/api/animals/updateNameOfAnimal/animal</p>
                            <TryItLink className="button" to="/animals/modifyNameOfAnimal" activeStyle>Try It</TryItLink>
                        </td>
                    </tr>
                    <tr>
                        <td>Delete an animal.</td>
                        <td>
                            <p>https://age-of-api-backend.onrender.com/api/animals/deleteAnimal/{deleteAnimal}</p>
                            <input type="text" placeholder={'ej. "Wolf"'} onChange={(e) => setDeleteAnimal(e.target.value)}/>
                            <DeleteLink route="animals/deleteAnimal" object={deleteAnimal} />
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
                </div>
            </div>
        </body>
    );
}

export default Animals;