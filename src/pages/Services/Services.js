import React, { useState, useEffect } from 'react';
import { 
  FaHeartbeat, 
  FaPaw, 
  FaCut, 
  FaFlask, 
  FaMicroscope, 
  FaSyringe, 
  FaUserMd,
  FaXRay,
  FaExclamationTriangle
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Set visible immediately when component mounts
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const openServicePopup = (service) => {
    setSelectedService(service);
  };

  const closeServicePopup = () => {
    setSelectedService(null);
  };

  const services = [
    {
      id: 1,
      name: "Advanced Pet Check Up Technology",
      description: "Digital X-Rays - Ultrasound - Blood Testing - Health Monitoring",
      doctors: [
        {
          name: "Dr. Sarah Johnson",
          specialty: "Veterinarian",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.jpg"
        }
      ],
      icon: <FaXRay />,
      features: ["Digital X-Rays", "Ultrasound", "Blood Testing", "Health Monitoring"]
    },
    {
      id: 2,
      name: "Puppy & Kitten Speciality Care",
      description: "Gentle approach - Pet Friendly Environment - From Birth Through Adulthood",
      doctors: [
        {
          name: "Dr. Lisa Park",
          specialty: "Veterinarian",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216187/Signs-Good-Dentist_zmorau.jpg"
        }
      ],
      icon: <FaPaw />,
      features: ["Gentle Approach", "Pet Friendly Environment", "Puppy Care", "Kitten Care"]
    },
    {
      id: 3,
      name: "Pet Grooming Services",
      description: "Bathing - Nail Trimming - Fur Styling - Dental Cleaning",
      doctors: [
        {
          name: "Dr. Michael Chen",
          specialty: "Veterinarian",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.jpg"
        }
      ],
      icon: <FaCut />,
      features: ["Bathing", "Nail Trimming", "Fur Styling", "Dental Cleaning", "Pet Styling"]
    },
    {
      id: 4,
      name: "Pet Health & Wellness",
      description: "Professional pet health and preventive care services",
      doctors: [
        {
          name: "Dr. Sarah Johnson",
          specialty: "Veterinarian",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.jpg"
        }
      ],
      icon: <FaHeartbeat />,
      features: ["Health Checkups", "Preventive Care", "Pet Health Education", "Wellness Plans"]
    },
    {
      id: 5,
      name: "Veterinary Laboratory",
      description: "State-of-the-Art - Advanced Diagnostic Technology",
      doctors: [
        {
          name: "Dr. James Martinez",
          specialty: "Veterinarian",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216183/dental-associate-job-1170x780_ipoxli.jpg"
        }
      ],
      icon: <FaFlask />,
      features: ["State-of-the-Art Equipment", "Advanced Diagnostics", "Blood Work", "Pathology"]
    },
    {
      id: 6,
      name: "Pet Surgery",
      description: "Advanced surgical procedures for pets",
      doctors: [
        {
          name: "Dr. Amanda Foster",
          specialty: "Veterinary Surgeon",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
        }
      ],
      icon: <FaMicroscope />,
      features: ["Spay/Neuter", "Soft Tissue Surgery", "Orthopedic Surgery", "Emergency Surgery"]
    },
    {
      id: 7,
      name: "General Veterinary Care",
      description: "Checkups - Vaccinations - Parasite Control - Nutrition - Grooming",
      doctors: [
        {
          name: "Dr. Sarah Johnson",
          specialty: "Veterinarian",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.jpg"
        }
      ],
      icon: <FaUserMd />,
      features: ["Checkups", "Vaccinations", "Parasite Control", "Nutrition", "Grooming", "Health Monitoring"]
    },
    {
      id: 8,
      name: "Pet Vaccinations",
      description: "Core and lifestyle vaccines for optimal pet health",
      doctors: [
        {
          name: "Dr. Robert Wilson",
          specialty: "Veterinarian",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216191/How-Often-Should-I-See-the-Dentist-scaled_etmpkb.jpg"
        }
      ],
      icon: <FaSyringe />,
      features: ["Core Vaccines", "Lifestyle Vaccines", "Puppy Vaccines", "Kitten Vaccines"]
    },
    {
      id: 9,
      name: "Emergency Pet Care",
      description: "24/7 emergency veterinary services for urgent pet health issues",
      doctors: [
        {
          name: "Dr. David Thompson",
          specialty: "Emergency Veterinarian",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215714/Alex_in_the_surgery_at_Munro_Dental_eawjzy.webp"
        }
      ],
      icon: <FaExclamationTriangle />,
      features: ["24/7 Emergency Care", "Critical Care", "Trauma Treatment", "Poisoning Treatment", "Emergency Surgery"]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section - Outside container for full width */}
      <div className="services-hero">
        {/* Video Background */}
        <div className="services-hero-video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="services-hero-video"
          >
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1757495811/WhatsApp_Video_2025-09-10_at_12.16.22_98d62cb3_gos0c5.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="services-hero-video-overlay"></div>
        </div>
        
        <div className="services-hero-container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">
              Our Services
            </h1>
            <p className="services-hero-description">
              Comprehensive veterinary care provided by our expert team of specialists
            </p>
            <div className="services-hero-buttons">
              <a href="/contact" className="services-hero-button contact-button">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Services Bar */}
      <div className="moving-services-bar">
        <div className="moving-services-content">
          <span>Advanced Pet Check Up Technology</span>
          <span>•</span>
          <span>Puppy & Kitten Speciality Care</span>
          <span>•</span>
          <span>Pet Grooming Services</span>
          <span>•</span>
          <span>Pet Health & Wellness</span>
          <span>•</span>
          <span>Veterinary Laboratory</span>
          <span>•</span>
          <span>Pet Surgery</span>
          <span>•</span>
          <span>General Veterinary Care</span>
          <span>•</span>
          <span>Pet Vaccinations</span>
          <span>•</span>
          <span>Emergency Pet Care</span>
          <span>•</span>
          <span>Advanced Pet Check Up Technology</span>
          <span>•</span>
          <span>Puppy & Kitten Speciality Care</span>
          <span>•</span>
          <span>Pet Grooming Services</span>
          <span>•</span>
          <span>Pet Health & Wellness</span>
          <span>•</span>
          <span>Veterinary Laboratory</span>
          <span>•</span>
          <span>Pet Surgery</span>
          <span>•</span>
          <span>General Veterinary Care</span>
          <span>•</span>
          <span>Pet Vaccinations</span>
          <span>•</span>
          <span>Emergency Pet Care</span>
          <span>•</span>
          <span>Advanced Pet Check Up Technology</span>
          <span>•</span>
          <span>Puppy & Kitten Speciality Care</span>
          <span>•</span>
          <span>Pet Grooming Services</span>
          <span>•</span>
          <span>Pet Health & Wellness</span>
          <span>•</span>
          <span>Veterinary Laboratory</span>
          <span>•</span>
          <span>Pet Surgery</span>
          <span>•</span>
          <span>General Veterinary Care</span>
          <span>•</span>
          <span>Pet Vaccinations</span>
          <span>•</span>
          <span>Emergency Pet Care</span>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className={`services ${isVisible ? 'services-visible' : ''}`}>
        <div className="services-container">
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => openServicePopup(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  {service.iconImage ? (
                    <img 
                      src={service.iconImage} 
                      alt={service.name}
                      className="service-icon-image"
                    />
                  ) : (
                    <span className="service-icon-text">{service.icon}</span>
                  )}
                </div>
                
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  

                  
                  <div className="service-features">
                    <h4 className="features-title">Services Include:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="service-button">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Doctors Popup */}
      {selectedService && (
        <div className="service-popup-overlay" onClick={closeServicePopup}>
          <div className="service-popup" onClick={(e) => e.stopPropagation()}>
            <button className="service-popup-close-btn" onClick={closeServicePopup}>×</button>
            
            <div className="service-popup-content">
              <div className="service-popup-header">
                <div className="service-popup-icon">
                  {selectedService.iconImage ? (
                    <img 
                      src={selectedService.iconImage} 
                      alt={selectedService.name}
                      className="service-popup-icon-image"
                    />
                  ) : (
                    <span className="service-popup-icon-text">{selectedService.icon}</span>
                  )}
                </div>
                <h3 className="service-popup-name">{selectedService.name}</h3>
                <p className="service-popup-description">{selectedService.description}</p>
              </div>
              
              <div className="service-popup-doctors">
                <h4 className="doctors-title">Doctors who perform this service:</h4>
                <div className="doctors-list">
                  {selectedService.doctors.map((doctor, index) => (
                    <div key={index} className="doctor-item">
                      <div className="doctor-image">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="doctor-avatar"
                        />
                      </div>
                      <div className="doctor-info">
                        <span className="doctor-name">{doctor.name}</span>
                        <span className="doctor-specialty">{doctor.specialty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="service-popup-features">
                <h4 className="features-title">Services Include:</h4>
                <ul className="features-list">
                  {selectedService.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
