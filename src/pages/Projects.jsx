import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import PageWrapper from "../components/PageWrapper";

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 8rem 10% 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export default function Projects() {
  return (
    <PageWrapper>
    <Wrapper>
      <Title>Selected Work</Title>

      <Grid>
        {projects.map((project) => (
  <ProjectCard
    key={project.id}
    id={project.id}
    title={project.title}
    description={project.description}
  />
))}

      </Grid>
    </Wrapper>
    </PageWrapper>
  );
}
