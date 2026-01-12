import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useEffect, useState } from "react";

/* ================== Wrapper ================== */

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${({ scrolled }) => (scrolled ? "1rem 10%" : "1.5rem 10%")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(8px)" : "none")};
  background: ${({ scrolled }) =>
    scrolled ? "rgba(11,13,16,0.6)" : "transparent"};
  transition: all 0.3s ease;
`;

/* ================== Logo ================== */

const Logo = styled(RouterNavLink)`
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
`;

/* ================== Desktop Links ================== */

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(RouterNavLink)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.65;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
    border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
    padding-bottom: 4px;
  }
`;

const ResumeLink = styled.a`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.45rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

/* ================== Mobile ================== */

const Burger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(11, 13, 16, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 10%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileLink = styled(RouterNavLink)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  text-decoration: none;

  &.active {
    opacity: 1;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const MobileResume = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
`;

/* ================== Component ================== */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <Logo to="/">RESOLUTE</Logo>

      {/* Desktop */}
      <Links>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/skills">Skills</NavItem>
        <NavItem to="/contact">Contact</NavItem>

        <ResumeLink
          href="/Siri_s_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </ResumeLink>
      </Links>

      {/* Mobile */}
      <Burger onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </Burger>

      {open && (
        <MobileMenu
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <MobileLink to="/about" onClick={() => setOpen(false)}>
            About
          </MobileLink>
          <MobileLink to="/projects" onClick={() => setOpen(false)}>
            Projects
          </MobileLink>
          <MobileLink to="/skills" onClick={() => setOpen(false)}>
            Skills
          </MobileLink>
          <MobileLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </MobileLink>

          <MobileResume
           href="/Siri_s_Resume.pdf"
           target="_blank"
           rel="noopener noreferrer"
           onClick={() => setOpen(false)}
           >
  Resume
</MobileResume>

        </MobileMenu>
      )}
    </Nav>
  );
}
