import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.3em;
    color: #ebebeb;
    padding: 7px 14px;
    background-color:rgb(66, 66, 66);
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
`;