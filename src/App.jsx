import './App.css'
import CoverSection from './Component/CoverSection/CoverSection'
import Navbar from './Component/Navbar/Navbar'
import Services from './Component/Services/Services'
import SolutionSection from './Component/Solutions/Solution'
import About from './Component/About/About'
import Footer from './Component/Footer/Footer'
import Mission from './Component/Mission/Mission'
import End from './Component/Footer/End'



import { useEffect } from 'react';
import { Contact } from 'lucide-react'


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
      <About></About>
      <Mission></Mission>
      <Services></Services>
      <SolutionSection></SolutionSection>
      <Footer></Footer>
      <End></End>


    </div>
  )
}
export default App
