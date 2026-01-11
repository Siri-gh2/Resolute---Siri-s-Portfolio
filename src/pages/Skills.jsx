import styled from "styled-components";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 8rem 10% 4rem;
  max-width: 1100px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const Section = styled.div`
  margin-bottom: 4.5rem;
`;

const SectionTitle = styled.h3`
  margin-bottom: 1.4rem;
  font-size: 1.3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
`;

const Pill = styled.span`
  padding: 0.8rem 1.3rem;
  border-radius: 30px;
  font-size: 0.95rem;
  background: rgba(124, 124, 255, 0.1);
  color: ${({ theme }) => theme.colors.text};
`;

const Cert = styled(motion.div)`
  padding: 1.4rem 1.6rem;
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
  background: rgba(255, 255, 255, 0.035);
  margin-bottom: 1.2rem;
`;

const CertTitle = styled.p`
  font-weight: 500;
`;

const CertMeta = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 0.3rem;
`;

const Note = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 0.8rem;
`;

export default function Skills() {
  return (
    <PageWrapper>
    <Wrapper>
      <Title>Skills</Title>

      {/* Core Stack */}
      <Section>
        <SectionTitle>Core Stack</SectionTitle>
        <Grid>
          <Pill>MongoDB</Pill>
          <Pill>Express.js</Pill>
          <Pill>React</Pill>
          <Pill>Node.js</Pill>
        </Grid>
        <Note>
          Primary stack used across full-stack projects including finance
          tracking, student platforms, and productivity tools.
        </Note>
      </Section>

      {/* Frontend */}
      <Section>
        <SectionTitle>Frontend</SectionTitle>
        <Grid>
          <Pill>JavaScript (ES6+)</Pill>
          <Pill>React (Vite)</Pill>
          <Pill>Styled-Components</Pill>
          <Pill>HTML & CSS</Pill>
          <Pill>Framer Motion</Pill>
        </Grid>
      </Section>

      {/* Backend */}
      <Section>
        <SectionTitle>Backend & Databases</SectionTitle>
        <Grid>
          <Pill>Node.js</Pill>
          <Pill>Express.js</Pill>
          <Pill>REST APIs</Pill>
          <Pill>JWT Authentication</Pill>
          <Pill>MongoDB</Pill>
          <Pill>MySQL</Pill>
          <Pill>MSSQL</Pill>
        </Grid>
      </Section>

      {/* Tools */}
      <Section>
        <SectionTitle>Tools & Workflow</SectionTitle>
        <Grid>
          <Pill>Git & GitHub</Pill>
          <Pill>Postman</Pill>
          <Pill>Vercel</Pill>
          <Pill>Netlify</Pill>
          <Pill>Firebase Auth</Pill>
        </Grid>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionTitle>Certifications</SectionTitle>

        <Cert>
          <CertTitle>JavaScript Essentials</CertTitle>
          <CertMeta>Programming Fundamentals</CertMeta>
        </Cert>

        <Cert>
          <CertTitle>Python Essentials (I & II)</CertTitle>
          <CertMeta>Core Programming Concepts</CertMeta>
        </Cert>

        <Cert>
          <CertTitle>Data Structures & Algorithms</CertTitle>
          <CertMeta>Problem Solving & Algorithmic Thinking</CertMeta>
        </Cert>

        <Cert>
          <CertTitle>Database Management Systems</CertTitle>
          <CertMeta>Relational Databases & SQL</CertMeta>
        </Cert>

        <Cert>
          <CertTitle>Java Full Stack Development</CertTitle>
          <CertMeta>EduSkills</CertMeta>
        </Cert>
        
      </Section>

      {/* Learning */}
      <Section>
        <SectionTitle>Currently Preparing For</SectionTitle>
        <Grid>
  <Pill>Artificial Intelligence & Data Science (Foundations)</Pill>
  <Pill>Core Python for Data Analysis</Pill>
  <Pill>Advanced DSA in C++</Pill>
  <Pill>Advanced React Patterns</Pill>
  <Pill>Computer Networks</Pill>
</Grid>
<Note>
  Actively building fundamentals through coursework, practice projects, and
  structured learning alongside core full-stack development.
</Note>

      </Section>
    </Wrapper>
    </PageWrapper>
  );
}
