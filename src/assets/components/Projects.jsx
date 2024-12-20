
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
// Styled components for the project container and title
export const ProjectContainer = styled.div`
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */
  text-align: center;
  padding: 120px 20px;

  @media (max-width: 768px) {

   padding: 60px 0px 0px 0px;
   
  }



`;

export const ProjectsTitle = styled.h1`
  font-size: 2em;
  white-space: normal;
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  color: black;
`;

// Styled components for individual projects
const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  width: 600px;

   @media (max-width: 768px) {
   width: 400px;
   
   
  }

  
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;

   @media (max-width: 768px) {
   height: 400px;
   
   
  }
  
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const ProjectLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const ProjectLink = styled.a`
  color: red;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Individual Project component
const Project = ({ title, description, image, demoLink, codeLink }) => {
  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ProjectImage src={image} alt={title} />
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLinks>
          <ProjectLink href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</ProjectLink>
          <ProjectLink href={codeLink} target="_blank" rel="noopener noreferrer">Source Code</ProjectLink>
        </ProjectLinks>
      </ProjectContent>
    </ProjectCard>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
};


import Necklace from '../../images/necklace.jpg';
import StatTreck from '../../images/stattreck.jpg';
import Golf from '../../images/golf.png';
import Receipt from '../../images/reciepts.png';

// Projects section component
const Projects = () => {
  const projectsData = [
    {
      title: 'AI Necklace Generator',
      description: 'Using NVIDIA StyleGAN3 to train on a dataset of experimental necklaces done on Python Jupyter, PyTorch, CUDA.',
      image: Necklace,
      demoLink: 'https://necklacegenerator.netlify.app/main',
      codeLink: 'https://github.com/phuphat123/StatTreck'
    },

    {
      title: 'Constructing POS System and Modding Chromium POS Reciepts for Local Business',
      description: 'Constructing a cheap POS System under £100 using second-hand devices to aid a local family-owned Chinese Takeaway to make efficient sales. Made changes to Reciept layout with .FRX file type to help fit visual requirements, and set up software to make it as simple as possible for owners to use due to language barriers and digital literacy gap.',
      image: Receipt,
    },

    {
      title: 'StatTreck, A mobile tracking application',
      description: 'Mobile Tracking app Group Project built on Xamarin C#. Tracks Battery Usage, ScreenTime, Location Data (My features I developed) using Google Maps API.',
      image: StatTreck,
      demoLink: 'https://www.youtube.com/watch?v=YpciXfF5rro&feature=youtu.be',
      codeLink: 'https://github.com/phuphat123/StatTreck'
    },
    {
      title: 'Golf Game on Unity3D',
      description: 'Mini Golf Game built from Scratch using Unity 3D.',
      image: Golf,
      demoLink: 'https://www.youtube.com/watch?v=BHFuhikY7mQ&feature=youtu.be',
      codeLink: 'https://github.com/phuphat123/Golf-2nd'
    },
    // Add more projects here
  ];

  return (
    <ProjectContainer>
      <ProjectsTitle>Showcase</ProjectsTitle>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </ProjectContainer>
  );
};

export default Projects;
