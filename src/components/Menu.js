import React from 'react';
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

const Li = styled.li`
    display: inline-block;
    padding: 5px;
    background:white;
    margin: 5px;
    border-radius: 5px;
    a{
        color:black;
        text-decoration: none;
        &.active{
            color: red;
        }
    }
    :hover{
        background:lightgray;
    }
`

export const Menu = () =>(
    <ul>
        <Li><NavLink exact to="/">Home</NavLink></Li>
        <Li><NavLink to="/lista">Lista Personajes</NavLink></Li>
        <Li><NavLink to="/lista/pepe">Lista de Pepe</NavLink></Li>
        <Li><NavLink to="/lista/pepe?color=blue">With ?color=blue</NavLink></Li>
    </ul>
)