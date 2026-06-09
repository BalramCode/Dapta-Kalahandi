// src/components/Home/HomeLayout.jsx
import React from 'react';
import HeroPage from './HeroPage'; // 👈 FIX THIS LINE to point to your actual Hero file!
import Advertisement from './Advertisement';
import DaptaCovid from './DaptaCovid';
import DaptaMarch from './DaptaMarch';
import LatestUpdates from './LatestUpdates';
import MissionVisionObjective from './MissionVisionObjective';
import OperationalArea from './OperationalArea';
import OurActivity from './OurActivity';
import ReportsAndReflections from './ReportsAndReflections';
import AwardsAndRecognitions from './AwardsAndRecognitions';
import Footer from "../Footer"
import FounderNote from '../About/FounderNote';
const HomeLayout = () => {
  return (
    <>
      <HeroPage />
      <DaptaCovid />
      <MissionVisionObjective />
      <DaptaMarch />
      <Advertisement />
      {/* <OperationalArea /> */}
      {/* <OurActivity /> */}
      {/* <ReportsAndReflections /> */}
      {/* <LatestUpdates /> */}
      {/* <AwardsAndRecognitions /> */}
      {/* <Footer /> */}
      <FounderNote />
    </>
  );
};

export default HomeLayout;