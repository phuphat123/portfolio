import styled from 'styled-components';

// Styled components
export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center; /* Center content horizontally */
  z-index: 1;
  
`;
import { motion } from 'framer-motion';

export const HeroSection = styled(motion.div)`
  text-align: center; /* Centers text horizontally */
  
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: center; 
  color: black;
  width: 100%; /* Ensure it takes up the full width */
  padding: 0 20px; /* Add some padding for better readability */
`;



export const AnimationContainer = styled.div`
  display: inline-block;
  white-space: normal; /* Allow text to wrap */
  max-width: 80%; /* Ensure it doesn't exceed the viewport width */
  
`;

export const Headline = styled.h1`
  font-size: 2em;
  white-space: normal; /* Allow text to wrap */
  
`;

export const SubLine = styled.h2`
  padding: 20px 0 0 0;
  font-size: 1.25em;
  white-space: normal;
  font-family: 'Roboto Mono', sans-serif;
  font-weight: normal;
`;

import profileImage from '../../images/vro.jpg';

export const ProfilePicture = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 50%;  /* Makes the image circular */
  object-fit: cover;   /* Ensures the image covers the container */
  margin-bottom: 20px; /* Add some space below the image */
`;

export const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: red;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;





const Home = () => {
    
  const birthDate = '2001-11-05'; // Replace with your birth date
  const age = calculateAge(birthDate);


  return (
    <HomeContainer>
      <HeroSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 2 }}
      
      >
        <ProfilePicture src={profileImage} alt="Profile Picture" />
        <AnimationContainer>
          <Headline>Hi I&apos;m Phu Pham.</Headline>
          <SubLine>
          I&apos;m a {age} year old Full-Stack Software Developer based in London with proficiency in Python, JavaScript, and C#, also skilled in frameworks like React and Node.js. <br /><br />
            My creations are inspired by Artificial Intelligence, Futurism, Functionality, and Aesthetics. <br /><br />
            I graduated in Computing from University of Kent with an Upper Second-Class Honours, and my background in gaming has fostered my leadership, communication skills, and problem-solving abilities to provide
            value to a team.<br /><br />
            I strive to combine creativity with technology to drive innovation and excellence in the digital space. <br />
          </SubLine>

          <DownloadButton href="../../../public/CV.pdf" download="Phu_Pham_CV.pdf">
            Download CV
          </DownloadButton>
        </AnimationContainer>
      </HeroSection>
    </HomeContainer>
  );
};


function calculateAge(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
}
export default Home;
