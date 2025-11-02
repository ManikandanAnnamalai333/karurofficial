import React,{ useState } from 'react';
import Image from './Images/logo.jpg'; 
import Image1 from './Images/Image1.jpeg'; 
import Image2 from './Images/Image2.jpeg'; 
import Image3 from './Images/Image3.jpeg'; 
import Image4 from './Images/Image4.jpeg'; 
import './App.css';

 
const GlobeIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#007bff" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="feature-icon">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);


function Home()
{
 return(
  <div id='home'>
   <header className="App-header">    
    <h2> Welcome to Karur, Pudukottai: A Living Heritage</h2>
    <p>Your digital gateway to the heart of Karur. Discover local news, historical insights, and community connections.</p>
    <p>
     This website is your digital window into our home—a place to celebrate our heritage, share local news, and connect with fellow residents and those who hold Karur close to their hearts. Our mission is to preserve the past and build a vibrant future, together.
    </p>
          <a href="#features" className="primary-button">Explore Features</a>
   </header>
   </div>)
}

function About()
{
 return(   
  <div id='about'>
   <h2>About Our Village and Its Roots</h2>
   <p>Every village has its stories, and Karur, Pudukottai, is rich with history, unique traditions, and cultural threads that define our identity. This website serves as our public archive. We are committed to documenting and sharing the historical landmarks, celebrating local festivals, and honoring the community leaders and elders who have contributed to our shared past. **Karur's history stretches back centuries**, tied closely to the ancient Chola and Pandya territories, making our soil a repository of South Indian heritage. By centralizing these narratives, we ensure that our children and future generations always know the powerful roots of their home. We encourage all residents to contribute photos, stories, and historical documents!</p>
  </div>
 )
}

function Features() {
  return (
    <div id='features' className="features-section">
      <GlobeIcon />
      <h2>Community Hub and Resources</h2>
      <p className="features-intro">Our platform connects you with the resources and news that matter most to our community.</p>
      
      <div className='features-grid'>
        <div className='feature-item'>
          <h3>Local News & Updates</h3>
          <p>Stay informed with real-time news, announcements, and critical updates from the panchayat and local authorities. Never miss an important event or civic notice.</p>
        </div>
        <div className='feature-item'>
          <h3>Historical Archives</h3>
          <p>Access digitized records, rare photographs, and curated historical essays about Karur's temples (like the Ayyanar Kovil), agriculture, and traditions. Contribute your own family history.</p>
        </div>
        <div className='feature-item'>
          <h3>Resident Connect</h3>
          <p>A forum for residents to discuss local issues, organize events, find local services, and support small village enterprises. Strengthen the bonds of our close-knit community.</p>
        </div>
      </div>
    </div>
  );
}

function Images()
{
 return(
  <div id='images'>
   <h2>Gallery: Glimpses of Karur Life</h2>
   <p>A collection of photographs capturing the natural beauty, spiritual sites, and vibrant community life of our village.</p>
   <div className='image-gallery'>
    <div className='image-item'>
     <img src={Image4} alt="Lush Green Paddy Fields" />
     <p>Scenic view of **paddy fields** surrounding Karur.</p>
    </div>
    <div className='image-item'>
     <img src={Image1} alt="Ayyanar Kovil Entrance" />
     <p>The majestic **Ayyanar Kovil**, a historic landmark.</p>
    </div>
    <div className='image-item'>
     <img src={Image2} alt="Local Temple Festival" />
     <p>Vibrant colors of a **local festival celebration**.</p>
    </div>
    <div className='image-item'>
     <img src={Image3} alt="Banyan Tree in Village Center" />
     <p>The **centuries-old Banyan tree**, a symbol of permanence.</p>
    </div>
   </div>
  </div>
 )
} 

function Contact() {
  return (
    <div id='contact' className="contact-section">
      <h2>Get In Touch</h2>
      <p>Have a question, a story to share, or a suggestion for the website? We'd love to hear from you.</p>
      <div className="contact-details">
        <p>Email: <a href="mailto:karurvillage@example.com">karurvillage@example.com</a></p>
        <p>Panchayat Office Address: Karur Panchayat Office, Pudukottai District - 622001.</p>
        <p>You can also use the feedback form below (placeholder for future implementation).</p>
      </div>
    </div>
  );
}

function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);  
 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };
 return (
  <nav className='navbar'>
   <div className='logo-container'>
    <h1>Karur Official</h1>
    <div className='logo-placeholder'>
     {/* <img src={Image} alt="Karur" /> */}
    </div>
   </div>
      <button className='menu-toggle' onClick={toggleMenu}>      
        {isMenuOpen ? '✕' : '☰'} 
      </button>
   <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
    <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
    <li><a href="#images" onClick={() => setIsMenuOpen(false)}>Images</a></li>
    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
   </ul>
  </nav>
 );
} 

function App() {
 
 return (
  <div className="App">
   <Navbar />   
   <Home/>
   <About/>
        <Features/> {/* New Section */}
   <Images/>  
        <Contact/> {/* New Section */}
  </div>
 );
}

export default App;