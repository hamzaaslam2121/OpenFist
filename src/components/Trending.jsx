import {useState, useEffect} from 'react'
import { styled } from 'styled-components';
import {Splide, SpideSlide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import  '@splidejs/react-splide/css';


function Trending() {
  const [trendingRepos, setTrendingRepos] = useState([]);

useEffect(() => {
  getTrending()
  }, []);

  const getTrending = async () => {

    const api = await fetch(
      'https://api.github.com/search/repositories?q=created:>2023-07-01&sort=stars&order=desc&per_page=15',
      {
        headers: {
          Authorization: process.env.GITHUB_ACCESS_TOKEN, 
        },
      }
    );
    const data = await api.json();

    const openSourceProjects = data.items.filter((repo) => {
      const allowedLicenses = ['MIT', 'Apache License 2.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0'];
      return allowedLicenses.includes(repo.license?.spdx_id);
    });

    setTrendingRepos(openSourceProjects);
    console.log(data)
}


  return (
    <div>
          <Wrapper>
            <h3>Trending Repositories</h3>
          <Wrapperundertrending>
            <Splide options={{
              perPage:5,
              arrows: false,
              drag: 'free',
              gap: '5rem'
            }}>
            {trendingRepos.map((repo) => {
              return(
                <SplideSlide key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">

                  <Card>
                  <TextContainer>
                    <p>{repo.name}</p>
                    </TextContainer>

                    <img src={repo.owner.avatar_url} alt={repo.name} />
                  </Card>
                  </a>

                </SplideSlide>
              )
            })}
            </Splide>
            </Wrapperundertrending>
          </Wrapper>
        
  
    </div>
    )
  
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  `;

  

  const Wrapperundertrending = styled.div`
  margin: 1rem 0rem;
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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





  
  const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  `;

  const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.2); /* Corrected background color */
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;



export default Trending