import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyled'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects - Blogs</Title>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'collaboratedProject' ?
            <ToggleButton active value="Collaboration Project" onClick={() => setToggle('Collaboration Project')}>Collaborated Project</ToggleButton>
            :
            <ToggleButton value="Collaboration Project" onClick={() => setToggle('Collaboration Project')}>Collaborated Project</ToggleButton>
          }
          {toggle === 'personalProject' ?
            <ToggleButton active value="Personal Project" onClick={() => setToggle('Personal Project')}>Personal Project</ToggleButton>
            :
            <ToggleButton value="Personal Project" onClick={() => setToggle('Personal Project')}>Personal Project</ToggleButton>
          }
          {toggle === 'blogs' ?
            <ToggleButton active value="Blogs" onClick={() => setToggle('Blogs')}>Blogs</ToggleButton>
            :
            <ToggleButton value="Blogs" onClick={() => setToggle('Blogs')}>Blogs</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects;