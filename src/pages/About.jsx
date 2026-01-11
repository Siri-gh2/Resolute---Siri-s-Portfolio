import styled from "styled-components";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import PageWrapper from "../components/PageWrapper";


/* ================== Layout Wrappers ================== */

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 8rem 0 4rem;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10%;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;              /* centers image relative to text */
  justify-content: space-between;
  gap: 6rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

/* ================== Text ================== */

const Content = styled.div`
  flex: 1;
`;

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2.5rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 2rem;
`;

const Emphasis = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const Divider = styled.div`
  width: 60px;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent};
  margin: 3rem 0;
  opacity: 0.6;
`;

/* ================== Image ================== */

const ImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 360px;
  max-width: 100%;
  border-radius: 18px;
  filter: grayscale(6%);
`;

/* ================== Component ================== */

export default function About() {
  return (
    <PageWrapper>
    <Wrapper>
      <Inner>
        <Layout>
          {/* LEFT — TEXT */}
          <Content>
            <Eyebrow>About</Eyebrow>
            <Title>Building with clarity and intent</Title>

            <Paragraph
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  I’m <Emphasis>Korupolu Siri</Emphasis>, a Computer Science and Engineering
  student who enjoys building systems that solve real problems and feel
  intuitive to use. I care less about flashy features and more about
  understanding <Emphasis>why</Emphasis> a product exists and
  <Emphasis> how</Emphasis> it should be designed and built.
</Paragraph>

<Paragraph
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15, duration: 0.6 }}
>
  My work focuses on{" "}
  <Emphasis>full-stack web development</Emphasis>, with strong attention to{" "}
  <Emphasis>frontend structure</Emphasis>,{" "}
  <Emphasis>user experience</Emphasis>, and{" "}
  <Emphasis>maintainable code</Emphasis>. I aim to build applications that go
  beyond prototypes and can scale logically as they grow.
</Paragraph>

<Divider />

<Paragraph
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
  Currently, I’m strengthening my{" "}
  <Emphasis>MERN full-stack foundations</Emphasis> while exploring{" "}
  <Emphasis>AI & Data Science</Emphasis> to expand how I approach
  problem-solving. I believe in learning deeply, building intentionally, and
  letting results follow solid fundamentals.
</Paragraph>

          </Content>

          {/* RIGHT — IMAGE */}
          <ImageWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ProfileImage src={profile} alt="Siri profile" />
          </ImageWrapper>
        </Layout>
      </Inner>
    </Wrapper>
    </PageWrapper>
  );
}
