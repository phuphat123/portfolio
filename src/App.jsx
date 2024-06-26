import {useState} from 'react';
import Header from './assets/components/Header';
import GlobalStyle from './GlobalStyles';
import Home from './assets/components/Home';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';

import styled from 'styled-components';


const Container = styled.div`
  padding: 100px 40px 20px 40px;
  
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