import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    patients: 0,
    satisfaction: 0,
    emergency: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          // Start counting animation only once when statistics section becomes visible
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounts({
        experience: Math.floor(14 * progress),
        patients: Math.floor(4875 * progress),
        satisfaction: Math.floor(97 * progress),
        emergency: 24 // Keep this static as it's "24/7"
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounts({
          experience: 14,
          patients: 4875,
          satisfaction: 97,
          emergency: 24
        });
      }
    }, stepDuration);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Video Background */}
        <div className="hero-video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1757495805/WhatsApp_Video_2025-09-10_at_12.15.14_95d99a71_o1o9aj.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to Vet Care Clinic
            </h1>
            <p className="hero-description">
              Professional veterinary care for your beloved pets
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="hero-button hero-button-primary">
                Our Services
              </Link>
              <Link to="/appointment" className="hero-button hero-button-secondary">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Text Bar */}
      <section className="moving-text-section">
        <div className="moving-text-container">
          <div className="moving-text-content">
            <span className="moving-text-item">Your pet’s health is our priority—care you can trust.</span>
            <span className="moving-text-item">Compassionate veterinary care for every stage of your pet’s life.</span>
            <span className="moving-text-item">Advanced diagnostics and experienced veterinarians for better outcomes.</span>
            <span className="moving-text-item">From checkups and vaccinations to surgery—everything under one roof.</span>
            <span className="moving-text-item">We treat your pets like family—because they are.</span>
            <span className="moving-text-item">Emergency vet care when you need it most.</span>
            <span className="moving-text-item">Preventive care for longer, happier lives.</span>
            <span className="moving-text-item">Gentle handling and stress‑reduced visits for every pet.</span>
            <span className="moving-text-item">Modern equipment, safe treatments, and personalized care plans.</span>
            <span className="moving-text-item">Trusted care for dogs, cats, and small pets across Bahrain.</span>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{counts.experience}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.patients}+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.satisfaction}%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.emergency}/7</div>
              <div className="stat-label">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible ? 'about-visible' : ''}`}>
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">About Our Clinic</h2>
            <p className="about-subtitle">
              Providing exceptional veterinary care with compassion and expertise
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <div className="about-section">
                <h3 className="about-section-title">Our Mission</h3>
                <p className="about-description">
                  At Vet Care Clinic, we are committed to providing the highest quality 
                  veterinary care in a comfortable and welcoming environment. Our mission is to 
                  help your beloved pets achieve optimal health and happiness through 
                  personalized treatment plans and state-of-the-art medical technology.
                </p>
              </div>
              
              <div className="about-section">
                <h3 className="about-section-title">Why Choose Us</h3>
                <div className="about-features">
                  <div className="about-feature">
                    <div className="about-feature-icon">
                      <img 
                        src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756195644/Screenshot_2025-08-26_110705_ap8z4i.png" 
                        alt="Experienced Team" 
                        className="about-feature-image"
                      />
                    </div>
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">Experienced Team</h4>
                      <p className="about-feature-text">
                        Our team of veterinary professionals has years of experience and 
                        continues to stay updated with the latest veterinary techniques.
                      </p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-feature-icon">
                      <img 
                        src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1757501000/2105138_xr0c1a.png" 
                        alt="Modern Technology" 
                        className="about-feature-image"
                      />
                    </div>
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">Modern Technology</h4>
                      <p className="about-feature-text">
                        We use the latest veterinary technology and equipment to ensure 
                        precise, comfortable, and efficient treatments for your pets.
                      </p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-feature-icon">
                      <img 
                        src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1757501000/2295163_ay2amo.png" 
                        alt="Patient-Centered Care" 
                        className="about-feature-image"
                      />
                    </div>
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">Pet-Centered Care</h4>
                      <p className="about-feature-text">
                        Every pet is unique, and we create personalized treatment 
                        plans that address individual needs and health concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
