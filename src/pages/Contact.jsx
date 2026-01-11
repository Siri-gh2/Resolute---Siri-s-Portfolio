import styled from "styled-components";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";


const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.colors.accent},
    transparent
  );
  margin-bottom: 4rem;
  opacity: 0.4;
`;

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 8rem 10% 4rem;
  max-width: 900px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const Intro = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
  margin-bottom: 4rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 3rem;
  margin: 0 auto 4rem;
  max-width: 520px;
  text-align: center;
  position: relative;
`;


const CardTitle = styled.h3`
  margin-bottom: 0.8rem;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
  margin-bottom: 1.8rem;
`;

const PrimaryBtn = styled.a`
  display: inline-block;
  padding: 0.9rem 2.2rem;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: #0b0d10;
  }
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;
`;

const LinkCard = styled.a`
  padding: 1.6rem 1.8rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
    background: rgba(255, 255, 255, 0.05);
  }
`;

const LinkTitle = styled.h4`
  margin-bottom: 0.4rem;
  font-weight: 500;
`;

const LinkDesc = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.4;
`;


const Glow = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  background: radial-gradient(
    circle,
    rgba(124, 124, 255, 0.35),
    transparent 70%
  );
  filter: blur(30px);
  z-index: -1;
`;


export default function Contact() {
  return (
    <PageWrapper>
    <Wrapper>
      <Divider />

      <Title>Contact</Title>

      <Intro
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I’m interested in internships, collaborations, and conversations around
        building thoughtful, well-structured digital products.
      </Intro>

      <Card
      
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        <CardTitle>Start a conversation</CardTitle>
        <CardText>
          <Glow />

           As a student developer, I’m always open to learning opportunities,
          collaborations, and constructive discussions around technology and
          thoughtful product building.
        </CardText>
        <PrimaryBtn href="mailto:korupolusiri@gmail.com">
          Let's Connect
        </PrimaryBtn>

      </Card>

  <Links>
  <LinkCard
    href="https://github.com/Siri-gh2"
    target="_blank"
    rel="noopener noreferrer"
  >
    <LinkTitle>GitHub</LinkTitle>
    <LinkDesc>Projects, source code, and experiments</LinkDesc>
  </LinkCard>

  <LinkCard
    href="https://www.linkedin.com/in/korupolusiri"
    target="_blank"
    rel="noopener noreferrer"
  >
    <LinkTitle>LinkedIn</LinkTitle>
    <LinkDesc>Professional profile and updates</LinkDesc>
  </LinkCard>
</Links>

    </Wrapper>
    </PageWrapper>
  );
}
