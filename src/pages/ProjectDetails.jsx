import { useParams } from "react-router-dom";
import styled from "styled-components";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";


const Wrapper = styled(motion.section)`
  min-height: 100vh;
  padding: 8rem 10% 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 3rem;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const Label = styled.h3`
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`;

const Stack = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Pill = styled.span`
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  background: rgba(124, 124, 255, 0.08);
  color: ${({ theme }) => theme.colors.text};
`;


const Actions = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ActionBtn = styled.a`
  padding: 0.7rem 1.6rem;
  border-radius: 30px;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: #0b0d10;
  }
`;

const ViewLabel = styled.h3`
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
  letter-spacing: 1px;
  text-transform: uppercase;
`;


export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Wrapper>Project not found.</Wrapper>;
  }

  return (
    <PageWrapper>
    <Wrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title>{project.title}</Title>
      <Tagline>{project.tagline}</Tagline>

      <Section>
        <Label>Problem</Label>
        <Text>{project.problem}</Text>
      </Section>

      <Section>
        <Label>Solution</Label>
        <Text>{project.solution}</Text>
      </Section>

      <Section>
        <Label>Tech Stack</Label>
        <Stack>
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </Stack>
      </Section>

      {(project.github || project.live) && (
  <>
    <ViewLabel>View at</ViewLabel>

    <Actions>
      {project.github && (
        <ActionBtn
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </ActionBtn>
      )}

      {project.live && (
        <ActionBtn
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </ActionBtn>
      )}
    </Actions>
  </>
)}
    </Wrapper>
    </PageWrapper>
  );
}
