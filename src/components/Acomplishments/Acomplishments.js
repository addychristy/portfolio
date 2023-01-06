import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: '1st rank in 2nd, 3rd and 9th semester'},
  { number: 1000, text: '1st rank in Diploma in Bio Analytical techniques', },
  { number: 1900, text: 'Vice President of Helix Association of Department of Bioinformatics', },
  { number: 5000, text: 'B Certificate in National Cadet Corps with A Grade' },
  {number:0,text:'Student Council Representative of Department of Bioinformatics'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
