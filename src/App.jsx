import {useState} from 'react';
import Header from './assets/components/Header';
import GlobalStyle from './GlobalStyles';
import Home from './assets/components/Home';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';







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
    <div style ={{paddingTop:'60px'}}>
      {renderPage()}
    </div>
    
    </>
  )
}

export default App