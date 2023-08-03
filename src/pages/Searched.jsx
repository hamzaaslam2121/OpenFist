import { styled } from 'styled-components';
import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


function Searched() {

    const [searched, setSearched] = useState([]);
    let params = useParams();

  const getSearched = async(name) => {
    const api = await fetch(
      `https://api.github.com/search/repositories?q=${name}&sort=stars&order=desc&per_page=12`,
    {
      headers: {
        Authorization: process.env.GITHUB_ACCESS_TOKEN,  
      },
    }
    )
    const data = await api.json();
    setSearched(data.items);
  }

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
        {searched.map((repo) => {
        return(
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>

          <Card >
          <TextContainer>
            <p>{repo.name}</p>
          </TextContainer>
            <img src={repo.owner.avatar_url} alt="" />
          </Card>
          </a>
        )
      })}

    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  `;

const Card = styled.div`
position: relative;
  height: 16rem; 
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
 img{
  width: 100%;
  border-radius: 2rem;
 }
  a {
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
  `;

  const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box; 
  z-index: 2;
  text-align: center;
  color: white;
`;



export default Searched