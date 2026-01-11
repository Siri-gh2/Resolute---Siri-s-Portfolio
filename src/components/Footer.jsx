import styled from "styled-components";

const Wrapper = styled.footer`
  padding: 3rem 10% 2rem;
  margin-top: 6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Left = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const Right = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Link = styled.a`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Left>© {new Date().getFullYear()} Korupolu Siri · PORTFOLIO
      </Left>

      <Right>
        <Link href="/contact">Connect</Link>
      </Right>
    </Wrapper>
  );
}
