import './App.css'
import CoverSection from './Component/CoverSection/CoverSection'
import Navbar from './Component/Navbar/Navbar'
import Services from './Component/Services/Services'
import Manufactures from './Component/Solutions/Manufactures'
import Solution from './Component/Solutions/Solution'

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleSolutionsNavLinkClick = () => {
      const solutionsSection = document.getElementById('solutions-section');
      if (solutionsSection) {
        solutionsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('solutionsNavLinkClick', handleSolutionsNavLinkClick);

    return () => {
      window.removeEventListener('solutionsNavLinkClick', handleSolutionsNavLinkClick);
    };
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <CoverSection></CoverSection>
      <Services></Services>
      <Solution></Solution>
      <Manufactures></Manufactures>
    </div>
  )
}

export default App
