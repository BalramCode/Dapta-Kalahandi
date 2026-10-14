// src/components/About/SecretaryNote.jsx
import React from 'react';
import ProfileNote from './ProfileNote';

const SecretaryNote = () => {
  const alwaysVisible = [
    <span key="1" className="font-medium text-slate-900">
      DAPTA’s strong commitment to uplift poor, tribal and women makes it a distinctive civil society organization. Being associated with DAPTA from its inception gives me immense pleasure, especially when I see the poor, tribal and women becoming more aware of their rights and taking charge of their own development.
    </span>,
    "I am very glad to present the Annual Report of 2025–2026, in which the organization has completed its 36th eventful year. DAPTA, a development support organization, has diversified its journey in the sustainable development of underprivileged and marginalized communities, with a special focus on women, children, and tribal people of Kalahandi and other tribal areas of Odisha since its inception.",
    "DAPTA is working on four major focus areas: Women Empowerment, Agriculture & Livelihood, Healthcare, and Education, Child Rights & Humanitarian Support. Based on the realities on the ground, we also collaborate with several network partners. DAPTA works through community participation, community involvement, and community-led evaluation to create sustainable and lasting change."
  ];

  const collapsible = [
    "During this year, DAPTA reached a large number of women, children, and farmers through its various projects. I am proud to share that DAPTA has established new goals for the next five years under Country Strategy–V, reaffirming our commitment to achieving the Sustainable Development Goals (SDGs). Our vision is to create a meaningful and positive impact in the lives of marginalized communities—including the poor, tribal people, women, and transgender individuals—by 2030. We are confident of achieving this vision with the continued support of corporates, government agencies, donors, and civil society organizations.",
    "On behalf of DAPTA, I express my sincere gratitude to all our donors and partners, including SWL, Central Social Welfare Board, State Social Welfare Board, Azim Premji Foundation, Reliance Foundation, NABARD, OSACS, TDH Germany, Barefoot College, SELCO Foundation, Smile Foundation, CHILDLINE India Foundation, Habitat India, Jiv Daya Foundation, ChildFund India, SSPD Department, WCD Department, Millet Mission, Health Department, and many other donor partners.",
    <span key="6" className="font-medium italic text-slate-900 block mt-2 p-4 bg-sky-50 rounded-xl border border-sky-100/50">
      We are equally grateful to the District Administration, Block Administration of Kalahandi and other districts, NGO partners, WASSAN, CACL, LASK, Credibility Alliance, GuideStar, India Donates, FMSF, journalists, friends, associates, and every individual who has supported DAPTA in fulfilling its mission. Your encouragement and partnership have enabled us to reach important milestones, while inspiring us to continue striving toward many more in the years ahead.
    </span>
  ];

  return (
    <ProfileNote
      title="Secretary Note"
      name="Aadarsh Sharma"
      designation="Secretary, DAPTA"
      image=""
      alwaysVisibleParagraphs={alwaysVisible}
      collapsibleParagraphs={collapsible}
    />
  );
};

export default SecretaryNote;
