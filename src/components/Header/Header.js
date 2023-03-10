import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior>
        <a style={{display: "flex", alignItems:"center", color:"white"}}>
          <DiCssdeck size="3rem" /> 
          <Span>Portfolio</Span>
        </a>
      </Link>
      
    </Div1>
  </Container>
);

export default Header;
