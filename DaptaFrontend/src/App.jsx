import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // 👈 Import your Layout component
import HomeLayout from './components/Home/HomeLayout';
// Import your other page components here as you build them, e.g.:
// import AboutUs from './components/About/AboutUs';

function App() {
  return (
    <Routes>
      {/* 1. Wrap ALL routes inside your main Layout component */}
      <Route path="/" element={<Layout />}>
        
        {/* 2. Define your individual pages as nested children */}
        <Route index element={<HomeLayout />} /> 
        
        {/* Example of how you'll add more pages easily later: */}
        {/* <Route path="about/about-us" element={<AboutUs />} /> */}
        
      </Route>
    </Routes>
  );
}

export default App;