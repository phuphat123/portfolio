import {useState} from 'react';
import Header from './assets/components/Header';
import GlobalStyle from './GlobalStyles';
import Home from './assets/components/Home';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';

import styled from 'styled-components';


const Container = styled.div`
  padding: 0px 0px 0px 0px;

  @media (max-width: 768px) {
   padding: 100px 0px 100px 0px;
  }

  @media (max-height: 768px) {
   padding: 100px 0px 100px 0px;
  }
  
`;



function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () =>{

    switch(currentPage) {
      case 'home':
        return <Home/>;
      case 'projects':
        return <Projects/>;
      case 'contact':
        return <Contact/>;
        default:
          return<Home/>;
    }

  };


  return (
    <>
    <GlobalStyle />
    <Header setCurrentPage={setCurrentPage}/>
    <Container>
      {renderPage()}
    </Container>
    
    </>
  )
}

export default App