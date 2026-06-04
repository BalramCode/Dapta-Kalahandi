// src/components/Home/HomeLayout.jsx
import React from 'react';
import HeroPage from './HeroPage'; // 👈 FIX THIS LINE to point to your actual Hero file!
import Advertisement from './Advertisement';
import DaptaGlance from './DaptaGlance';
import DaptaMarch from './DaptaMarch';
import LatestUpdates from './LatestUpdates';
import MissionVisionObjective from './MissionVisionObjective';
import OperationalArea from './OperationalArea';
import OurActivity from './OurActivity';
import ReportsAndReflections from './ReportsAndReflections';
import AwardsAndRecognitions from './AwardsAndRecognitions';
import Footer from "../Footer"
const HomeLayout = () => {
  return (
    <>
      <HeroPage />
      <DaptaGlance />
      <MissionVisionObjective />
      <DaptaMarch />
      <Advertisement />
      <OperationalArea />
      <OurActivity />
      <ReportsAndReflections />
      <LatestUpdates />
      <AwardsAndRecognitions />
      {/* <Footer /> */}
    </>
  );
};

export default HomeLayout;