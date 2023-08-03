import {useState, useEffect} from 'react'
import { styled } from 'styled-components';
import {Splide, SpideSlide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import  '@splidejs/react-splide/css';
import HandPickedRepos from './HandPickedRepos';




function HandPicked() {












    return (
        <div>
              <Wrapper>
                <h3>Hand-Picked Repositories</h3>
              <Wrapperundertrending>

                <Splide options={{
                  perPage:5,
                  arrows: false,
                  drag: 'free',
                  gap: '5rem'
                }}>
                {HandPickedRepos.map((repo) => {
                  return(
                    <SplideSlide key={repo.id}>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">

                      <Card>
                      <TextContainer>
                        <p>{repo.name}</p>
                        </TextContainer>

                        <img src={repo.img_url} alt={repo.name} />
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
  height: 16rem; /* Set a fixed height for the card */
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
 const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  `;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box; /* Ensure padding is included in width */
  z-index: 2;
  text-align: center;
  color: white;
`;
    
export default HandPicked
