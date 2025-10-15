import './App.css'
import CoverSection from './Component/CoverSection/CoverSection'
import Navbar from './Component/Navbar/Navbar'
import Services from './Component/Services/Services'
import SolutionSection from './Component/Solutions/Solution'

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on initial load
  }, []);

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
      <SolutionSection></SolutionSection>
    </div>
  )
}
export default App
