
import styled from 'styled-components';



const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh; /* Full viewport height */
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px 0px 0px 0px;
  
  z-index:1;
  
`;

const HeroSection = styled.div`
  
  color: black;

`


const Headline = styled.h1`
  font-size: 4em;
  margin: 0;
`;






const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
      <Headline>Full-Stack Developer</Headline>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;
