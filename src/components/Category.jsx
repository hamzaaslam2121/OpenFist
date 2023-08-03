import {FaPython, FaJava, FaJs} from 'react-icons/fa';
import {SiC, SiCplusplus} from 'react-icons/si';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Category() {
  return (
    <List>
        <SLink to={'/languages/Python'}>
            <FaPython/>
        </SLink>
        <SLink to={'/languages/JavaScript'}>
            <FaJs/>
        </SLink>
        <SLink to={'/languages/C'}>
            <SiC/>
        </SLink>
        <SLink to={'/languages/C++'}>
            <SiCplusplus/>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    
    svg {
        color: white;
        font-size:3rem;
    }
    &.active{
        background: linear-gradient(to right, #87CEFA, #0000FF);

        svg{
            color: white;
        }
    }`;

export default Category
