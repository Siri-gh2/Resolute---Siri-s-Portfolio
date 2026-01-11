import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 2.4rem;
  cursor: pointer;
  transition: all 0.35s ease;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.accent};
    background: rgba(255, 255, 255, 0.05);
  }
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
  line-height: 1.5;
`;

const CTA = styled.span`
  display: inline-block;
  margin-top: 1.8rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0;
  transform: translateY(6px);
  transition: all 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function ProjectCard({ id, title, description }) {
  const navigate = useNavigate();

  return (
    <Card
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/projects/${id}`)}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>

      {/* CTA — visual cue only */}
      <CTA>View project →</CTA>
    </Card>
  );
}
