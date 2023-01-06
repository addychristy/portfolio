import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio <br/>
      </SectionTitle>
      <SectionText>
      I am Adeline Christina. A Post-graduate in the field of Bioinformatics which has helped me gain strength <br/>
      in both the Biological field and the IT field.<br/>
      I have been working as a Coding Trainer for 2 years now and have learnt a lot through that experience. <br/>
      Have moulded young brains to learn logic, debugged codes and brought many ideas to life working alongside my students. <br/>
      All this has helped me to learn many new tools and concepts too.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>
        Learn More About Me
      </Button>
      <Button onClick={() => window.location = '#projects'}>
        See my projects
      </Button>
      <Button onClick={() => window.location = '#tech'}>
        Technologies I know
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;