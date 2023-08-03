import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { styled } from "styled-components";
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
    
      <BrowserRouter>
      <Nav>
      <LogoWrapper>

        <Logo to={"/"}>OpenFist</Logo>
        <Subtitle>Discover Open Source Projects</Subtitle>

        </LogoWrapper>

      </Nav>
      
        <Search/>
        <Category/>
          <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
 text-decoration: none;
 font-size: 3rem;
 font-weight: 400;
 font-family: 'Lobster Two';

`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  } 
`

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
  font-family: 'Lobster Two';


`

const LogoWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;
