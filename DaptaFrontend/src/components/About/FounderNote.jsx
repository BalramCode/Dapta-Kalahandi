// src/components/About/FounderNote.jsx
import React from 'react';
import ProfileNote from './ProfileNote';

const FounderNote = () => {
  const alwaysVisible = [
    "I am happy to describe 25th eventful journey of DAPTA in Sustainable Development World. Born as a Development support Organization, it has diversified its role in order to develop & empower deprived community and poor people.",
    "Since its inception, the organization has given priority to Women Empowerment and development of tribal people in the Dist. of Kalahandi & in other Tribal District of Odisha. As Kalahandi has several problems which is affecting poor and tribal of Kalahandi, DAPTA as a development organization has given more focus to work on these issues with the involvement of community."
  ];

  const collapsible = [
    "Witnessing the field reality DAPTA is working with some network partners for the empowerment of women in Kalahandi as well as at Kandhamal & Deogarh district of Odisha. Also this year DAPTA has studied the socio economic status of one block of Deogarh and one block of Nabarangpur district of Odisha for future intervention if needed.",
    "DAPTA believes on work & Sky is not the limit. We feel pain of poor & neglected people in heart & believe to work accordingly."
  ];

  return (
    <ProfileNote
      title="Founder Note"
      name="Raju Sharma"
      designation="Founder"
      image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
      alwaysVisibleParagraphs={alwaysVisible}
      collapsibleParagraphs={collapsible}
    />
  );
};

export default FounderNote;