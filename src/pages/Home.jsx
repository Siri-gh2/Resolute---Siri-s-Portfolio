import { motion } from "framer-motion";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 10% 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 6rem 8% 2rem;
  }
`;



const Content = styled.div`
  max-width: 700px;
`;

const Brand = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.accent};
`;

const Line = styled(motion.p)`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`;

const Buttons = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
`;

const Button = styled.a`
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: #0b0d10;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;


const Orb = styled(motion.div)`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(124, 124, 255, 0.6),
    rgba(124, 124, 255, 0.15),
    transparent 70%
  );
  filter: blur(20px);
`;


export default function Home() {
  return (
    <PageWrapper>
    <Wrapper>
        <Left>
      <Content>
        <Brand
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          RESOLUTE
        </Brand>

        <Line
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Driven by clarity. Built with intent.
        </Line>

        <Buttons
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button href="/projects">View Work</Button>
          <Button href="/about">About Me</Button>
        </Buttons>
      </Content>
      </Left>

      <Right>
  <Orb
    animate={{ y: [0, -20, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</Right>

    </Wrapper>
    </PageWrapper>
  );
}
