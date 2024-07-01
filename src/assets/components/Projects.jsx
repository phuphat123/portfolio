import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components for the project container and title
export const ProjectContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */
  text-align: center;
  padding: 50px 20px;
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
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
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
      transition={{ duration: 0.3 }}
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

import Necklace from '../../images/necklace.jpg';
import StatTreck from '../../images/stattreck.jpg';

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
      title: 'Project 2',
      description: 'This is a short description of project 2.',
      image: StatTreck,
      demoLink: 'http://example.com/demo2',
      codeLink: 'http://github.com/example/project2'
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
